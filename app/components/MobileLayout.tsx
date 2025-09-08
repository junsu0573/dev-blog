"use client";

import { useState, createContext, useContext } from "react";
import Sidebar from "./Sidebar";
import type { MobileLayoutContextType, MobileLayoutProviderProps } from "@/types";

const MobileLayoutContext = createContext<MobileLayoutContextType | undefined>(
  undefined
);

export const useMobileLayout = () => {
  const context = useContext(MobileLayoutContext);
  if (context === undefined) {
    throw new Error(
      "useMobileLayout must be used within a MobileLayoutProvider"
    );
  }
  return context;
};


export function MobileLayoutProvider({ children }: MobileLayoutProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MobileLayoutContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <div className="flex flex-1">
        {/* Mobile Sidebar */}
        <div className="lg:hidden">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {children}
          </div>
        </main>
      </div>
    </MobileLayoutContext.Provider>
  );
}
