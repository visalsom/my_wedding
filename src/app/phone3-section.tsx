"use client";
import Image from "next/image";

export default function Phone3Section() {
  
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full max-w-[430px] mx-auto aspect-[9/16] bg-white shadow-lg rounded-3xl overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-20">
          <img
            src="/BG-4.svg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <h2 className="text-2xl text-rose-900 font-bold kantumruy-pro mb-8">
            <strong>វិចិត្រសាល</strong>
          </h2>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Image
            src="/3_in_1.png" 
            alt="Wedding Photo"
            width={400} 
            height={1200} 
            className="w-auto h-auto max-w-full max-h-full object-contain mt-2 ml-2"
            priority 
          />
        </div>
      </div>
    </section>
  );
}