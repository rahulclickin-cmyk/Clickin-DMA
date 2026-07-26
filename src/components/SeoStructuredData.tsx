import React from 'react';

export const SeoStructuredData: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://clickin-dma.vercel.app/#organization",
        "name": "Clickin DMA | Digital Marketing & Web Development Agency",
        "alternateName": "Clickin Digital Marketing Agency",
        "url": "https://clickin-dma.vercel.app/",
        "logo": "https://clickin-dma.vercel.app/favicon.svg",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
        "description": "Leading Digital Marketing & Web Development agency providing premium ₹3,999 Landing Pages, ₹8,000 Business Websites, Booking Systems, E-Commerce Stores & WhatsApp Lead Automation.",
        "founder": {
          "@type": "Person",
          "name": "Rahul Singh",
          "jobTitle": "Founder & Managing Director",
          "telephone": "+918882292448",
          "email": "clickindma@gmail.com"
        },
        "telephone": "+918882292448",
        "email": "clickindma@gmail.com",
        "priceRange": "₹3999 - ₹15000",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer, Razorpay",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delhi NCR",
          "addressRegion": "Delhi",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.6139",
          "longitude": "77.2090"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "21:00"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development & Marketing Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Page Package",
                "description": "1 Premium Responsive Landing Page, Mobile Friendly Design, WhatsApp Click-to-Chat Button, Contact Form, Basic SEO Setup"
              },
              "price": "3999",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Website Package",
                "description": "Up to 5 Custom Pages, Premium Responsive Design, Contact Form, WhatsApp Integration, Google Maps, Speed Optimization, 1 Business Email"
              },
              "price": "8000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Booking Website Package",
                "description": "Up to 7 Pages, Appointment Booking System, WhatsApp Confirmation, Email Notification, Razorpay Payment Integration"
              },
              "price": "12000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Website Package",
                "description": "Up to 25 Products, Shopping Cart, Razorpay Gateway, Cash on Delivery, Coupon System, Admin Panel"
              },
              "price": "15000",
              "priceCurrency": "INR"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://clickin-dma.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost at Clickin DMA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clickin DMA provides affordable agency pricing: High-Converting Landing Pages cost ₹3,999, 5-Page Professional Websites cost ₹8,000, Appointment Booking Websites cost ₹12,000, and full E-Commerce stores start at ₹15,000."
            }
          },
          {
            "@type": "Question",
            "name": "Does Clickin DMA offer free hosting and free SEO audits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Clickin DMA offers complimentary SEO ranking audits, free consultation for hosting & domain setup, and free initial speed optimization with every project."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Rahul Singh at Clickin DMA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can call or WhatsApp Rahul Singh directly at +91 88822 92448 or email clickindma@gmail.com for instant quotes."
            }
          },
          {
            "@type": "Question",
            "name": "What features are included in the ₹8,000 Professional Website package?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The ₹8,000 Most Popular package includes up to 5 custom designed pages, mobile responsive layout, contact form, WhatsApp integration, Google Maps, basic SEO, speed optimization, social media links, SSL setup, 1 business email, 2 revisions, and 15 days of free support."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
