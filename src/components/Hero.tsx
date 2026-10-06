import React from 'react';
import { Play, Sparkles, CheckCircle2, User, ChevronDown, Camera, ArrowDown } from 'lucide-react';
import { ASSETS } from '../assets';
import { Logo } from './Logo';

interface HeroProps {
  onExploreFeatures: () => void;
  onSeeHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFeatures, onSeeHowItWorks }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background ambient circular glow */}
      <div className="absolute top-1/4 right-5 w-[600px] h-[600px] bg-[#E2EBE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 left-1/4 w-[400px] h-[400px] bg-[#EFECE1]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            <span className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#235339] mb-4">
              Smarter Secondhand
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-[58px] font-extrabold text-[#141C17] leading-[1.08] tracking-[-0.03em] mb-6 text-balance">
              Give Every Item <br />
              <span className="text-[#141C17]">a Second Life.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#556158] font-normal leading-relaxed mb-8 max-w-lg">
              Buy, sell, trade, or donate secondhand items with a smarter marketplace built for the circular economy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreFeatures}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold text-white bg-[#1D3D2C] hover:bg-[#28533C] active:scale-[0.98] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore Ways to Reuse</span>
                <ArrowDown className="w-4 h-4 opacity-80" />
              </button>

              <button
                onClick={onSeeHowItWorks}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[15px] font-semibold text-[#1E2922] bg-white/80 hover:bg-white border border-[#D5DDD7] transition-all shadow-2xs hover:shadow-xs cursor-pointer"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1D3D2C] text-white group-hover:scale-105 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                <span>See How It Works</span>
              </button>
            </div>
          </div>

          {/* Right Column: Circular Secondhand Journey Visual */}
          <div className="lg:col-span-7 relative w-full aspect-square max-w-[620px] mx-auto flex items-center justify-center select-none">
            {/* Circular Orbit Graphic Track */}
            <div className="absolute inset-4 rounded-full border border-dashed border-[#578E6B]/35 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-16 rounded-full border border-[#D5E1D9] pointer-events-none" />

            {/* Orbit Center Brand Badge */}
            <div className="absolute z-20 flex flex-col items-center justify-center text-center p-4">
              <Logo className="h-9 sm:h-11" showTagline={true} />
            </div>

            {/* Orbit Item 1: Camera (Top-Left) */}
            <div className="absolute top-[8%] left-[10%] sm:left-[14%] flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              {/* Pill Tag */}
              <div className="mb-2 flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full shadow-md border border-[#E3ECE6] text-[11px]">
                <Camera className="w-3 h-3 text-[#2D6043]" />
                <span className="text-[#65736B] font-medium">AI Condition Check</span>
                <span className="font-bold text-[#1D3D2C] ml-0.5 tabular-nums">92/100</span>
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white p-1.5 shadow-md border border-[#E5EBE7]">
                <img
                  src={ASSETS.camera}
                  alt="Compact camera"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Orbit Item 2: Headphones (Top-Right) */}
            <div className="absolute top-[4%] right-[16%] sm:right-[22%] flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              {/* Pill Tag */}
              <div className="mb-2 flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full shadow-md border border-[#E3ECE6] text-[11px]">
                <Sparkles className="w-3 h-3 text-[#2D6043]" />
                <span className="text-[#65736B] font-medium">Recommended</span>
                <span className="font-semibold text-[#1D3D2C]">For You</span>
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white p-1.5 shadow-md border border-[#E5EBE7]">
                <img
                  src={ASSETS.headphones}
                  alt="Over-ear headphones"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Orbit Item 3: Jacket (Right Center) */}
            <div className="absolute top-[28%] -right-2 sm:right-[4%] flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              {/* Pill Tag */}
              <div className="mb-2 flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full shadow-md border border-[#E3ECE6] text-[11px]">
                <CheckCircle2 className="w-3 h-3 text-[#2D6043]" />
                <span className="text-[#65736B] font-medium">Good Condition</span>
                <span className="font-semibold text-[#1D3D2C]">Verified</span>
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white p-1.5 shadow-md border border-[#E5EBE7]">
                <img
                  src={ASSETS.jacket}
                  alt="Sage green jacket"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Orbit Item 4: Chair (Bottom-Right) */}
            <div className="absolute bottom-[8%] right-[8%] sm:right-[14%] flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="w-24 h-24 sm:w-30 sm:h-30 rounded-2xl overflow-hidden bg-white p-1.5 shadow-md border border-[#E5EBE7]">
                <img
                  src={ASSETS.chair}
                  alt="Mid-century modern chair"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Pill Tag Below */}
              <div className="mt-2 flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full shadow-md border border-[#E3ECE6] text-[11px]">
                <User className="w-3 h-3 text-[#2D6043]" />
                <span className="text-[#65736B] font-medium">New Owner</span>
                <span className="font-semibold text-[#1D3D2C]">Next Stop</span>
              </div>
            </div>

            {/* Orbit Item 5: Laptop on Workspace (Bottom-Left) */}
            <div className="absolute bottom-[16%] left-[8%] sm:left-[14%] flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="w-28 h-20 sm:w-34 sm:h-24 rounded-2xl overflow-hidden bg-white p-1.5 shadow-md border border-[#E5EBE7]">
                <img
                  src={ASSETS.laptop}
                  alt="Laptop workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Orbit Item 6: Folded Knitwear / Books (Bottom Center) */}
            <div className="absolute bottom-[2%] left-[40%] flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-white p-1 shadow-md border border-[#E5EBE7]">
                <img
                  src={ASSETS.knitwear}
                  alt="Folded warm sweaters"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-center pt-8">
        <a
          href="#the-problem"
          className="group flex flex-col items-center gap-1.5 text-xs font-medium text-[#727F76] hover:text-[#1D3D2C] transition-colors"
          aria-label="Scroll down to the problem section"
        >
          <div className="w-6 h-9 rounded-full border-2 border-[#BAC7BF] group-hover:border-[#1D3D2C] flex items-start justify-center p-1 transition-colors">
            <span className="w-1.5 h-2 bg-[#1D3D2C] rounded-full animate-bounce" />
          </div>
          <span className="text-[11px] tracking-wide flex items-center gap-0.5">
            Scroll down <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </span>
        </a>
      </div>
    </section>
  );
};
