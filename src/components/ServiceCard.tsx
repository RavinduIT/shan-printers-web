
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export function ServiceCard({ id, title, description, icon, image }: ServiceCardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/service/${id}`);
  };
  
  return (
    <Card 
      className="hover-scale border-2 border-border hover:border-primary/20 transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <CardHeader className="space-y-1">
        <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
