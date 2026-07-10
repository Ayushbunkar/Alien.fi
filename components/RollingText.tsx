"use client";
import React from "react";

interface RollingTextProps {
  text: string;
  className?: string;
}

export function RollingText({ text, className = "" }: RollingTextProps) {
  return (
    <span className={`relative overflow-hidden inline-flex flex-col ${className}`}>
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute top-full left-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full" aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
