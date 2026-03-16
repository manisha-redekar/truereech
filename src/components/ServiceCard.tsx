import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon, title, description, link = "/services" }: ServiceCardProps) => (
  <div className="gradient-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow text-center">
    <img src={icon} alt={title} className="w-20 h-20 mx-auto mb-4 object-contain" />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <Button variant="outline" size="sm" asChild>
      <Link to={link}>Learn More</Link>
    </Button>
  </div>
);

export default ServiceCard;
