const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateChecklistPDF() {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 40, bottom: 40, left: 50, right: 50 }
  });

  const downloadsDir = path.join(__dirname, "public", "downloads");
  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
  }

  const outputPath = path.join(downloadsDir, "startup-validation-checklist.pdf");
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  // Colors
  const charcoal = "#111111";
  const red = "#FF3B3F";
  const textDark = "#222222";
  const textLight = "#666666";
  const greyLight = "#F9F9F9";

  // --- HEADER SECTION ---
  // Top branding bar
  doc.rect(0, 0, 595.28, 90).fill(charcoal);
  
  // Crimson line accent
  doc.rect(0, 90, 595.28, 4).fill(red);

  // Logo text
  doc.fillColor("#FFFFFF")
     .font("Helvetica-Bold")
     .fontSize(22)
     .text("FIRSTMILEDEV", 50, 32, { characterSpacing: 2 });
  
  doc.fillColor("#AAAAAA")
     .font("Helvetica")
     .fontSize(9)
     .text("MARKET-FIRST MVP DEVELOPMENT", 50, 58, { characterSpacing: 1.5 });

  // Document Title
  doc.y = 115;
  doc.fillColor(charcoal)
     .font("Helvetica-Bold")
     .fontSize(20)
     .text("STARTUP VALIDATION CHECKLIST", 50, doc.y, { align: "left" });

  doc.y += 6;
  doc.fillColor(textLight)
     .font("Helvetica-Oblique")
     .fontSize(11)
     .text("15 Essential Steps to Validate Market Demand Before Writing Code", 50, doc.y);

  // --- CHECKLIST CONTENT ---
  const sections = [
    {
      title: "PHASE 1: PROBLEM SPACE VERIFICATION",
      items: [
        { label: "Problem Definition", desc: "Write a clear, one-sentence description of the target user's core pain point." },
        { label: "User Interviews", desc: "Interview 15+ potential users about their workarounds, without pitching your solution." },
        { label: "Pain Ranking", desc: "Confirm that this specific problem ranks in the target customer's top 3 active priorities." },
        { label: "Workaround Audit", desc: "Document all existing workarounds, including spreadsheets, manual labor, or other tools." },
        { label: "User Persona Map", desc: "Create a detailed profile of the primary customer segment experiencing this pain point." }
      ]
    },
    {
      title: "PHASE 2: SOLUTION & V1 SCOPE DEFINITION",
      items: [
        { label: "Minimum Viable Experience", desc: "Identify the single core interaction that delivers the primary value to the user." },
        { label: "Feature Trimming", desc: "Strip out 80% of secondary features (nice-to-haves) from the V1 release scope." },
        { label: "Target Stack Choice", desc: "Select an optimized stack (No-Code vs. Custom Next.js) based on budget & timeline." },
        { label: "Success Metric", desc: "Define one clear quantitative metric (e.g. user retention, repeat usage) for success." },
        { label: "Velocity Deadline", desc: "Define a strict development timeline aiming for V1 launch within 4 to 8 weeks." }
      ]
    },
    {
      title: "PHASE 3: DEMAND & MARKET VALIDATION",
      items: [
        { label: "Value Proposition", desc: "State your solution's core offering in one simple, high-converting headline." },
        { label: "Landing Page Smoke Test", desc: "Build a single landing page explaining the product and capturing early intent." },
        { label: "Call-To-Action (CTA)", desc: "Include a strong intent-based signup form (e.g., pre-order or waitlist entry)." },
        { label: "Traffic Generation", desc: "Drive 200+ highly targeted prospective users to the page using organic or paid channels." },
        { label: "Demand Proof", desc: "Achieve the conversion benchmark (e.g., >10% signup rate or initial paid deposits)." }
      ]
    }
  ];

  doc.y = 170;
  
  sections.forEach((sec) => {
    // Section Header
    doc.rect(50, doc.y, 495.28, 20).fill(greyLight);
    
    // Tiny vertical red indicator line
    doc.rect(50, doc.y, 3, 20).fill(red);

    doc.fillColor(charcoal)
       .font("Helvetica-Bold")
       .fontSize(10)
       .text(sec.title, 60, doc.y + 5, { characterSpacing: 1 });

    doc.y += 28;

    sec.items.forEach((item) => {
      // Draw checkbox box
      doc.rect(50, doc.y - 1, 12, 12).lineWidth(1.5).strokeColor(red).stroke();

      // Item Title
      doc.fillColor(textDark)
         .font("Helvetica-Bold")
         .fontSize(10)
         .text(item.label + ":", 72, doc.y);

      // Item Description
      const descX = 72 + doc.widthOfString(item.label + ": ");
      doc.fillColor(textLight)
         .font("Helvetica")
         .fontSize(9.5)
         .text(item.desc, descX, doc.y, { width: 545.28 - descX });

      doc.y += doc.heightOfString(item.desc, { width: 545.28 - descX }) + 10;
    });

    doc.y += 10;
  });

  // --- FOOTER BLOCK ---
  // Background Box
  doc.rect(50, 755, 495.28, 45).fill(charcoal);
  doc.rect(50, 755, 3, 45).fill(red);

  // Call to action
  doc.fillColor("#FFFFFF")
     .font("Helvetica-Bold")
     .fontSize(9.5)
     .text("READY TO VALIDATE AND BUILD YOUR MVP?", 65, 765, { characterSpacing: 1 });
  
  doc.fillColor("#CCCCCC")
     .font("Helvetica")
     .fontSize(8.5)
     .text("Book a free discovery session with FirstMileDev to architect your launch.", 65, 780);

  // Website Link Button
  doc.rect(430, 762, 105, 30).fill(red);
  doc.fillColor("#FFFFFF")
     .font("Helvetica-Bold")
     .fontSize(8.5)
     .text("BOOK CALL NOW", 441, 773, { align: "center", width: 85 });

  doc.end();

  writeStream.on("finish", () => {
    console.log("PDF successfully generated at: " + outputPath);
  });
}

generateChecklistPDF();
