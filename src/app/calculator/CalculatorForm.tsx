"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { submitLead } from "@/lib/leads";
import { 
  Globe, 
  Smartphone, 
  Layers, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  FileText, 
  Mail, 
  Zap, 
  Lock,
  ChevronRight
} from "lucide-react";

const CalculatorForm = () => {
  const [appType, setAppType] = useState("");
  const [complexity, setComplexity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const toggleFeature = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature) 
        : [...prev, feature]
    );
  };

  const calculateCost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appType || !complexity || !timeline || !email) return;

    setIsSubmitting(true);

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
    
    // Submit lead to API
    await submitLead({
      email,
      source: "calculator",
      metadata: {
        appType,
        complexity,
        timeline,
        features,
        estimatedCost: total
      }
    });

    setEstimatedCost(total);
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (estimatedCost !== null && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [estimatedCost]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Sidebar / Progress */}
          <div className="lg:col-span-4 bg-carbon-900 p-8 lg:p-12 text-white">
            <h3 className="font-headline text-2xl uppercase mb-8 leading-tight">Your Project <br /><span className="text-accent-red">Parameters</span></h3>
            
            <div className="space-y-8">
              {[
                { label: "Platform", value: appType, active: !!appType },
                { label: "Complexity", value: complexity, active: !!complexity },
                { label: "Timeline", value: timeline, active: !!timeline },
                { label: "Features", value: features.length > 0 ? `${features.length} Selected` : "", active: features.length > 0 }
              ].map((step, i) => (
                <div key={i} className={`flex items-start gap-4 transition-opacity duration-500 ${step.active ? "opacity-100" : "opacity-30"}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 ${step.active ? "bg-accent-red border-accent-red text-white" : "border-white/20 text-white"}`}>
                    {step.active ? <CheckCircle2 size={12} /> : i + 1}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{step.label}</p>
                    <p className="text-sm font-bold uppercase tracking-wide truncate max-w-[150px]">{step.value || "Pending..."}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/40 mb-4">
                <Lock size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure & Confidential</span>
              </div>
              <p className="text-xs text-white/30 leading-relaxed">
                Your project data is encrypted and only shared with our principal architect.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8 p-8 lg:p-16">
            <form onSubmit={calculateCost} className="space-y-12">
              
              {/* Step 1: Platform */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-accent-red mb-6">
                  <span className="w-8 h-px bg-accent-red/20"></span>
                  01. Select Platform
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: "web", label: "Web App", icon: <Globe className="w-6 h-6" /> },
                    { id: "mobile", label: "Mobile App", icon: <Smartphone className="w-6 h-6" /> },
                    { id: "both", label: "Multi-Platform", icon: <Layers className="w-6 h-6" /> }
                  ].map((type) => (
                    <label key={type.id} className="relative cursor-pointer group">
                      <input
                        required
                        type="radio"
                        name="appType"
                        value={type.id}
                        checked={appType === type.id}
                        onChange={(e) => setAppType(e.target.value)}
                        className="sr-only peer"
                      />
                      <div className="p-6 border-2 border-gray-100 rounded-2xl peer-checked:border-accent-red peer-checked:bg-red-50/50 transition-all duration-300 group-hover:border-gray-200 group-hover:shadow-lg text-center flex flex-col items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${appType === type.id ? "bg-accent-red text-white" : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"}`}>
                          {type.icon}
                        </div>
                        <span className="font-bold uppercase tracking-widest text-[11px] text-gray-900">{type.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2: Complexity */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-accent-red mb-6">
                  <span className="w-8 h-px bg-accent-red/20"></span>
                  02. Define Complexity
                </label>
                <div className="space-y-3">
                  {[
                    { id: "simple", label: "Validated Prototype", desc: "Core logic, 5-8 screens, no deep integrations" },
                    { id: "medium", label: "Launchpad MVP", desc: "User roles, dashboards, multiple API integrations" },
                    { id: "complex", label: "Enterprise Build", desc: "Complex algorithms, real-time data, high security" }
                  ].map((level) => (
                    <label key={level.id} className={`flex items-center p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 group hover:shadow-md ${complexity === level.id ? "border-accent-red bg-red-50/50" : "border-gray-100 hover:border-gray-200"}`}>
                      <input
                        required
                        type="radio"
                        name="complexity"
                        value={level.id}
                        checked={complexity === level.id}
                        onChange={(e) => setComplexity(e.target.value)}
                        className="mr-5 w-5 h-5 text-accent-red focus:ring-accent-red border-gray-300"
                      />
                      <div>
                        <span className="font-bold text-gray-900 block uppercase tracking-wide text-sm">{level.label}</span>
                        <span className="text-xs text-gray-500 font-medium">{level.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Features */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-accent-red mb-6">
                  <span className="w-8 h-px bg-accent-red/20"></span>
                  03. Critical Features
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { id: "auth", label: "User Authentication" },
                    { id: "payments", label: "Stripe / Payments" },
                    { id: "dashboard", label: "Interactive Dashboard" },
                    { id: "api", label: "Custom API Integration" },
                    { id: "notifications", label: "Real-time Notifications" },
                    { id: "analytics", label: "Advanced Analytics" }
                  ].map((feature) => (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`flex items-center justify-between p-4 border-2 rounded-xl transition-all duration-300 text-left ${features.includes(feature.id) ? "border-accent-red bg-red-50/50 text-accent-red" : "border-gray-100 text-gray-500 hover:border-gray-200"}`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-widest">{feature.label}</span>
                      {features.includes(feature.id) ? <CheckCircle2 size={16} /> : <div className="w-4 h-4 rounded-full border-2 border-gray-200"></div>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Timeline */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-accent-red mb-6">
                  <span className="w-8 h-px bg-accent-red/20"></span>
                  04. Target Velocity
                </label>
                <div className="flex flex-col md:flex-row gap-4">
                  {[
                    { id: "4", label: "4-6 Weeks", tag: "Aggressive" },
                    { id: "8", label: "8-12 Weeks", tag: "Standard" },
                    { id: "12", label: "12+ Weeks", tag: "Balanced" }
                  ].map((time) => (
                    <label key={time.id} className="flex-1 cursor-pointer group">
                      <input
                        required
                        type="radio"
                        name="timeline"
                        value={time.id}
                        checked={timeline === time.id}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="sr-only peer"
                      />
                      <div className="p-5 border-2 border-gray-100 rounded-2xl text-center peer-checked:border-accent-red peer-checked:bg-red-50/50 transition-all duration-300 group-hover:border-gray-200 group-hover:shadow-md">
                        <span className="font-bold text-gray-900 block uppercase tracking-widest text-[11px] mb-1">{time.label}</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">{time.tag}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 5: Email */}
              <div className="pt-8 border-t border-gray-100">
                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <Mail className="text-accent-red w-5 h-5" />
                    <h4 className="font-headline uppercase text-lg text-gray-900 tracking-tight">Generate Technical Brief</h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-6 font-medium">We'll send your estimated budget and a custom validation roadmap directly to your inbox.</p>
                  
                  <div className="flex flex-col md:flex-row gap-3">
                    <input
                      required
                      type="email"
                      placeholder="Enter your professional email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 p-4 bg-white border border-gray-200 rounded-xl focus:border-accent-red focus:outline-none transition-all shadow-sm font-medium"
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn btn-primary px-8 group disabled:opacity-50"
                    >
                      {isSubmitting ? "Processing..." : "Get My Estimate"}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <AnimatePresence>
        {estimatedCost !== null && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-white rounded-[2.5rem] shadow-[0_48px_80px_-12px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-16 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 text-green-600 rounded-full mb-8">
                <Zap size={40} fill="currentColor" />
              </div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-accent-red mb-4">Estimated Development Budget</h2>
              <p className="text-6xl md:text-8xl font-black font-headline text-gray-900 tracking-tighter mb-6">
                ${estimatedCost.toLocaleString()}
              </p>
              <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Your technical brief and custom validation roadmap have been prioritized and sent to <span className="text-gray-900 font-bold">{email}</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/#contact" className="btn btn-primary btn-lg flex items-center justify-center gap-2 group">
                  Book Priority Roadmap Call <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={() => {
                    setEstimatedCost(null);
                    setAppType("");
                    setComplexity("");
                    setTimeline("");
                    setFeatures([]);
                    setEmail("");
                  }}
                  className="btn btn-outline btn-lg"
                >
                  Start New Calculation
                </button>
              </div>
            </div>
            
            {/* Summary Footer */}
            <div className="bg-gray-50 p-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Clock className="text-gray-400" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Est. Timeline</p>
                  <p className="font-bold text-gray-900">{timeline === "4" ? "4-6" : timeline === "8" ? "8-12" : "12+"} Weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="text-gray-400" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Architecture</p>
                  <p className="font-bold text-gray-900">{complexity === "simple" ? "Low-Code" : "Next.js Custom"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gray-400" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">IP Ownership</p>
                  <p className="font-bold text-gray-900">100% Guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalculatorForm;
