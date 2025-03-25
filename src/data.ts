import { Place } from './types';
import { Utensils, BookTemplate, Mountain, Hotel, Camera, Tent, Bike } from "lucide-react";

export const categories = [
  { id: 'restaurants', label: 'Restaurants', icon: Utensils },
  { id: 'temples', label: 'Temples', icon: BookTemplate },
  { id: 'adventure', label: 'Adventure', icon: Mountain },
  { id: 'hotels', label: 'Hotels', icon: Hotel },
  { id: 'photography', label: 'Photography Spots', icon: Camera },
  { id: 'camping', label: 'Camping', icon: Tent },
  { id: 'cycling', label: 'Cycling Routes', icon: Bike },
];

export const places: Place[] = 
[
  {
    id: 1,
    name: "Boudhanath Stupa",
    category: "temples",
    description: "One of the largest spherical stupas in Nepal",
    rating: 4.8,
    reviews: 12453,
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    hours: "6 AM - 6 PM",
    fee: "NPR 400",
    location: "Kathmandu",
    coordinates: { lat: 27.7215, lng: 85.3620 },
    bestTime: "October-November",
    weather: "Sunny",
    temperature: "25°C",
    transport: ["Bus", "Taxi", "Walk"],
    languages: ["Nepali", "English", "Hindi"],
    emergency: "112",
    facilities: ["Restrooms", "Prayer Halls", "Guided Tours"],
    accessibility: "Wheelchair accessible",
    dresscode: "Modest clothing required",
    photography: "Allowed with permit",
    nearbyAttractions: ["Pashupatinath Temple", "Thamel"],
    localTips: "Visit during morning prayers for the best experience"
  },
  {
    id: 2,
    name: "Pashupatinath Temple",
    category: "temples",
    description: "Sacred Hindu temple complex along the Bagmati River",
    rating: 4.7,
    reviews: 9876,
    image: "https://images.unsplash.com/photo-1582466731577-8415dc0c4566",
    hours: "4 AM - 9 PM",
    fee: "NPR 1000",
    location: "Kathmandu",
    coordinates: { lat: 27.7109, lng: 85.3484 },
    bestTime: "February-March (Shivaratri)",
    weather: "Moderate",
    temperature: "22°C",
    transport: ["Bus", "Taxi"],
    languages: ["Nepali", "English", "Hindi", "Sanskrit"],
    emergency: "112",
    facilities: ["Temple Complex", "Meditation Areas", "Guides"],
    accessibility: "Limited wheelchair access",
    dresscode: "Traditional attire preferred",
    photography: "Restricted in certain areas",
    nearbyAttractions: ["Boudhanath Stupa", "Guhyeshwari Temple"],
    localTips: "Attend the evening aarti ceremony"
  },
  
    {
      id: 3,
      name: "Everest Base Camp Trek",
      category: "adventure",
      description: "Legendary hiking route to the base of the world's highest mountain",
      rating: 4.9,
      reviews: 15632,
      image: "https://images.unsplash.com/photo-1589871973318-9ca1258f783d",
      hours: "Seasonal Trekking (March-May, September-November)",
      fee: "NPR 50,000-100,000 (Guide & Permits)",
      location: "Solukhumbu District",
      coordinates: { lat: 27.9881, lng: 86.9250 },
      bestTime: "October-November",
      weather: "Cold & Challenging",
      temperature: "-10°C to 10°C",
      transport: ["Domestic Flight", "Trekking"],
      languages: ["Nepali", "English", "Sherpa"],
      emergency: "Mountain Rescue",
      facilities: ["Tea Houses", "Basic Lodges", "Oxygen Stations"],
      accessibility: "Challenging, High Altitude",
      dresscode: "Warm Trekking Gear",
      photography: "Unlimited scenic opportunities",
      nearbyAttractions: ["Namche Bazaar", "Tengboche Monastery"],
      localTips: "Acclimatize properly and hire an experienced guide",
      
    },
    {
      id: 4,
      name: "Chitwan National Park",
      category: "adventure",
      description: "UNESCO World Heritage site known for Bengal tigers and one-horned rhinos",
      rating: 4.6,
      reviews: 8754,
      image: "https://images.unsplash.com/photo-1547229187-3c12b5cbff5e",
      hours: "6 AM - 6 PM",
      fee: "NPR 2000 (Foreigners), NPR 150 (Locals)",
      location: "Chitwan",
      coordinates: { lat: 27.5, lng: 84.3333 },
      bestTime: "October-March",
      weather: "Warm & Humid",
      temperature: "25-30°C",
      transport: ["Jeep Safari", "Boat", "Walking Tour"],
      languages: ["Nepali", "English", "Tharu"],
      emergency: "Park Rangers",
      facilities: ["Safari Guides", "Visitor Center", "Accommodation"],
      accessibility: "Moderate Terrain",
      dresscode: "Earth-toned, comfortable clothing",
      photography: "Permitted with safari guide supervision",
      nearbyAttractions: ["Tharu Village", "Rapti River"],
      localTips: "Book early morning or late afternoon safaris for better wildlife viewing",
      
    },
    {
      id: 5,
      name: "Pokhara Lakeside",
      category: "hotels",
      description: "Scenic lakeside city with stunning Himalayan mountain views",
      rating: 4.7,
      reviews: 11234,
      image: "https://images.unsplash.com/photo-1548013146-72679e118b62",
      hours: "24/7 Tourist Area",
      fee: "Varies by Activity",
      location: "Pokhara",
      coordinates: { lat: 28.2096, lng: 83.9856 },
      bestTime: "September-November, March-May",
      weather: "Mild & Pleasant",
      temperature: "15-25°C",
      transport: ["Boat", "Walking", "Bicycle", "Taxi"],
      languages: ["Nepali", "English", "Hindi"],
      emergency: "Local Police: 100",
      facilities: ["Hotels", "Restaurants", "Paragliding Centers"],
      accessibility: "Easy Walking",
      dresscode: "Casual Tourist Wear",
      photography: "Excellent Landscape Opportunities",
      nearbyAttractions: ["Phewa Lake", "World Peace Pagoda"],
      localTips: "Try paragliding and enjoy lakeside sunset cafes",
      
    },
    {
      id: 6,
      name: "Swayambhunath Stupa (Monkey Temple)",
      category: "temples",
      description: "Ancient religious complex with panoramic views of Kathmandu Valley",
      rating: 4.6,
      reviews: 7892,
      image: "https://images.unsplash.com/photo-1577717976054-8665dd0d6fc2",
      hours: "5 AM - 6 PM",
      fee: "NPR 200 (Foreigners)",
      location: "Kathmandu",
      coordinates: { lat: 27.7142, lng: 85.2900 },
      bestTime: "October-November",
      weather: "Mild",
      temperature: "20-25°C",
      transport: ["Taxi", "Bus"],
      languages: ["Nepali", "English", "Buddhist Terminology"],
      emergency: "112",
      facilities: ["Restrooms", "Souvenir Shops", "Observation Points"],
      accessibility: "Steep Steps, Limited Wheelchair Access",
      dresscode: "Respectful Clothing",
      photography: "Permitted Everywhere",
      nearbyAttractions: ["Kathmandu Durbar Square", "Thamel"],
      localTips: "Watch out for playful monkeys and bring some snacks",
      
    },
    {
      id: 7,
      name: "Annapurna Circuit Trek",
      category: "adventure",
      description: "Classic Himalayan trek through diverse landscapes and traditional villages",
      rating: 4.8,
      reviews: 9876,
      image: "https://images.unsplash.com/photo-1521652266027-83461e30e6a0",
      hours: "Seasonal Trekking (September-November, March-May)",
      fee: "NPR 40,000-80,000 (Guide & Permits)",
      location: "Annapurna Region",
      coordinates: { lat: 28.5961, lng: 84.3053 },
      bestTime: "October-November",
      weather: "Variable Mountain Climate",
      temperature: "-5°C to 20°C",
      transport: ["Trekking", "Local Jeeps"],
      languages: ["Nepali", "English", "Local Dialects"],
      emergency: "Mountain Rescue Services",
      facilities: ["Tea Houses", "Basic Mountain Lodges"],
      accessibility: "Challenging High-Altitude Trek",
      dresscode: "Layered Trekking Gear",
      photography: "Spectacular Mountain Landscapes",
      nearbyAttractions: ["Thorong La Pass", "Muktinath Temple"],
      localTips: "Prepare for altitude changes and carry proper gear",
    
    },
    {
      id: 8,
      name: "Kathmandu Durbar Square",
      category: "temples",
      description: "Historic royal palace square with intricate Newari architecture",
      rating: 4.5,
      reviews: 6543,
      image: "https://images.unsplash.com/photo-1597210692524-7de770ec9d40",
      hours: "9 AM - 5 PM",
      fee: "NPR 1500 (Foreigners)",
      location: "Kathmandu",
      coordinates: { lat: 27.7041, lng: 85.3040 },
      bestTime: "October-November",
      weather: "Mild",
      temperature: "20-25°C",
      transport: ["Walking", "Taxi"],
      languages: ["Nepali", "English"],
      emergency: "112",
      facilities: ["Museum", "Guided Tours", "Souvenir Shops"],
      accessibility: "Uneven Surfaces",
      dresscode: "Respectful Tourist Attire",
      photography: "Permitted with Ticket",
      nearbyAttractions: ["Thamel", "Swayambhunath Stupa"],
      localTips: "Visit early morning for fewer crowds and better photos",
     
    },
    {
      id: 9,
      name: "Garden of Dreams",
      category: "photography",
      description: "Neoclassical garden offering tranquil urban retreat in Kathmandu",
      rating: 4.4,
      reviews: 5678,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
      hours: "9 AM - 6 PM",
      fee: "NPR 400 (Foreigners)",
      location: "Kathmandu",
      coordinates: { lat: 27.7145, lng: 85.3166 },
      bestTime: "Spring & Autumn",
      weather: "Pleasant",
      temperature: "20-25°C",
      transport: ["Walking", "Taxi"],
      languages: ["Nepali", "English"],
      emergency: "112",
      facilities: ["Cafe", "Reading Areas", "Photography Spots"],
      accessibility: "Well-maintained Paths",
      dresscode: "Casual",
      photography: "Excellent Photo Opportunities",
      nearbyAttractions: ["Thamel", "Kaiser Mahal"],
      localTips: "Perfect for romantic photoshoots and peaceful reading",
      
    },
    {
      id: 10,
      name: "Phewa Lake",
      category: "photography",
      description: "Stunning freshwater lake in Pokhara with Annapurna mountain reflections",
      rating: 4.7,
      reviews: 8765,
      image: "https://images.unsplash.com/photo-1669120719284-8082c0fa9864",
      hours: "24/7 Access",
      fee: "Boat Rental NPR 500-1000",
      location: "Pokhara",
      coordinates: { lat: 28.2096, lng: 83.9856 },
      bestTime: "October-November",
      weather: "Mild",
      temperature: "15-25°C",
      transport: ["Boat", "Walking", "Bicycle"],
      languages: ["Nepali", "English"],
      emergency: "Local Boat Rescue",
      facilities: ["Boat Rentals", "Lakeside Cafes", "Photography Spots"],
      accessibility: "Easy Access",
      dresscode: "Casual",
      photography: "Spectacular Landscape Views",
      nearbyAttractions: ["World Peace Pagoda", "Lakeside Restaurants"],
      localTips: "Sunrise and sunset are the best times for photography",
     
    },
  ];
