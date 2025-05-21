import { Navbar } from "@/components/Navbar";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { ServiceCard } from "@/components/ServiceCard";
import { PopularItems } from "@/components/PopularItems";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    // Get services from localStorage
    const storedServices = JSON.parse(localStorage.getItem("printServices") || "[]");
    setServices(storedServices);
  }, []);

  return (
    <>
      <Navbar />
      <FloatingContactButton />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-accent pt-16">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6 text-center md:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Your <span className="text-gradient">Printing Partner</span> for Every Need
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Professional printing services in Matara. From business cards to banners, 
                wedding cards to promotional items - we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="text-md group"
                  onClick={() => window.open("https://wa.me/94777987829", "_blank")}
                >
                  Contact Us Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-md"
                  asChild
                >
                  <a href="#services">Our Services</a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full animate-float" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{animationDelay: "1s"}} />
                <img
                  src="https://smallbusinessmarketing.uk/wp-content/uploads/2024/04/printing-press-1024x683.jpg"
                  alt="Professional Printing Services"
                  className="rounded-xl shadow-xl w-full object-cover z-10 relative transition-transform hover:scale-105 duration-300 ease-in-out"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <PopularItems />

      {/* Services Section */}
      <section id="services" className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Printing Services</h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of printing solutions to meet all your personal and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <ServiceCard 
                  id={service.id}
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon}
                  image={service.image} 
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{animationDelay: "0.5s"}}>
            <Button asChild variant="outline">
              <a href="/about" className="flex items-center gap-2">
                Learn More About Our Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full animate-float" />
                <img 
                  src="https://www.flippingheck.com/wp-content/uploads/2023/08/a-modern-printing-press-producing-multi-coloured-p.jpeg" 
                  alt="Shan Printers Workshop" 
                  className="rounded-xl shadow-xl w-full object-cover z-10 relative"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">About Shan Printers</h2>
              <p className="text-muted-foreground">
                Established in Matara, Shan Printers has built a reputation for excellence in the printing industry. 
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred printing partner 
                for businesses and individuals alike.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover-scale">
                  <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                  <p className="text-sm text-muted-foreground">We ensure the highest quality in every project we undertake.</p>
                </div>
                <div className="border rounded-lg p-4 hover-scale">
                  <h3 className="font-semibold mb-2">Fast Turnaround</h3>
                  <p className="text-sm text-muted-foreground">Quick delivery without compromising on quality.</p>
                </div>
                <div className="border rounded-lg p-4 hover-scale">
                  <h3 className="font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-sm text-muted-foreground">Tailored printing solutions to meet your specific needs.</p>
                </div>
                <div className="border rounded-lg p-4 hover-scale">
                  <h3 className="font-semibold mb-2">Experienced Team</h3>
                  <p className="text-sm text-muted-foreground">Our skilled staff brings years of expertise to your projects.</p>
                </div>
              </div>
              
              <div>
                <Button asChild>
                  <a href="/about" className="flex items-center gap-2">
                    Read More About Us
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Get in touch with us for inquiries, quotes, or to discuss your printing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350.7538987759703!2d80.54431580492411!3d5.9495491893722585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae139004cfdb57f%3A0x244f29d4e59accb4!2sShan%20Printers!5e0!3m2!1sen!2slk!4v1747740916610!5m2!1sen!2slk" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shan Printers Location"
                />
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="border rounded-lg p-6 bg-card shadow-sm">
                <h3 className="text-xl font-serif font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-muted-foreground">Shan Printers, Matara, Sri Lanka</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+94 77 7987 829</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">shanprintersmatara@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="text-md w-full flex gap-2 group"
                  onClick={() => window.open("https://wa.me/94777987829", "_blank")}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                  <ArrowRight className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-md w-full flex gap-2 group"
                  onClick={() => window.open("mailto:shanprintersmatara@gmail.com", "_blank")}
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                  <ArrowRight className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Shan Printers</h3>
              <p className="text-sm opacity-80">
                Your one-stop solution for all printing needs in Matara.
                High quality printing services for businesses and individuals.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About</a></li>
                <li><a href="#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Services</a></li>
                <li><a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Connect With Us</h3>
              <p className="text-sm opacity-80 mb-2">
                Follow us on social media for updates and promotions.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="bg-primary-foreground/20 hover:bg-primary-foreground/40 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-primary-foreground/20 hover:bg-primary-foreground/40 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-primary-foreground/20 hover:bg-primary-foreground/40 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} Shan Printers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
