import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  courseData?: {
    name: string;
    description: string;
    provider: string;
    duration: string;
    price?: string;
    category: string;
  };
  reviewData?: {
    rating: number;
    reviewCount: number;
    reviews?: Array<{
      author: string;
      rating: number;
      reviewBody: string;
      datePublished: string;
    }>;
  };
  localArea?: string;
}

const SEOHead = ({ 
  title = "Titan Trucking School - Professional CDL Training in St. Paul, MN",
  description = "Get your CDL license at Minnesota's premier trucking school. Expert instruction, modern equipment, job placement assistance. Class A, Class B, and endorsement training available.",
  keywords = "CDL training, trucking school, Minnesota, St. Paul, Class A CDL, Class B CDL, commercial drivers license, truck driving school",
  image = "/og-image.jpg",
  url = "https://titantruckingschool.com",
  type = "website",
  courseData,
  reviewData,
  localArea
}: SEOHeadProps) => {
  
  // Enhanced local keywords based on area
  const getLocalKeywords = (area?: string) => {
    const baseKeywords = keywords;
    const localKeywords = [
      "CDL training near me",
      "truck driving school near me",
      "commercial drivers license training near me",
      "CDL classes near me",
      "trucking school Minnesota",
      "CDL training Minnesota",
      "St. Paul CDL school",
      "Minneapolis CDL training",
      "Twin Cities trucking school",
      "Minnesota truck driver training",
      "CDL school Hennepin County",
      "CDL training Ramsey County",
      "Minnesota Class A CDL",
      "Minnesota Class B CDL",
      "CDL training Bloomington MN",
      "CDL training Richfield MN",
      "CDL training Edina MN",
      "CDL training Plymouth MN",
      "CDL training Minnetonka MN",
      "CDL training Burnsville MN",
      "CDL training Eagan MN",
      "CDL training Apple Valley MN"
    ];
    
    if (area) {
      localKeywords.push(
        `CDL training ${area}`,
        `truck driving school ${area}`,
        `CDL classes ${area}`,
        `trucking school ${area}`,
        `commercial drivers license ${area}`
      );
    }
    
    return `${baseKeywords}, ${localKeywords.join(', ')}`;
  };
  // Enhanced Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Titan Trucking School",
    "description": "Professional CDL training school in St. Paul, Minnesota",
    "url": url,
    "telephone": "(612) 699-1403",
    "email": "info@titantruckingschool.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1821 University Ave W ste 464-1",
      "addressLocality": "St. Paul",
      "addressRegion": "MN",
      "postalCode": "55104",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.9537",
      "longitude": "-93.0900"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "44.9537",
        "longitude": "-93.0900"
      },
      "geoRadius": "50000"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Minneapolis",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "St. Paul",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Bloomington",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Richfield",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Edina",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Plymouth",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Minnetonka",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Burnsville",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Eagan",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Apple Valley",
        "addressRegion": "MN"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hennepin County",
        "addressRegion": "MN"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Ramsey County",
        "addressRegion": "MN"
      }
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
    "aggregateRating": reviewData ? {
      "@type": "AggregateRating",
      "ratingValue": reviewData.rating.toString(),
      "reviewCount": reviewData.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    } : {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CDL Training Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Class A CDL Training",
            "description": "Complete 3-4 week Class A CDL training program with job placement assistance",
            "provider": "Titan Trucking School",
            "courseMode": "onsite",
            "timeRequired": "P3W"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Class B CDL Training", 
            "description": "2-3 week Class B CDL training program for straight trucks and buses",
            "provider": "Titan Trucking School",
            "courseMode": "onsite",
            "timeRequired": "P2W"
          }
        }
      ]
    },
    "knowsAbout": [
      "CDL Training",
      "Commercial Drivers License",
      "Truck Driving",
      "HazMat Endorsement",
      "Passenger Endorsement",
      "School Bus Training",
      "DOT Physical",
      "ELDT Training",
      "Job Placement"
    ],
    "sameAs": [
      "https://www.facebook.com/titantruckingschool",
      "https://www.linkedin.com/company/titantruckingschool",
      "https://www.google.com/maps/place/titantruckingschool"
    ]
  };

  // Course Schema (when course data is provided)
  const courseSchema = courseData ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.name,
    "description": courseData.description,
    "provider": {
      "@type": "Organization",
      "name": "Titan Trucking School",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1821 University Ave W ste 464-1",
        "addressLocality": "St. Paul",
        "addressRegion": "MN",
        "postalCode": "55104"
      },
      "telephone": "(612) 699-1403"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "duration": courseData.duration,
      "inLanguage": "en",
      "location": {
        "@type": "Place",
        "name": "Titan Trucking School",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1821 University Ave W ste 464-1",
          "addressLocality": "St. Paul",
          "addressRegion": "MN",
          "postalCode": "55104"
        }
      }
    },
    "educationalLevel": "Professional",
    "teaches": [
      "Commercial Vehicle Operation",
      "Pre-trip Inspection",
      "Safe Driving Practices",
      "DOT Regulations",
      "Cargo Handling",
      "Vehicle Maintenance"
    ],
    "coursePrerequisites": "Valid driver's license, DOT medical certificate, clean driving record",
    "occupationalCategory": "53-3032.00 - Heavy and Tractor-trailer Truck Drivers",
    "about": {
      "@type": "Thing",
      "name": "Commercial Driving"
    }
  } : null;

  // Review Schema (when review data is provided)
  const reviewsSchema = reviewData?.reviews ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Titan Trucking School Reviews",
    "itemListElement": reviewData.reviews.map((review, index) => ({
      "@type": "Review",
      "position": index + 1,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished,
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Titan Trucking School"
      }
    }))
  } : null;

  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does CDL training take at Titan Trucking School?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Class A CDL program takes 3-4 weeks and our Class B CDL program takes 2-3 weeks. We also offer refresher courses that can be completed in 1-2 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide job placement assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive job placement assistance with a 95% job placement rate. We have partnerships with major trucking companies throughout Minnesota and the Midwest."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of CDL training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer competitive pricing with flexible payment options and financing available. Contact us at (612) 699-1403 for detailed pricing information and to discuss financing options."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer CDL training near Minneapolis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our St. Paul location serves the entire Twin Cities metro area including Minneapolis, Bloomington, Richfield, and surrounding communities. We're conveniently located and easily accessible from throughout the metro area."
        }
      },
      {
        "@type": "Question",
        "name": "What CDL endorsements do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer training for HazMat, Passenger, School Bus, Tanker, and Doubles/Triples endorsements. These specialized endorsements can increase your earning potential and job opportunities."
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={getLocalKeywords(localArea)} />
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
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Course Schema */}
      {courseSchema && (
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      )}
      
      {/* Reviews Schema */}
      {reviewsSchema && (
        <script type="application/ld+json">
          {JSON.stringify(reviewsSchema)}
        </script>
      )}
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="US-MN" />
      <meta name="geo.placename" content="St. Paul, Minnesota" />
      <meta name="geo.position" content="44.9537;-93.0900" />
      <meta name="ICBM" content="44.9537, -93.0900" />
      
      {/* Additional Local Keywords */}
      <meta name="DC.subject" content="CDL training, truck driving school, commercial drivers license, Minnesota, Twin Cities" />
      <meta name="DC.coverage" content="Minneapolis, St. Paul, Bloomington, Richfield, Hennepin County, Ramsey County" />
      
      {/* Business Information */}
      <meta name="business.phone" content="(612) 699-1403" />
      <meta name="business.hours" content="Mo-Fr 08:00-18:00, Sa 09:00-15:00" />
      <meta name="business.address" content="1821 University Ave W ste 464-1, St. Paul, MN 55104" />
    </Helmet>
  );
};

export default SEOHead;