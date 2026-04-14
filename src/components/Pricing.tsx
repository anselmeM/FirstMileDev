"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, Layout, FileText, Users, Database, CreditCard, Smartphone, Code2, Server, Shield, ShieldCheck, Lock, RotateCcw, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      id: "validation",
      phase: "Phase 1",
      title: "Market Proof",
      price: "$2,000",
      tag: "Validation",
      highlight: "Fast Turnaround (2 Weeks)",
      description: "Don't build until you know they'll buy. We validate your concept with real data before writing code.",
      features: [
        { icon: <BarChart3 size={16} />, text: "Ad Funnel Testing" },
        { icon: <Layout size={16} />, text: "Landing Page Creation" },
        { icon: <FileText size={16} />, text: "Viability Report" },
      ],
      cta: "Start Validation",
      popular: false,
    },
    {
      id: "mvp",
      phase: "Phase 2",
      title: "Launchpad MVP",
      price: "$5,000",
      tag: "Most Popular",
      highlight: "4-6 Week Turnaround",
      description: "Get your first 100 users. We build a functional, beautiful product using high-performance Low-Code tools to save time.",
      features: [
        { icon: <Users size={16} />, text: "User Authentication" },
        { icon: <Database size={16} />, text: "Real Database Integration" },
        { icon: <CreditCard size={16} />, text: "Stripe Payments" },
        { icon: <Smartphone size={16} />, text: "Mobile Responsive" },
      ],
      cta: "Build My MVP",
      popular: true,
    },
    {
      id: "scale",
      phase: "Phase 3",
      title: "Custom Scale",
      price: "Custom",
      tag: "Scaling",
      highlight: "Long-term Partnership",
      description: "Ready to handle thousands of users? We migrate your MVP to a scalable custom architecture (PERN Stack).",
      features: [
        { icon: <Code2 size={16} />, text: "React/Node.js Custom Code" },
        { icon: <Server size={16} />, text: "AWS/Cloud Architecture" },
        { icon: <Shield size={16} />, text: "Advanced Security" },
      ],
      cta: "Let's Scale",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="px-6 md:px-8 lg:px-16 py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {plans.map((plan) => (
            <Link key={plan.id} href={`#${plan.id}`} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-accent-red transition-colors border border-gray-100 px-4 py-2 rounded-full">
              {plan.phase}: {plan.tag}
            </Link>
          ))}
          <Link href="/calculator" className="text-xs font-bold uppercase tracking-widest text-accent-red border border-accent-red/20 px-4 py-2 rounded-full hover:bg-accent-red hover:text-white transition-all">
            Cost Calculator
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl uppercase font-headline text-gray-900 mb-4">The Roadmap</h2>
        <p className="text-lg text-gray-400 uppercase font-bold tracking-widest mb-8">De-risking your development journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            id={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: plan.popular ? -24 : 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col p-8 rounded-xl border transition-all duration-300 relative group ${
              plan.popular 
                ? "border-gray-900 bg-white shadow-2xl z-10" 
                : "border-gray-200 bg-white hover:shadow-xl hover:border-accent-red"
            }`}
          >
            <div className={`${plan.popular ? "bg-black text-white" : "bg-gray-100 text-gray-500"} text-[10px] font-black tracking-widest px-3 py-1 absolute top-0 right-0 rounded-bl-lg uppercase`}>
              {plan.tag}
            </div>

            <h3 className={`font-bold text-sm uppercase mb-2 tracking-widest ${plan.popular ? "text-accent-red" : "text-gray-400 group-hover:text-accent-red transition-colors"}`}>
              {plan.phase}
            </h3>
            <h3 className="font-headline text-2xl uppercase mb-4 text-gray-900">{plan.title}</h3>

            <div className="mb-6 pb-6 border-b border-gray-100">
              <p className="text-4xl font-black font-headline tracking-tight text-gray-900">{plan.price}</p>
              <p className={`text-xs mt-3 uppercase tracking-wide font-bold px-2 py-1 rounded border inline-block ${
                plan.id === "validation" ? "text-green-700 bg-green-50 border-green-100" : "text-gray-500 bg-gray-50 border-gray-100"
              }`}>
                {plan.highlight}
              </p>
            </div>

            <p className="text-gray-500 mb-8 text-sm leading-relaxed">{plan.description}</p>

            <div className="space-y-4 text-gray-700 text-sm font-medium flex-grow mb-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-accent-red mr-3">{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
            </div>

            <Link href="/#contact" className={`btn btn-full ${plan.popular ? "btn-primary" : "btn-outline"}`}>
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          {[
            { icon: <ShieldCheck size={20} className="text-green-600" />, text: "SSL Secure" },
            { icon: <Lock size={20} className="text-green-600" />, text: "Encrypted Payments" },
            { icon: <CreditCard size={20} className="text-green-600" />, text: "No Credit Card Required" },
            { icon: <RotateCcw size={20} className="text-green-600" />, text: "100% Ownership" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              {badge.icon}
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA to Calculator */}
      <div className="text-center border-t border-gray-100 mt-12 pt-8">
        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-4">Unsure about the cost?</p>
        <Link href="/calculator" className="inline-flex items-center font-bold uppercase text-base tracking-widest text-accent-red hover:text-black transition group">
          Try our App Cost Calculator <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
