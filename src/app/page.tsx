import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Lab from "@/components/Lab";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import BlogHighlights from "@/components/BlogHighlights";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import LeadMagnet from "@/components/LeadMagnet";
import { getAllBlogPosts } from "@/lib/mdx";

export default async function Home() {
  const allPosts = await getAllBlogPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <>
      <Hero />
      <Philosophy />
      <Lab />
      <CaseStudies />
      <Pricing />
      <BlogHighlights posts={latestPosts} />
      <LeadMagnet />
      <FAQ />
      <Contact />
    </>
  );
}
