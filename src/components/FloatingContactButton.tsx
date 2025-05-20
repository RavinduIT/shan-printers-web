
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, X } from "lucide-react";

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  const openWhatsApp = () => {
    window.open(`https://wa.me/94777987829`, "_blank");
  };
  
  const openMail = () => {
    window.open(`mailto:shanprintersmatara@gmail.com`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact options */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-3">
          <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
            <Button
              onClick={openWhatsApp}
              variant="default"
              className="bg-green-500 hover:bg-green-600 rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              aria-label="WhatsApp"
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Button
              onClick={openMail}
              variant="default"
              className="bg-blue-500 hover:bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Main button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant={isOpen ? "outline" : "default"}
        className={`rounded-full h-14 w-14 shadow-lg hover:shadow-xl ${
          isOpen ? "bg-muted border-2" : "bg-secondary"
        } flex items-center justify-center transition-all duration-300 ${
          isOpen ? "rotate-0" : "rotate-0"
        }`}
        aria-label="Contact options"
      >
        {isOpen ? (
          <X className="h-6 w-6 animate-fade-in" />
        ) : (
          <MessageSquare className="h-6 w-6 animate-pulse-slow" />
        )}
      </Button>
    </div>
  );
}
