"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CalculatorForm = () => {
  const [appType, setAppType] = useState("");
  const [complexity, setComplexity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const toggleFeature = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature) 
        : [...prev, feature]
    );
  };

  const calculateCost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appType || !complexity || !timeline) return;

    // Base costs
    let baseCost = 0;
    switch(appType) {
      case "web": baseCost = 3000; break;
      case "mobile": baseCost = 5000; break;
      case "both": baseCost = 7000; break;
    }

    // Complexity multiplier
    let complexityMultiplier = 1;
    switch(complexity) {
      case "simple": complexityMultiplier = 1; break;
      case "medium": complexityMultiplier = 1.5; break;
      case "complex": complexityMultiplier = 2.5; break;
    }

    // Features cost
    const featureCost = features.length * 500;

    // Timeline adjustment
    let timelineMultiplier = 1;
    switch(timeline) {
      case "4": timelineMultiplier = 1.3; break;
      case "8": timelineMultiplier = 1; break;
      case "12": timelineMultiplier = 0.9; break;
    }

    const total = Math.round((baseCost + featureCost) * complexityMultiplier * timelineMultiplier);
    setEstimatedCost(total);
  };

  useEffect(() => {
    if (estimatedCost !== null && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [estimatedCost]);

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={calculateCost} className="bg-white rounded-2xl shadow-lg p-8">
        {/* App Type */}
        <div className="mb-8">
          <label className="block text-lg font-bold mb-4">What type of app are you building?</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: "web", label: "Web App", icon: "🌐" },
              { id: "mobile", label: "Mobile App", icon: "📱" },
              { id: "both", label: "Both", icon: "🔄" }
            ].map((type) => (
              <label key={type.id} className="relative cursor-pointer">
                <input
                  required
                  type="radio"
                  name="appType"
                  value={type.id}
                  checked={appType === type.id}
                  onChange={(e) => setAppType(e.target.value)}
                  className="sr-only peer"
                />
                <div className="p-4 border-2 border-gray-200 rounded-lg peer-checked:border-accent-red peer-checked:bg-red-50 transition hover:border-gray-300 text-center">
                  <span className="text-2xl mb-2 block">{type.icon}</span>
                  <span className="font-bold">{type.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Complexity */}
        <div className="mb-8">
          <label className="block text-lg font-bold mb-4">How complex is your app?</label>
          <div className="space-y-3">
            {[
              { id: "simple", label: "Simple", desc: "Basic features, 5-10 screens, no complex integrations" },
              { id: "medium", label: "Medium", desc: "Moderate features, 10-20 screens, some integrations" },
              { id: "complex", label: "Complex", desc: "Advanced features, 20+ screens, multiple integrations" }
            ].map((level) => (
              <label key={level.id} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 has-[:checked]:border-accent-red has-[:checked]:bg-red-50 transition">
                <input
                  required
                  type="radio"
                  name="complexity"
                  value={level.id}
                  checked={complexity === level.id}
                  onChange={(e) => setComplexity(e.target.value)}
                  className="mr-4"
                />
                <div>
                  <span className="font-bold block">{level.label}</span>
                  <span className="text-sm text-gray-500">{level.desc}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <label className="block text-lg font-bold mb-4">Select features you need:</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: "auth", label: "User Authentication" },
              { id: "payments", label: "Payment Processing" },
              { id: "dashboard", label: "Admin Dashboard" },
              { id: "api", label: "API Integration" },
              { id: "notifications", label: "Push Notifications" },
              { id: "analytics", label: "Analytics & Reporting" }
            ].map((feature) => (
              <label key={feature.id} className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${features.includes(feature.id) ? "border-accent-red bg-red-50" : "border-gray-200 hover:bg-gray-50"}`}>
                <input
                  type="checkbox"
                  checked={features.includes(feature.id)}
                  onChange={() => toggleFeature(feature.id)}
                  className="mr-3 rounded text-accent-red"
                />
                <span className="text-sm">{feature.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <label className="block text-lg font-bold mb-4">What's your preferred timeline?</label>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { id: "4", label: "4-6 Weeks", tag: "Fast" },
              { id: "8", label: "8-12 Weeks", tag: "Standard" },
              { id: "12", label: "12+ Weeks", tag: "Flexible" }
            ].map((time) => (
              <label key={time.id} className="flex-1 cursor-pointer">
                <input
                  required
                  type="radio"
                  name="timeline"
                  value={time.id}
                  checked={timeline === time.id}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="sr-only peer"
                />
                <div className="p-4 border-2 border-gray-200 rounded-lg text-center peer-checked:border-accent-red peer-checked:bg-red-50 transition hover:border-gray-300">
                  <span className="font-bold block">{time.label}</span>
                  <span className="text-sm text-gray-500">{time.tag}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="mb-8">
          <label className="block text-lg font-bold mb-4">Where should we send your estimate?</label>
          <input
            required
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-accent-red focus:outline-none transition-all"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-full">
          Calculate My Cost
        </button>
      </form>

      {/* Results */}
      <AnimatePresence>
        {estimatedCost !== null && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-accent-red"
          >
            <h2 className="text-2xl font-headline mb-4 uppercase">Your Estimated Cost</h2>
            <p className="text-5xl font-black text-accent-red mb-4">
              ${estimatedCost.toLocaleString()}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This is an estimate based on your selections. To get a precise fixed-price quote and a custom roadmap, let's chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">Book Discovery Call</Link>
              <button 
                onClick={() => setEstimatedCost(null)}
                className="text-gray-400 text-sm font-bold uppercase tracking-widest hover:text-gray-600"
              >
                Reset Calculator
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalculatorForm;
