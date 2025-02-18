import { useState } from "react";
import { AICoffeeHeader } from "@/components/ai-coffee-header";
import { CoffeePreferenceForm } from "@/components/coffee-preference-form";
import { CoffeeRecommendationCard } from "@/components/coffee-recommendation-card";
import { Typography } from "@/components/ui/typography";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

interface CoffeePreferences {
  roastLevel: string;
  brewMethod: string;
  intensity: number;
  flavor: string;
}

const mockRecommendations = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    description:
      "A bright and complex coffee with floral notes, bergamot, and a delicate citrus finish. Perfect for those who enjoy light, nuanced flavors.",
    roastLevel: "Light",
    origin: "Ethiopia",
    price: 18.99,
    rating: 4.8,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Colombian Supremo",
    description:
      "Well-balanced with caramel sweetness, nutty undertones, and a smooth chocolate finish. A classic choice for traditional coffee lovers.",
    roastLevel: "Medium",
    origin: "Colombia",
    price: 16.99,
    rating: 4.6,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Sumatra Mandheling",
    description:
      "Full-bodied with rich earthy tones, hints of dark chocolate, and a spicy finish. Ideal for those who prefer bold, intense flavors.",
    roastLevel: "Dark",
    origin: "Indonesia",
    price: 19.99,
    rating: 4.7,
    imageUrl: "/placeholder.svg",
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handlePreferenceSubmit = async (preferences: CoffeePreferences) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setShowRecommendations(true);
    setIsLoading(false);

    toast({
      title: "Preferences Saved",
      description: "We've found some perfect matches for you!",
    });
  };

  const handleBuyNow = (id: string) => {
    toast({
      title: "Added to Cart",
      description: "Your coffee selection has been added to the cart.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <AICoffeeHeader />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Typography.H1 className="mb-4">
            Find Your Perfect Coffee Match
          </Typography.H1>
          <Typography.Lead className="mb-8">
            Let our AI guide you to your ideal brew based on your unique
            preferences and taste profile
          </Typography.Lead>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-12"
        >
          <CoffeePreferenceForm
            onSubmit={handlePreferenceSubmit}
            isLoading={isLoading}
          />
        </motion.div>

        {showRecommendations && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Typography.H2 className="text-center">
              Your Personalized Recommendations
            </Typography.H2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockRecommendations.map((recommendation, index) => (
                <motion.div
                  key={recommendation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CoffeeRecommendationCard
                    recommendation={recommendation}
                    onBuyNow={handleBuyNow}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}