  // Lazy-load the client componentimpo
  import LinkedInAdsClient from "./LinkedInAdsClient";
      
  export const metadata = {
    title: "LinkedIn Ads Services USA & Canada | adClickMagnet",
    description: "Reach decision-makers with LinkedIn Ads services across the US and Canada. We create B2B ad campaigns that generate leads and build professional authority.",
  };
  
  export default function Page() {
    return (
      <LinkedInAdsClient
      />
    );
  }