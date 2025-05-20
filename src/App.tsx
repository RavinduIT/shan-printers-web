
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import Admin from "./pages/Admin";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize services in localStorage if they don't exist
    const existingServices = localStorage.getItem("printServices");
    if (!existingServices) {
      const initialServices = [
        {
          id: "offset-printing",
          title: "Offset Printing",
          description: "High-quality offset printing for brochures, flyers, business cards, and more with vibrant colors and sharp details.",
          icon: "🖨️",
          image: "https://images.unsplash.com/photo-1598214015728-bc73871186d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "digital-printing",
          title: "Digital Printing",
          description: "Fast and cost-effective digital printing solutions for short runs and on-demand printing needs.",
          icon: "💻",
          image: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "screen-printing",
          title: "Screen Printing",
          description: "Custom screen printing for t-shirts, merchandise, signage, and promotional products with long-lasting results.",
          icon: "👕",
          image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "wedding-cards",
          title: "Wedding Cards",
          description: "Elegant and customized wedding invitation cards with premium papers and beautiful designs.",
          icon: "💌",
          image: "https://images.unsplash.com/photo-1595706449515-89e772a4da9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "wedding-cake-boxes",
          title: "Wedding Cake Boxes",
          description: "Stylish and sturdy custom wedding cake boxes to complement your special occasion.",
          icon: "🎂",
          image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "seals-key-tags",
          title: "Seals & Key Tags",
          description: "Professional seals, stamps, and customized key tags for branding and identification.",
          icon: "🔑",
          image: "https://images.unsplash.com/photo-1623179304349-93446fdb0b5c?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "mug-printing",
          title: "Mug Printing",
          description: "Personalized mug printing services for gifts, promotions, and merchandising.",
          icon: "☕",
          image: "https://images.unsplash.com/photo-1572290569742-d67a6bf040f5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "banner-printing",
          title: "Banner Printing",
          description: "Large format banner printing for indoor and outdoor advertising, events, and promotions.",
          icon: "🏁",
          image: "https://images.unsplash.com/photo-1565979159261-7973517cd194?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ];
      
      localStorage.setItem("printServices", JSON.stringify(initialServices));
      
      // Add some sample items
      const sampleItems = [
        {
          id: "item1",
          name: "Business Card (Premium)",
          description: "300gsm matte-finish premium business cards with spot UV coating",
          price: 2500,
          serviceId: "offset-printing",
          image: "https://images.unsplash.com/photo-1606236535784-aa2007001add?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          createdAt: new Date().toISOString()
        },
        {
          id: "item2",
          name: "A4 Color Flyer",
          description: "Full color A4 flyers printed on 150gsm art paper",
          price: 1500,
          serviceId: "digital-printing",
          image: "https://images.unsplash.com/photo-1574264730836-6abe878fdfb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          createdAt: new Date().toISOString()
        },
        {
          id: "item3",
          name: "Custom T-Shirt",
          description: "Screen printed custom t-shirts with your design, minimum order of 10 pieces",
          price: 950,
          serviceId: "screen-printing",
          image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          createdAt: new Date().toISOString()
        },
        {
          id: "item4",
          name: "Wedding Invitation (Gold Foil)",
          description: "Elegant wedding invitations with gold foil stamping and premium envelope",
          price: 750,
          serviceId: "wedding-cards",
          image: "https://images.unsplash.com/photo-1607611439230-afcf205cf7e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          createdAt: new Date().toISOString()
        }
      ];
      
      localStorage.setItem("printItems", JSON.stringify(sampleItems));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/service/:serviceId" element={<ServiceDetails />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
