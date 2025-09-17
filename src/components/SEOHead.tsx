import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({ 
  title = "Titan Trucking School - Professional CDL Training in St. Paul, MN",
  description = "Get your CDL license at Minnesota's premier trucking school. Expert instruction, modern equipment, job placement assistance. Class A, Class B, and endorsement training available.",
  keywords = "CDL training, trucking school, Minnesota, St. Paul, Class A CDL, Class B CDL, commercial drivers license, truck driving school",
  image = "/og-image.jpg",
  url = "https://titantruckingschool.com",
  type = "website"
}: SEOHeadProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Titan Trucking School",
    "description": "Professional CDL training school in St. Paul, Minnesota",
    "url": url,
    "telephone": "(651) 555-1234",
    "email": "info@titantruckingschool.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Training Center Blvd",
      "addressLocality": "St. Paul",
      "addressRegion": "MN",
      "postalCode": "55101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.9537",
      "longitude": "-93.0900"
    },
    "serviceArea": [
      "Minneapolis, MN",
      "St. Paul, MN",
      "Bloomington, MN",
      "Richfield, MN",
      "Hennepin County, MN",
      "Ramsey County, MN"
    ],
    "services": [
      "Class A CDL Training",
      "Class B CDL Training", 
      "CDL Refresher Course",
      "HazMat Endorsement",
      "Passenger Endorsement",
      "School Bus Endorsement",
      "Tanker Endorsement",
      "Doubles/Triples Endorsement"
    ],
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-15:00"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Titan Trucking School" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;