"use client";
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, MapPin, Clock, DollarSign, Star, AlertTriangle, Heart, Share2, Download, Info } from 'lucide-react';
import { categories, places } from './data';
import type { Place } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showEmergencyInfo, setShowEmergencyInfo] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleMapClick = (coordinates: { lat: number, lng: number }) => {
    window.open(`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`, '_blank');
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleShare = async (place: Place) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: place.name,
          text: `Check out ${place.name} in Nepal!`,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  const downloadInfo = (place: Place) => {
    const info = `
      ${place.name}
      ${place.description}
      Location: ${place.location}
      Hours: ${place.hours}
      Fee: ${place.fee}
      Best Time to Visit: ${place.bestTime}
      Emergency Contact: ${place.emergency}
      Local Tips: ${place.localTips}
    `;
    
    const blob = new Blob([info], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${place.name}-info.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredPlaces = places.filter(place => 
    (!selectedCategory || place.category === selectedCategory) &&
    (!searchQuery || 
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  ).sort((a, b) => b.reviews - a.reviews);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Emergency Info Modal */}
      <AnimatePresence>
        {showEmergencyInfo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
            >
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                Emergency Contacts
              </h3>
              <div className="space-y-3">
                <p className="flex items-center">Police: 100</p>
                <p className="flex items-center">Ambulance: 102</p>
                <p className="flex items-center">Tourist Police: 1144</p>
              </div>
              <button 
                onClick={() => setShowEmergencyInfo(false)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-neutral-800 mb-6"
          >
           Find Things to do in Nepal.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-neutral-600 mb-8 max-w-2xl mx-auto"
          >
            Explore the best places to visit, eat, and adventure in Nepal based on authentic reviews and local experiences.
          </motion.p>
          
          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search places in Nepal..."
              className="w-full px-6 py-4 rounded-lg bg-white text-neutral-800 shadow-sm border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          </div>

          {/* Emergency Button */}
          <button
            onClick={() => setShowEmergencyInfo(true)}
            className="mt-4 flex items-center mx-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Emergency Info
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 rounded-full whitespace-nowrap
                  ${selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-neutral-800 border border-neutral-200'
                  }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </motion.button>
            );
          })}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <AnimatePresence>
            {filteredPlaces.map((place) => {
              const CategoryIcon = categories.find(cat => cat.id === place.category)?.icon || Info;
              return (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="card relative"
                >
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(place.id)}
                    className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full shadow-lg"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        favorites.includes(place.id) ? 'fill-red-500 text-red-500' : 'text-neutral-400'
                      }`}
                    />
                  </button>

                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-auto object-contain rounded-t-lg"


                  />

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <CategoryIcon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium capitalize">{place.category}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-bold">{place.rating}</span>
                        <span className="text-sm text-neutral-500 ml-1">({place.reviews.toLocaleString()} reviews)</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{place.description}</p>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-neutral-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{place.hours}</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-600">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>{place.fee}</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{place.location}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <button
                        onClick={() => handleShare(place)}
                        className="btn-secondary flex items-center justify-center gap-2 text-sm py-2"
                      >
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                      <button
                        onClick={() => downloadInfo(place)}
                        className="btn-secondary flex items-center justify-center gap-2 text-sm py-2"
                      >
                        <Download className="w-4 h-4" />
                        Save Info
                      </button>
                    </div>

                    <button 
                      onClick={() => handleMapClick(place.coordinates)}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </button>

                    {/* Local Tips */}
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center text-sm text-blue-700 mb-2">
                        <Info className="w-4 h-4 mr-2" />
                        Local Tip
                      </div>
                      <p className="text-sm text-blue-600">{place.localTips}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About</h3>
              <p className="text-neutral-600 text-sm">
                Discover the best places in Nepal with our curated recommendations and authentic reviews.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-neutral-600 hover:text-primary">About Us</Link></li>
                <li><Link to="/contact" className="text-neutral-600 hover:text-primary">Contact</Link></li>
                <li><Link to="/privacy" className="text-neutral-600 hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => {
                  const Icon = category.icon;
                  return (
                    <li key={category.id}>
                      <button 
                        onClick={() => setSelectedCategory(category.id)}
                        className="text-neutral-600 hover:text-primary flex items-center gap-2"
                      >
                        <Icon className="w-4 h-4" />
                        {category.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-200 mt-8 pt-8 text-center text-neutral-600">
            <p>&copy; {new Date().getFullYear()} khojum Inc</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;