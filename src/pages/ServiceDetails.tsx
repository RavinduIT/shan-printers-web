
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { PrintItem } from "@/types/PrintItem";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState<PrintItem[]>([]);
  const [service, setService] = useState<{title: string, description: string} | null>(null);

  useEffect(() => {
    // Get the service details
    const services = JSON.parse(localStorage.getItem("printServices") || "[]");
    const currentService = services.find((s: any) => s.id === serviceId);
    if (currentService) {
      setService(currentService);
    } else {
      toast.error("Service not found");
      navigate("/");
    }

    // Get the items for this service
    const storedItems = JSON.parse(localStorage.getItem("printItems") || "[]");
    const filteredItems = storedItems.filter((item: PrintItem) => item.serviceId === serviceId);
    setItems(filteredItems);

    // Increment view count for this service
    const viewCounts = JSON.parse(localStorage.getItem("viewCounts") || "{}");
    viewCounts[serviceId] = (viewCounts[serviceId] || 0) + 1;
    localStorage.setItem("viewCounts", JSON.stringify(viewCounts));
  }, [serviceId, navigate]);

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

  return (
    <>
      <Navbar />
      <FloatingContactButton />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {service && (
          <div className="mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{service.title}</h1>
            <p className="text-muted-foreground max-w-3xl">{service.description}</p>
          </div>
        )}

        {items.length > 0 ? (
          <div className="rounded-lg border animate-fade-in">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id} className="hover-scale transition-all">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-12 h-12 object-cover rounded-md"
                          />
                        )}
                        <span>{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell className="text-right font-medium">
                      Rs. {item.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => handleOrder(item)}
                        className="flex items-center gap-1"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Order
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-10 border rounded-lg animate-fade-in">
            <h3 className="text-xl font-medium mb-2">No items available</h3>
            <p className="text-muted-foreground mb-4">There are no items listed for this service yet.</p>
            <Button onClick={() => navigate("/")}>Go Back to Home</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceDetails;
