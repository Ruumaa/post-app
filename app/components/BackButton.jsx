"use client";
import { ChevronLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="btn" onClick={() => router.back()}>
      <ChevronLeftCircle />
      Back
    </div>
  );
};

export default BackButton;
