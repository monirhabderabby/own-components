"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    id: "bangladesh",
    label: "Bangladesh",
  },
  {
    id: "pakistant",
    label: "Pakistan",
  },
  {
    id: "turkey",
    label: "TK",
  },
  {
    id: "palestine",
    label: "Palestine",
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <main className="min-h-screen w-full flex justify-center mx-auto items-center  bg-gray-800">
      <div className="flex space-x-1">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
              }}
              className={cn(
                "text-white relative rounded-full px-3 py-1.5 text-sm font-medium outline-2 outline-sky-400 transition focus-visible:outline",
                activeTab === tab.id ? "" : "hover:text-white/50",
                activeTab === tab.id && "text-gray-900"
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  transition={{ duration: 0.6 }}
                  layoutId="active-pill"
                  className="absolute bg-white inset-0"
                  style={{
                    borderRadius: 9999,
                  }}
                />
              )}
              <span className=" z-10 relative">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </main>
  );
};

export default Tab;
