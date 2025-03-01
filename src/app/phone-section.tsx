"use client";

import { useState, useEffect } from "react";

export default function PhoneSection() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [to, setRecipient] = useState<string | null>(null);

  // Handle window resize and set initial width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch recipient from localStorage or URL query
  useEffect(() => {
    const localTo = localStorage.getItem("to");

    if (localTo) {
      setRecipient(localTo);
    } else {
      const query = new URLSearchParams(window.location.search);
      const searchObj = Object.fromEntries(query);

      if (searchObj.to) {
        setRecipient(searchObj.to);
        localStorage.setItem("to", searchObj.to);
      }
    }
  }, []);

  // Determine if we're on a mobile device
  const isMobile = windowWidth > 0 && windowWidth < 768;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Phone screen container with fixed aspect ratio */}
      <div className="relative w-full max-w-[430px] mx-auto aspect-[9/16] bg-white shadow-lg rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/BG-7.svg"
            alt="Wedding Invitation Background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: isMobile ? "center" : "center",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 w-full h-full p-4">
          {/* Header Section */}
          <div className="absolute top-[25%] left-1/3 transform -translate-x-1/5 text-center">
            <p className="text-2xl text-rose-900 moul-regular m-2">
              សិរិសួស្ដី​អាពាហ៍ពិពាហ៍
            </p>
            <p className="text-xl text-rose-900 moul-regular mt-5">
              សូម​គោរពអញ្ជើញ​
            </p>
          </div>

          {/* Recipient Section */}
          <div className="absolute top-[63.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg text-center ">
            <h2 className="text-2xl moul-regular text-rose-900 whitespace-nowrap break-words kantumruy-pro">
              <strong>{to ? ` ${to}` : ""}</strong>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
