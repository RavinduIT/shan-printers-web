
import { Navbar } from "@/components/Navbar";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Award, Clock, Users, Printer } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <FloatingContactButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              About <span className="text-gradient">Shan Printers</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Established with a vision to provide exceptional printing services in Matara, 
              we've grown into a trusted partner for businesses and individuals alike.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Shan Printers was established with a simple mission - to provide high-quality printing 
                services that help businesses and individuals communicate their messages effectively.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small printing shop has grown into a comprehensive printing service 
                provider, equipped with modern technology and a team of skilled professionals.
              </p>
              <p className="text-muted-foreground">
                Today, we are proud to serve a wide range of clients in Matara and beyond, 
                offering everything from business cards to large format printing, wedding
                invitations to promotional merchandise.
              </p>
            </div>
            <div className="relative animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full animate-float" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{animationDelay: "1.5s"}} />
              <img 
                src="https://media.istockphoto.com/id/1334041236/photo/print-shop-worker-checking-quality-of-imprint-and-controlling-printing-process.jpg?s=612x612&w=0&k=20&c=NFVG2CRnEd0mSL6qeJCVPDrRS3FEOLZ8JL2b9uu74ys=" 
                alt="Printing workshop" 
                className="rounded-xl shadow-xl w-full h-[400px] object-cover z-10 relative"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide everything we do at Shan Printers
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card shadow-md rounded-xl p-6 hover-scale border-2 border-transparent hover:border-primary/20 animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
              <p className="text-muted-foreground">
                We never compromise on quality, ensuring that every project meets the highest standards.
              </p>
            </div>
            
            <div className="bg-card shadow-md rounded-xl p-6 hover-scale border-2 border-transparent hover:border-primary/20 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground">
                We understand the importance of deadlines and commit to delivering projects on time, every time.
              </p>
            </div>
            
            <div className="bg-card shadow-md rounded-xl p-6 hover-scale border-2 border-transparent hover:border-primary/20 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                Our customers are at the heart of everything we do. We listen, understand, and deliver.
              </p>
            </div>
            
            <div className="bg-card shadow-md rounded-xl p-6 hover-scale border-2 border-transparent hover:border-primary/20 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously invest in new technologies and techniques to offer the best printing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Expert Team</h2>
            <p className="text-muted-foreground">
              Meet the dedicated professionals behind Shan Printers
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="bg-card rounded-xl overflow-hidden shadow-md hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Team Member" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Shan Fernando</h3>
                  <p className="text-secondary font-medium mb-3">Founder & CEO</p>
                  <p className="text-muted-foreground text-sm">
                    With over 15 years of experience in the printing industry, Shan leads our team with vision and expertise.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="bg-card rounded-xl overflow-hidden shadow-md hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Team Member" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Sarah Perera</h3>
                  <p className="text-secondary font-medium mb-3">Design Director</p>
                  <p className="text-muted-foreground text-sm">
                    Sarah brings creative excellence to every project, ensuring designs that stand out and communicate effectively.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="bg-card rounded-xl overflow-hidden shadow-md hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Team Member" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Rajeev Kumar</h3>
                  <p className="text-secondary font-medium mb-3">Production Manager</p>
                  <p className="text-muted-foreground text-sm">
                    Rajeev manages our production process with precision, ensuring quality and timely delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-md animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="mb-4 text-yellow-500 flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "Shan Printers exceeded our expectations with the quality of our wedding invitations. The attention to detail was impressive, and the team was a pleasure to work with!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">AJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Amali Jayawardena</h4>
                  <p className="text-sm text-muted-foreground">Matara, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="mb-4 text-yellow-500 flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "As a business owner, I rely on Shan Printers for all my marketing materials. Their quality is consistent, and they always deliver on time. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">RD</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rohan De Silva</h4>
                  <p className="text-sm text-muted-foreground">Local Business Owner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="mb-4 text-yellow-500 flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "The team at Shan Printers designed and printed our company banners for a trade show. The quality was outstanding and helped us stand out from the competition."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">MP</span>
                </div>
                <div>
                  <h4 className="font-semibold">Manisha Peiris</h4>
                  <p className="text-sm text-muted-foreground">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-md"
              onClick={() => window.open("https://wa.me/94777987829", "_blank")}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>Contact Us Today</span>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shan Printers</h3>
              <p className="text-sm opacity-80">
                Your one-stop solution for all printing needs in Matara.
                High quality printing services for businesses and individuals.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About</a></li>
                <li><a href="/#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Services</a></li>
                <li><a href="/#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
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

export default About;
