import React from 'react';

const BRANDS = [
  { name: 'Northline', code: 'NRTH-01' },
  { name: 'Arcform', code: 'ARCF-02' },
  { name: 'Velo Group', code: 'VELO-03' },
  { name: 'Juniper', code: 'JNPR-04' },
  { name: 'Meridian', code: 'MRDN-05' },
  { name: 'Starlight', code: 'STRL-06' },
  { name: 'Aura Labs', code: 'AURA-07' }
];

export const TrustMarquee: React.FC = () => {
  return (
    <section className="py-10 md:py-12 px-4 md:px-12 border-y border-[#E5E4DE] max-w-[1728px] mx-auto flex flex-col items-center bg-[#F3F2EB] relative z-0">
      <div className="flex items-center gap-2 mb-6">
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider text-center">
          Trusted by leading global brands and enterprise design organizations
        </p>
      </div>

      <div className="flex justify-center items-center text-[#888888] w-full overflow-hidden">
        <div className="marquee-container py-2">
          <div className="marquee-content animate-marquee flex gap-[60px] md:gap-[100px] items-center text-[#777777]">
            {/* List 1 */}
            {BRANDS.map((brand, i) => (
              <div
                key={`b1-${i}`}
                className="group relative cursor-pointer flex items-center gap-2"
              >
                <span className="font-display text-[20px] md:text-[24px] font-semibold tracking-tight text-neutral-400 group-hover:text-neutral-900 transition-all duration-200">
                  {brand.name}
                </span>
              </div>
            ))}
            {/* List 2 Duplicate for seamless loop */}
            {BRANDS.map((brand, i) => (
              <div
                key={`b2-${i}`}
                className="group relative cursor-pointer flex items-center gap-2"
              >
                <span className="font-display text-[20px] md:text-[24px] font-semibold tracking-tight text-neutral-400 group-hover:text-neutral-900 transition-all duration-200">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
