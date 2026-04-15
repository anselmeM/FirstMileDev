/**
 * FirstMileDev Lead Capture Utility
 * Unified function to submit leads to the backend API
 */

export interface LeadData {
  email: string;
  source: "calculator" | "exit-intent" | "lead-magnet" | "lab-hook";
  metadata?: Record<string, any>;
}

export async function submitLead(data: LeadData) {
  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return { success: response.ok, ...result };
  } catch (error) {
    console.error("Lead submission error:", error);
    return { success: false, error: "Network error" };
  }
}
