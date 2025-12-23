// src/components/ads/AdSidebar.jsx
// UNIVERSAL AD SIDEBAR (ENTERPRISE-GRADE, NETWORK-AGNOSTIC)

export default function AdSidebar({ position = "left" }) {
  return (
    <aside
      className={`
        hidden xl:flex
        w-[240px]
        flex-col
        gap-6
        sticky
        top-24
        ${position === "right" ? "ml-6" : "mr-6"}
      `}
    >
      {/* Sponsored Label */}
      <span className="text-xs uppercase tracking-wide text-muted">
        Sponsored
      </span>

      {/* Ad Slot */}
      <div
        id={`ad-slot-${position}`}
        className="
          rounded-xl
          border
          border-white/10
          bg-bg
          p-4
          min-h-[180px]
          flex
          items-center
          justify-center
          text-sm
          text-muted
        "
      >
        {/* 
          External ad network injects here.
          Example (Carbon Ads):
          <div id="carbonads"></div>
        */}
        Advertisements load here
      </div>
    </aside>
  );
}
