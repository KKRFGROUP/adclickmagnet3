"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CaseStudiesSlugHero from './sections/CaseStudiesSlugHero';
import "./slug.css";
import CaseStudiesSlugContent from './sections/CaseStudiesSlugContent';

interface CaseStudyApiResponse {
  status: string;
  message: string;
  data: {
    id: number;
    title: string;
    slug: string;
    category: string;
    client_name: string;
    image: string;
    challenge: string;
    solution: string;
    results: string;
    summary: string;
    live_url: string | null;
    featured_image: string | null;
    start_date: string;
    end_date: string;
    is_published: boolean;
    publish_date: string;
    created_at: string;
    updated_at: string;
    meta_title: string | null;
    meta_description: string | null;
  };
}

interface SubContent {
  subhead: string;
  subpara: string[];
}

interface SlugCaseStudiesContent {
  heroHeading: string;
  name: string;
  time: string;
  category: string;
  image: string;
  content: {
    para: string[];
    subcontent: SubContent[];
  };
}

function CaseStudies() {
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [caseStudyData, setCaseStudyData] = useState<CaseStudyApiResponse['data'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const slug = params?.slug as string | undefined;

  useEffect(() => {
    if (slug) {
      const fetchCaseStudy = async () => {
        try {
          const response = await fetch(`https://api.adclickmagnet.us/api/case-study/${slug}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: CaseStudyApiResponse = await response.json();
          setCaseStudyData(data.data);
          setLoading(false);
        } catch (e: any) {
          setError(e.message);
          setLoading(false);
        }
      };

      fetchCaseStudy();
    }
  }, [slug]);

  const toggleMenu = (arg?: boolean) => {
    setIsOpen(arg ?? !isOpen);

    if (pageMainRef.current) {
      if (!isOpen) {
        pageMainRef.current.classList.add("display-none-mobile-navbar");
      } else {
        pageMainRef.current.classList.remove("display-none-mobile-navbar");
      }
    }
  };

  if (loading) {
    return <div>Loading case study...</div>;
  }

  if (error) {
    return <div>Error loading case study: {error}</div>;
  }

  if (!caseStudyData) {
    return <div>Could not find case study.</div>;
  }

  const heroContent = {
    head: caseStudyData.title,
    name: caseStudyData.client_name,
    time: caseStudyData.publish_date,
    img: caseStudyData.featured_image || caseStudyData.image || "/images/default-case-study.jpg",
  };

  const slugcasestudiescontent: SlugCaseStudiesContent = {
    heroHeading: caseStudyData.title,
    name: caseStudyData.client_name,
    time: caseStudyData.publish_date,
    category: caseStudyData.category,
    image: caseStudyData.featured_image || caseStudyData.image || "/images/default-case-study.jpg",
    content: {
      para: [caseStudyData.challenge, caseStudyData.solution, caseStudyData.results, caseStudyData.summary].filter(Boolean),
      subcontent: [
        { subhead: "Challenge", subpara: [caseStudyData.challenge] },
        { subhead: "Solution", subpara: [caseStudyData.solution] },
        { subhead: "Results", subpara: [caseStudyData.results] },
        { subhead: "Summary", subpara: [caseStudyData.summary] },
        caseStudyData.live_url ? { subhead: "Live URL", subpara: [caseStudyData.live_url] } : null,
        caseStudyData.start_date ? { subhead: "Start Date", subpara: [new Date(caseStudyData.start_date).toLocaleDateString()] } : null,
        caseStudyData.end_date ? { subhead: "End Date", subpara: [new Date(caseStudyData.end_date).toLocaleDateString()] } : null,
      ].filter((item): item is SubContent => item !== null), // Filter out null values and assert the type
    },
  };

  return (
    <>
      <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
      <div ref={pageMainRef} className="page-main">
        <CaseStudiesSlugHero content={heroContent} />
        <CaseStudiesSlugContent content={slugcasestudiescontent} />
        <Footer />
      </div>
    </>
  );
}

export default CaseStudies;