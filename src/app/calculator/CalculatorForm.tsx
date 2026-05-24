"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { submitLead } from "@/lib/leads";
import { 
  Smartphone, 
  Layers, 
  CheckCircle2, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  FileText, 
  Mail, 
  Zap, 
  Lock,
  ChevronRight
} from "lucide-react";

// Types for wizard parameters
type AppType = "single" | "dual" | "";
type Complexity = "low" | "medium" | "high" | "extreme" | "";
type Timeline = "4" | "8" | "12" | "";

// Animated Toggle Switch Component
const ToggleSwitch = ({ 
  checked, 
  onChange, 
  label 
}: { 
  checked: boolean; 
  onChange: () => void; 
  label: string;
}) => {
  return (
    <div className="flex items-center justify-between p-5 border-2 border-gray-100 rounded-2xl bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300">
      <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">{label}</span>
      <button
        type="button"
        onClick={onChange}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2 ${
          checked ? "bg-accent-red" : "bg-gray-200"
        }`}
        aria-checked={checked}
        role="switch"
        aria-label={`Toggle ${label}`}
      >
        <motion.div
          className="bg-white w-4 h-4 rounded-full shadow-md"
          animate={{ x: checked ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
    </div>
  );
};

const CalculatorForm = () => {
  const [step, setStep] = useState(0);
  const [appType, setAppType] = useState<AppType>("");
  const [complexity, setComplexity] = useState<Complexity>("");
  const [timeline, setTimeline] = useState<Timeline>("");
  const [features, setFeatures] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  
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
    setError(null);

    // Pricing Model calculation
    // Base platform cost
    let baseCost = appType === "single" ? 4000 : 7500;

    // Complexity multiplier
    let complexityMultiplier = 1.0;
    switch(complexity) {
      case "low": complexityMultiplier = 1.0; break;
      case "medium": complexityMultiplier = 1.4; break;
      case "high": complexityMultiplier = 2.0; break;
      case "extreme": complexityMultiplier = 3.0; break;
    }

    // Features cost calculation
    const essentialFeatures = ["auth_email", "auth_profile", "push_notif", "analytics"];
    const advancedFeatures = ["auth_social", "chat", "maps", "payments", "upload", "sync", "iap"];
    
    let featureCost = 0;
    features.forEach(f => {
      if (essentialFeatures.includes(f)) {
        featureCost += 600;
      } else if (advancedFeatures.includes(f)) {
        featureCost += 1200;
      }
    });

    // Timeline adjustment
    let timelineMultiplier = 1.0;
    switch(timeline) {
      case "4": timelineMultiplier = 1.3; break;
      case "8": timelineMultiplier = 1.0; break;
      case "12": timelineMultiplier = 0.9; break;
    }

    const total = Math.round((baseCost + featureCost) * complexityMultiplier * timelineMultiplier);
    
    try {
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
      setStep(7); // Advance to results step
    } catch (err: any) {
      setError(err?.message || "There was a problem submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setAppType("");
    setComplexity("");
    setTimeline("");
    setFeatures([]);
    setEmail("");
    setEstimatedCost(null);
    setError(null);
    setStep(0);
  };

  useEffect(() => {
    if (step === 7 && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  // Framer Motion Step Transition Settings
  const stepVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
        
        {/* STEP 0: INTRO PANEL (Full Width) */}
        {step === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 md:p-16"
          >
            <h3 className="font-headline text-3xl uppercase mb-6 text-gray-900">Intro</h3>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
              This quick, one-question-at-a-time flow will give you a ballpark budget & timeline for a React Native/Expo app.
              <br className="hidden md:block" />
              It&apos;s not a quote—just a starting point so we can recommend the right discovery plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn btn-primary px-8"
              >
                Next
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn btn-outline px-8"
              >
                View In Calculator
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 7: RESULTS (Full Width) */}
        {step === 7 && estimatedCost !== null && (
          <motion.div 
            ref={resultsRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="p-8 md:p-16">
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
                  onClick={resetForm}
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
                  <p className="font-bold text-gray-900">{complexity === "low" ? "Prototype" : "Custom Build"}</p>
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

        {/* STEPS 1-6: WIZARD WITH PROGRESS SIDEBAR */}
        {step > 0 && step < 7 && (
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* PROGRESS SIDEBAR */}
            <div className="lg:col-span-4 bg-carbon-900 p-8 lg:p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-2xl uppercase mb-8 leading-tight">
                  Your Project <br />
                  <span className="text-accent-red">Parameters</span>
                </h3>
                
                <div className="space-y-8">
                  {[
                    { stepNum: 1, label: "Platform", value: appType === "single" ? "Single Platform" : appType === "dual" ? "Dual Platform" : "", active: step >= 1 },
                    { stepNum: 2, label: "Complexity", value: complexity ? complexity.toUpperCase() : "", active: step >= 2 },
                    { stepNum: 3, label: "Features", value: features.length > 0 ? `${features.length} Selected` : "", active: step >= 3 },
                    { stepNum: 5, label: "Timeline", value: timeline === "4" ? "4-6 Wks" : timeline === "8" ? "8-12 Wks" : timeline === "12" ? "12+ Wks" : "", active: step >= 5 }
                  ].map((s, i) => {
                    const isCompleted = step > s.stepNum || (s.stepNum === 3 && step > 4); // Handle merged features step
                    const isCurrent = step === s.stepNum || (s.stepNum === 3 && (step === 3 || step === 4));
                    
                    return (
                      <div 
                        key={i} 
                        className={`flex items-start gap-4 transition-opacity duration-500 ${isCurrent || isCompleted ? "opacity-100" : "opacity-30"}`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 transition-colors duration-300 ${
                          isCompleted 
                            ? "bg-accent-red border-accent-red text-white" 
                            : isCurrent
                              ? "border-accent-red text-accent-red"
                              : "border-white/20 text-white"
                        }`}>
                          {isCompleted ? <CheckCircle2 size={12} /> : i + 1}
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{s.label}</p>
                          <p className="text-sm font-bold uppercase tracking-wide truncate max-w-[150px]">
                            {s.value || "Pending..."}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 hidden lg:block">
                <div className="flex items-center gap-3 text-white/40 mb-4">
                  <Lock size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Secure & Confidential</span>
                </div>
                <p className="text-xs text-white/30 leading-relaxed">
                  Your project data is encrypted and only shared with our principal architect.
                </p>
              </div>
            </div>

            {/* FORM AREA */}
            <div className="lg:col-span-8 p-8 lg:p-16 flex flex-col justify-between min-h-[500px]">
              
              {/* BACK ARROW + HEADER */}
              <div className="flex items-center gap-4 mb-10">
                <button
                  type="button"
                  onClick={() => setStep(prev => prev - 1)}
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors shadow-sm bg-white"
                  aria-label="Go back"
                >
                  <ArrowLeft size={16} />
                </button>
                <h4 className="font-headline text-lg md:text-xl uppercase text-gray-900 leading-tight">
                  {step === 1 && "Which platforms do you want to launch on first?"}
                  {step === 2 && "How complex does the first version feel?"}
                  {step === 3 && "Pick your essential features"}
                  {step === 4 && "Any advanced features for V1?"}
                  {step === 5 && "What is your target timeline?"}
                  {step === 6 && "Generate Technical Brief"}
                </h4>
              </div>

              {/* STEP CONTENTS */}
              <div className="flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                    className="w-full"
                  >
                    
                    {/* STEP 1: PLATFORM SELECTION */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { id: "single", label: "Single platform", desc: "iOS or Android launch", icon: <Smartphone className="w-6 h-6" /> },
                            { id: "dual", label: "Dual platform", desc: "iOS + Android launch", icon: <Layers className="w-6 h-6" /> }
                          ].map((type) => (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => {
                                setAppType(type.id as AppType);
                                setStep(2);
                              }}
                              className={`p-6 border-2 rounded-2xl text-left flex flex-col gap-4 transition-all duration-300 group hover:border-gray-300 hover:shadow-md ${
                                appType === type.id 
                                  ? "border-accent-red bg-red-50/30" 
                                  : "border-gray-100"
                              }`}
                            >
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                                appType === type.id ? "bg-accent-red text-white" : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
                              }`}>
                                {type.icon}
                              </div>
                              <div>
                                <span className="font-headline uppercase text-sm text-gray-900 block leading-tight mb-1">{type.label}</span>
                                <span className="text-xs text-gray-500 font-medium">{type.desc}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                          You can always add more later—this is for an initial estimate.
                        </p>
                      </div>
                    )}

                    {/* STEP 2: COMPLEXITY SELECTION */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { id: "low", label: "Low", desc: "Standard screens, basic workflow, verified design templates" },
                            { id: "medium", label: "Medium", desc: "User roles, dynamic dashboards, API connections" },
                            { id: "high", label: "High", desc: "Custom features, heavy computations, deep integrations" },
                            { id: "extreme", label: "Extreme", desc: "Proprietary algorithms, high security compliance, offline sync" }
                          ].map((level) => (
                            <button
                              key={level.id}
                              type="button"
                              onClick={() => {
                                setComplexity(level.id as Complexity);
                                setStep(3);
                              }}
                              className={`p-6 border-2 rounded-2xl text-left flex flex-col justify-between transition-all duration-300 group hover:border-gray-300 hover:shadow-md ${
                                complexity === level.id 
                                  ? "border-accent-red bg-red-50/30" 
                                  : "border-gray-100"
                              }`}
                            >
                              <div>
                                <span className="font-headline uppercase text-sm text-gray-900 block leading-tight mb-2">{level.label}</span>
                                <span className="text-xs text-gray-500 font-medium">{level.desc}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                          You can always add more later—this is for an initial estimate.
                        </p>
                      </div>
                    )}

                    {/* STEP 3: ESSENTIAL FEATURES */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: "auth_email", label: "Email/password accounts" },
                            { id: "auth_profile", label: "Onboarding / profile" },
                            { id: "push_notif", label: "Push notifications" },
                            { id: "analytics", label: "Analytics" }
                          ].map((feat) => (
                            <ToggleSwitch
                              key={feat.id}
                              checked={features.includes(feat.id)}
                              onChange={() => toggleFeature(feat.id)}
                              label={feat.label}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between items-center pt-4">
                          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                            You can always add more later—this is for an initial estimate.
                          </p>
                          <button
                            type="button"
                            onClick={() => setStep(4)}
                            className="btn btn-primary px-8 flex items-center gap-2 group"
                          >
                            Next <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: ADVANCED FEATURES */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: "auth_social", label: "Apple/Google sign-in" },
                            { id: "chat", label: "Realtime chat / messaging" },
                            { id: "maps", label: "Maps / location" },
                            { id: "payments", label: "Payments / subscriptions" },
                            { id: "upload", label: "Photo/video upload" },
                            { id: "sync", label: "Offline sync" },
                            { id: "iap", label: "In-app purchases (IAP)" }
                          ].map((feat) => (
                            <ToggleSwitch
                              key={feat.id}
                              checked={features.includes(feat.id)}
                              onChange={() => toggleFeature(feat.id)}
                              label={feat.label}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between items-center pt-4">
                          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                            You can always add more later—this is for an initial estimate.
                          </p>
                          <button
                            type="button"
                            onClick={() => setStep(5)}
                            className="btn btn-primary px-8 flex items-center gap-2 group"
                          >
                            Next <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 5: TARGET VELOCITY */}
                    {step === 5 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { id: "4", label: "4-6 Weeks", tag: "Aggressive Build" },
                            { id: "8", label: "8-12 Weeks", tag: "Standard Build" },
                            { id: "12", label: "12+ Weeks", tag: "Balanced Build" }
                          ].map((time) => (
                            <button
                              key={time.id}
                              type="button"
                              onClick={() => {
                                setTimeline(time.id as Timeline);
                                setStep(6);
                              }}
                              className={`p-6 border-2 rounded-2xl text-center flex flex-col justify-center transition-all duration-300 group hover:border-gray-300 hover:shadow-md ${
                                timeline === time.id 
                                  ? "border-accent-red bg-red-50/30" 
                                  : "border-gray-100"
                              }`}
                            >
                              <span className="font-headline uppercase text-[11px] text-gray-900 block leading-tight mb-2">{time.label}</span>
                              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">{time.tag}</span>
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                          You can always add more later—this is for an initial estimate.
                        </p>
                      </div>
                    )}

                    {/* STEP 6: EMAIL FORM / LEAD CAPTURE */}
                    {step === 6 && (
                      <form onSubmit={calculateCost} className="space-y-6">
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                          <div className="flex items-center gap-3 mb-6">
                            <Mail className="text-accent-red w-5 h-5" />
                            <h4 className="font-headline uppercase text-lg text-gray-900 tracking-tight">Generate Technical Brief</h4>
                          </div>
                          <p className="text-sm text-gray-500 mb-6 font-medium">
                            We&apos;ll send your estimated budget and a custom validation roadmap directly to your inbox.
                          </p>
                          
                          <div className="flex flex-col md:flex-row gap-3">
                            <input
                              required
                              type="email"
                              placeholder="Enter your professional email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              disabled={isSubmitting}
                              className="flex-1 p-4 bg-white border border-gray-200 rounded-xl focus:border-accent-red focus:outline-none transition-all shadow-sm font-medium text-gray-900"
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
                          {error && (
                            <p className="text-xs text-red-500 mt-4 font-medium">{error}</p>
                          )}
                        </div>
                      </form>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CalculatorForm;
