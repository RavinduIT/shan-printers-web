
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { PrintItem } from "@/types/PrintItem";

export function PopularItems() {
  const [popularItems, setPopularItems] = useState<PrintItem[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load items and services from localStorage
    const items = JSON.parse(localStorage.getItem("printItems") || "[]");
    const services = JSON.parse(localStorage.getItem("printServices") || "[]");
    setServices(services);
    
    // Get view and order counts
    const viewCounts = JSON.parse(localStorage.getItem("viewCounts") || "{}");
    const orderCounts = JSON.parse(localStorage.getItem("orderCounts") || "{}");
    
    // Calculate popularity score (combination of views and orders)
    const itemsWithPopularity = items.map((item: PrintItem) => {
      const viewScore = viewCounts[item.serviceId] || 0;
      const orderScore = orderCounts[item.id] || 0;
      return {
        ...item,
        popularityScore: orderScore * 3 + viewScore // Orders weighted 3x more than views
      };
    });
    
    // Sort by popularity score and get top 4
    let sortedItems = [...itemsWithPopularity].sort((a, b) => b.popularityScore - a.popularityScore);
    
    // If not enough items with popularity, add random items
    if (sortedItems.filter(item => item.popularityScore > 0).length < 4) {
      // Shuffle the remaining items that don't have a popularity score
      const remainingItems = sortedItems.filter(item => item.popularityScore === 0);
      for (let i = remainingItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingItems[i], remainingItems[j]] = [remainingItems[j], remainingItems[i]];
      }
      
      // Combine popular items with random ones
      const popularOnes = sortedItems.filter(item => item.popularityScore > 0);
      sortedItems = [...popularOnes, ...remainingItems];
    }
    
    // Take top 4 or fewer if not enough items
    setPopularItems(sortedItems.slice(0, 4));
  }, []);

  const handleServiceClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  const handleOrder = (item: PrintItem) => {
    const message = `Item name: ${item.name} (ID: ${item.id}). Is it available?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/94777987829?text=${encodedMessage}`, "_blank");
    
    // Track order clicks
    const orderCounts = JSON.parse(localStorage.getItem("orderCounts") || "{}");
    orderCounts[item.id] = (orderCounts[item.id] || 0) + 1;
    localStorage.setItem("orderCounts", JSON.stringify(orderCounts));
    
    toast.success("Opening WhatsApp...");
  };

  if (popularItems.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Popular Items</h2>
          <p className="text-muted-foreground">
            Our most popular printing products and services that customers love
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item) => {
            const service = services.find(s => s.id === item.serviceId) || { title: "Unknown" };
            return (
              <Card key={item.id} className="hover-scale overflow-hidden animate-fade-in">
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif line-clamp-1">{item.name}</CardTitle>
                  <p className="text-xs text-primary font-medium" onClick={() => handleServiceClick(item.serviceId)}>
                    {service.title}
                  </p>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description || `Quality ${service.title} service from Shan Printers`}
                  </p>
                  <p className="mt-2 font-bold">
                    Rs. {item.price.toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 text-xs"
                    onClick={() => handleServiceClick(item.serviceId)}
                  >
                    View Service
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                  <Button 
                    className="flex-1 text-xs"
                    onClick={() => handleOrder(item)}
                  >
                    <ShoppingCart className="mr-1 h-3 w-3" />
                    Order
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
