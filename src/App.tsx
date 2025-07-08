
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
          image: "https://www.arka.com/cdn/shop/files/what-is-offset-printing-packaging.jpg?v=1702472085&width=406"
        },
        {
          id: "digital-printing",
          title: "Digital Printing",
          description: "Fast and cost-effective digital printing solutions for short runs and on-demand printing needs.",
          icon: "💻",
          image: "https://studio54print.com/wp-content/uploads/2020/03/Digital-Print-ul.jpg"
        },
        {
          id: "screen-printing",
          title: "Screen Printing",
          description: "Custom screen printing for t-shirts, merchandise, signage, and promotional products with long-lasting results.",
          icon: "🎴",
          image: "https://steveapparel.com/images/blog/what-is-screen-Printing.jpeg"
        },
        {
          id: "wedding-cards",
          title: "Wedding Cards",
          description: "Elegant and customized wedding invitation cards with premium papers and beautiful designs.",
          icon: "💌",
          image: "https://withjoy.com/assets/public/marcom-prod/invites-gallery/hero.jpg?m_resize=w600&opt=aggressive&ver=2"
        },
        {
          id: "wedding-cake-boxes",
          title: "Wedding Cake Boxes",
          description: "Stylish and sturdy custom wedding cake boxes to complement your special occasion.",
          icon: "🎂",
          image: "https://sevencolourscard.com/wp-content/uploads/2020/04/Favour-Box-Rich-Cake-wedding-boxes-in-assorted-colours-3.jpg"
        },
        {
          id: "seals-key-tags",
          title: "Seals & Key Tags",
          description: "Professional seals, stamps, and customized key tags for branding and identification.",
          icon: "🔑",
          image: "https://epiplastics.co.nz/images/105796_house_flexi_key_ring_1000.jpg"
        },
        {
          id: "mug-printing",
          title: "Mug Printing",
          description: "Personalized mug printing services for gifts, promotions, and merchandising.",
          icon: "☕",
          image: "https://onada.lk/public/uploads/products/photos/RzxLdXUsXc7d98FyrM0Gy9wgBIZROSn6FDDGjtwD.png"
        },
        {
          id: "banner-printing",
          title: "Banner Printing",
          description: "Large format banner printing for indoor and outdoor advertising, events, and promotions.",
          icon: "🏁",
          image: "https://cdn.printarabia.ae/assets/product-uploads/production/product_selection_banner-printarabia-116cc86b8de414dd5e7b00af889785a0.jpg"
        }
      ];
      
      localStorage.setItem("printServices", JSON.stringify(initialServices));
      
      const sampleItems = [
        {
          id: "item1",
          name: "Business Card (Premium)",
          description: "300gsm matte-finish premium business cards with spot UV coating",
          price: 2500,
          serviceId: "offset-printing",
          image: "https://cloudprint.uk/wp-content/uploads/2023/06/Business-card.jpg",
          createdAt: new Date().toISOString()
        },
        {
          id: "item2",
          name: "A4 Color Flyer",
          description: "Full color A4 flyers printed on 150gsm art paper",
          price: 1500,
          serviceId: "digital-printing",
          image: "https://5.imimg.com/data5/SELLER/Default/2022/3/OQ/DT/YD/3597247/dsd-500x500.jpg",
          createdAt: new Date().toISOString()
        },
        {
          id: "item3",
          name: "Custom T-Shirt",
          description: "Screen printed custom t-shirts with your design, minimum order of 50 pieces",
          price: 950,
          serviceId: "screen-printing",
          image: "https://thebanyantee.com/cdn/shop/files/White-T-shirt_f1ff4218-0807-441e-966a-7b3cf6c1bf63.jpg?v=1751219681",
          createdAt: new Date().toISOString()
        },
        {
          id: "item4",
          name: "Wedding Invitation (Gold Foil)",
          description: "Elegant wedding invitations with gold foil stamping and premium envelope",
          price: 150,
          serviceId: "wedding-cards",
          image: "https://www.pickybride.com/cdn/shop/files/gold-acrylic-mirror-wedding-invitation-elegant-invites-cards-with-filigree-frame-wedding-ceremony-supplies-picky-bride-487364_1024x1024.jpg",
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
