export interface Place {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  hours: string;
  fee: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  bestTime: string;
  weather: string;
  temperature: string;
  transport: string[];
  languages: string[];
  emergency: string;
  facilities: string[];
  accessibility: string;
  dresscode: string;
  photography: string;
  nearbyAttractions: string[];
  localTips: string;
}

export interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}