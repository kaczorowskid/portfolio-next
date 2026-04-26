import Script from "next/script";

export const UmamiScript = () => (
  <Script
    src="/stats/script.js"
    data-website-id={process.env.NEXT_PUBLIC_UMAMI_DATA_WEBSITE_ID}
    data-host-url="/stats"
    strategy="afterInteractive"
  />
);
