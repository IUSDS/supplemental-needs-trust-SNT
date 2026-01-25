import React from "react";
import ReactDOM from "react-dom/client";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "../seo/siteMeta";
import { SEO } from "../seo/SEO";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/Sectiontwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectonFour";
import SectionFive from "../components/SectionFive";
import CTASection from "../components/CTASecton";

// const homeJsonLd ={}

export default function Home() {
  const { pathname } = useLocation();
  return (
    <>
    <SEO 
        title="Supplemental Needs Trust Overview | Special Needs Estate Planning"
        description="Learn what a Supplemental Needs Trust is, how it aids government assistance, and why it is used to support individuals receiving SSI or Medicaid."
        canonical={`${SITE_URL}${pathname}`}
        // jsonLd={homeJsonLd}
        noIndex={false}
      /> 
    
    <div className="w-full">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <CTASection />
      <SectionFour />
      <SectionFive />
    </div>
    </>
  );
}