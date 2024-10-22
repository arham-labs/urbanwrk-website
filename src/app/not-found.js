'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const pathname = window.location.pathname;
    const redirects = {
      "/home": "/",
      "/city/pune/pune/aeromall": "/pune/aeromall",
      "/city/ncr/baani": "/ncr/baani",
      "/city/hyderabad/raheja-mindspace": "/hyderabad/raheja-mindspace",
      "/city/pune/koncard": "/city/pune/koncord",
      "/city/ncr": "/ncr",
      "/city/pune/nandan-probiz": "/pune/nandan-probiz",
      "/city/pune/pentagon": "/pune/pentagon",
      "/city/pune/westport": "/pune/westport",
      "/city/kolkata": "/kolkata",
      "/city/mumbai": "/mumbai",
      "/city/mumbai/pcp": "/mumbai/peninsula-corporate-park",
      "/city/hyderabad": "/hyderabad",
      "/city/ncr/max-house": "/ncr/max-house",
      "/blog/concentrating-on-work-in-a-coworking-space": "/",
      "/carrers": "/",
      "/solution/virtual-office": "/solutions/virtual-offices",
      "/property/pune/urbanwrk-magarpatta": "/pune/pentagon",
      "/solution/enterprise-workspace": "/solutions",
      "/solution/event-venue": "/solutions/events-launches",
      "/blog": "/",
      "/property/pune/urbanwrk-montclaire-baner": "/pune/montclaire",
      "/solution": "/solutions",
      "/cities": "/",
      "/solution/meeting-room": "/solutions/meeting-rooms",
      "/city/chennai": "/hyderabad",
      "/property/pune/urbanwrk-sai-radhe-bund-garden-road": "/pune/sai-radhe",
      "/property/kolkata/urbanwrk-salt-lake": "/kolkata/technopolis",
      "/property/pune/urbanwrk-koncord-bund-garden-road": "/pune/koncord",
      "/location": "/",
      "/aboutus": "/about-us",
      "/property/pune/urbanwrk-westport-baner": "/about-us"
    };

    if (redirects[pathname]) {
      router.push(redirects[pathname]);
    }
  }, [router]);

  return (
    <div style={{ fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <style>{`
        body { color: #000; background: #fff; margin: 0; }
        .next-error-h1 { border-right: 1px solid rgba(0, 0, 0, .3); }
        @media (prefers-color-scheme: dark) {
          body { color: #fff; background: #000; }
          .next-error-h1 { border-right: 1px solid rgba(255, 255, 255, .3); }
        }
        `}</style>
        <h1 className="next-error-h1" style={{ display: 'inline-block', margin: '0 20px 0 0', padding: '0 23px 0 0', fontSize: '24px', fontWeight: 500, verticalAlign: 'top', lineHeight: '49px' }}>
          404
        </h1>
        <div style={{ display: 'inline-block' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 400, lineHeight: '49px', margin: 0 }}>
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
}
