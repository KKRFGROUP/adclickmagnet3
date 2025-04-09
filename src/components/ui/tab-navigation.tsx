"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const TabNavigation = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    "linear-gradient(to bottom right, #3b82f6, #14b8a6)", // blue-500 to teal-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeTab % linearGradients.length]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <div className="services-tabs-wrapper">
      <div className="services-tabs-container">
        <div className="services-tabs-inner">
          <div className="services-tabs-buttons-row">
            {content.map((item, index) => (
              <button
                key={`tab-${index}`}
                onClick={() => handleTabChange(index)}
                className={cn(
                  "services-tab-btn",
                  activeTab === index && "services-tab-btn-active"
                )}
                aria-selected={activeTab === index}
                role="tab"
                tabIndex={activeTab === index ? 0 : -1}
              >
                <h3 className="services-tab-title">{item.title}</h3>
                <div className="services-tab-dot" />
              </button>
            ))}
          </div>

          <div className="services-tab-content-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="services-tab-content"
              >
                <div className="services-tab-description">
                  <p>{content[activeTab].description}</p>
                </div>

                <motion.div
                  style={{ background: backgroundGradient }}
                  className={cn(
                    "services-tab-media",
                    contentClassName
                  )}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {content[activeTab].content}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};