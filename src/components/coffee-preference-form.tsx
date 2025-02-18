import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface CoffeePreferences {
  roastLevel: string;
  brewMethod: string;
  intensity: number;
  flavor: string;
}

interface CoffeePreferenceFormProps {
  onSubmit: (preferences: CoffeePreferences) => void;
  isLoading?: boolean;
}

export function CoffeePreferenceForm({
  onSubmit,
  isLoading = false,
}: CoffeePreferenceFormProps) {
  const [preferences, setPreferences] = useState<CoffeePreferences>({
    roastLevel: "",
    brewMethod: "",
    intensity: 50,
    flavor: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>
          <Typography.H2>Your Coffee Preferences</Typography.H2>
        </CardTitle>
        <Typography.P className="text-muted-foreground">
          Tell us what you like, and we'll find your perfect coffee match
        </Typography.P>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Typography.H4>Roast Level</Typography.H4>
            <Select
              value={preferences.roastLevel}
              onValueChange={(value) =>
                setPreferences({ ...preferences, roastLevel: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select roast level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light Roast</SelectItem>
                <SelectItem value="medium">Medium Roast</SelectItem>
                <SelectItem value="dark">Dark Roast</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Typography.H4>Brew Method</Typography.H4>
            <Select
              value={preferences.brewMethod}
              onValueChange={(value) =>
                setPreferences({ ...preferences, brewMethod: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select brew method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="espresso">Espresso</SelectItem>
                <SelectItem value="filter">Filter Coffee</SelectItem>
                <SelectItem value="frenchpress">French Press</SelectItem>
                <SelectItem value="pourover">Pour Over</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Typography.H4>Intensity Level</Typography.H4>
            <Slider
              value={[preferences.intensity]}
              onValueChange={(value) =>
                setPreferences({ ...preferences, intensity: value[0] })
              }
              max={100}
              step={1}
              className="py-4"
            />
            <Typography.Small className="text-muted-foreground">
              {preferences.intensity}% - {" "}
              {preferences.intensity < 33
                ? "Mild"
                : preferences.intensity < 66
                ? "Medium"
                : "Strong"}
            </Typography.Small>
          </div>

          <div className="space-y-2">
            <Typography.H4>Flavor Profile</Typography.H4>
            <Select
              value={preferences.flavor}
              onValueChange={(value) =>
                setPreferences({ ...preferences, flavor: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select flavor profile" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fruity">Fruity & Bright</SelectItem>
                <SelectItem value="nutty">Nutty & Chocolate</SelectItem>
                <SelectItem value="caramel">Caramel & Sweet</SelectItem>
                <SelectItem value="spicy">Spicy & Complex</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={
              isLoading ||
              !preferences.roastLevel ||
              !preferences.brewMethod ||
              !preferences.flavor
            }
          >
            {isLoading ? "Getting Recommendations..." : "Find My Perfect Coffee"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}