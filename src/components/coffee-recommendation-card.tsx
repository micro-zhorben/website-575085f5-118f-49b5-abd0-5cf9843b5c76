import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Coffee, Star, ShoppingCart } from "lucide-react";

interface CoffeeRecommendation {
  id: string;
  name: string;
  description: string;
  roastLevel: string;
  origin: string;
  price: number;
  rating: number;
  imageUrl: string;
}

interface CoffeeRecommendationCardProps {
  recommendation: CoffeeRecommendation;
  onBuyNow: (id: string) => void;
}

export function CoffeeRecommendationCard({
  recommendation,
  onBuyNow,
}: CoffeeRecommendationCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={recommendation.imageUrl}
          alt={recommendation.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <Typography.H3>{recommendation.name}</Typography.H3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <Typography.Small>{recommendation.rating.toFixed(1)}</Typography.Small>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Coffee className="h-4 w-4" />
          <Typography.Small>
            {recommendation.roastLevel} Roast • {recommendation.origin}
          </Typography.Small>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Typography.P className="line-clamp-2">
          {recommendation.description}
        </Typography.P>
        <div className="flex items-center justify-between">
          <Typography.Large className="font-bold">
            ${recommendation.price.toFixed(2)}
          </Typography.Large>
          <Button
            onClick={() => onBuyNow(recommendation.id)}
            className="gap-2"
          >
            <ShoppingCart />
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}