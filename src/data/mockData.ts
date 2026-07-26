import { GoogleReview, PackageItem, ShowcaseProject, VideoTestimonial } from '../types';

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Raj K.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '3 months ago',
    text: 'Highly recommend Rahul Singh & Clickin Digital - they help you to promote your business. Rahul is a very helpful person and having a very good knowledge, lot of creative ideas! Thank you Clickin Digital for a famous agency status.',
    ownerResponse: {
      dateAgo: '3 months ago',
      text: 'Thank you Raj ji for your trust in Clickin Digital! We are always glad to assist you in providing best digital marketing and web solutions.'
    }
  },
  {
    id: 'rev-2',
    author: 'Simar Bhatia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '2 months ago',
    text: 'Clickin Digital is a one stop solution for all your Website and Social Media concerns. They built my website with such precision and were extremely patient throughout... More',
    ownerResponse: {
      dateAgo: '2 months ago',
      text: 'Thank you so much for the 5-star review! We are glad to hear that you liked our work and support.'
    }
  },
  {
    id: 'rev-3',
    author: 'Neha Sood',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '4 months ago',
    text: 'In starting I was a bit confused that I should go with them or not. But they convinced me to take their service... And now I must say I recommend to each and everyone to go with them as they are very supportive and helpful at any time of the day. I truly recommend them to everyone!',
    ownerResponse: {
      dateAgo: '4 months ago',
      text: 'Thank you so much for your kind review! We always ensure complete peace of mind and prompt support.'
    }
  },
  {
    id: 'rev-4',
    author: 'Akansha Sharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '1 month ago',
    text: 'Clickin Digital is an amazing company. Employees are professional and also good listener. I was grateful to hand over project to Rahul Singh. Completed project on time and with responsibility. The kind of prompt response that we got was great.',
    ownerResponse: {
      dateAgo: '1 month ago',
      text: 'Thank you Akansha ji for sharing your valuable feedback! We look forward to continuing our partnership.'
    }
  },
  {
    id: 'rev-5',
    author: 'Chitra Kumar',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '3 months ago',
    text: 'The green sign: Very professional and excellent team member, highly recommended! Quick resolution & creative execution.',
    ownerResponse: {
      dateAgo: '3 months ago',
      text: 'Thank you for your kind words and trust in Rahul Singh & Clickin Digital.'
    }
  },
  {
    id: 'rev-6',
    author: 'Tannu Verma',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '5 months ago',
    text: 'Nice service... The whole team is really hard working and will provide you a website and automation graphics as per your expectation. Truly recommended to everyone looking for digital growth.',
    ownerResponse: {
      dateAgo: '5 months ago',
      text: 'Thank you Tannu ji for showing your trust in Clickin Digital!'
    }
  }
];

export const PRICING_PACKAGES: PackageItem[] = [
  {
    id: 'landing-page',
    name: 'LANDING PAGE',
    price: '₹3,999/-',
    badge: 'Best for Quick Launches',
    features: [
      'Single-Page High Converting Layout',
      'Mobile Friendly & Responsive Design',
      '1 Business Email-Id',
      'Free SSL Security Certificate',
      'Fast Speed & SEO Ready',
      'WhatsApp & Direct Call Lead Capture',
      'Unlimited Bandwidth & Storage',
      '24/7 Priority Support'
    ]
  },
  {
    id: 'professional-website',
    name: 'PROFESSIONAL WEBSITE (5 PAGES)',
    price: '₹8,000/-',
    popular: true,
    badge: 'Most Popular Choice',
    features: [
      'Up to 5 Custom Designed Pages',
      '1 Business Email Id',
      'SEO Ready & Fast Speed Optimized',
      'Unlimited Images & Video Support',
      'Social Media & WhatsApp Integration',
      'Custom Lead & Inquiry Forms',
      'Free SSL Security Certificate',
      '24/7 Priority Phone & Chat Support'
    ]
  },
  {
    id: 'booking-website',
    name: 'BOOKING WEBSITE',
    price: '₹12,000/-',
    badge: 'Ideal for Service Providers',
    features: [
      'Interactive Calendar & Appointment Booking',
      'Automated WhatsApp & Email Confirmations',
      'Payment Gateway Integration (Razorpay/UPI)',
      'Service Catalog & Staff Scheduling',
      'Mobile Responsive & Fast Speed',
      'SEO Optimized & Domain Setup',
      'Client Inquiry Management Portal',
      '24/7 Technical Support & Training'
    ]
  },
  {
    id: 'ecommerce-website',
    name: 'E-COMMERCE WEBSITE (STARTING)',
    price: '₹15,000/-',
    badge: 'Maximum Sales & Store Growth',
    features: [
      'Full Multi-Product Online Store & Cart',
      'Payment Gateway (Razorpay/UPI/Cards/COD)',
      'Inventory Management & Order Tracking',
      'Automated Lead Capture & CRM Sync',
      'SEO Ready & Mobile Optimized Experience',
      'Coupon Codes & Discount Management',
      'Unlimited Product Listings Support',
      '1 Year Priority Support & Maintenance'
    ]
  }
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-1',
    title: 'Comfort Cotton - Ethnic Fashion E-Commerce',
    category: 'e-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    description: 'High-converting online clothing catalog featuring custom collection banners, size guides, and instant Razorpay checkout.',
    tags: ['E-Commerce', 'Fashion', 'Mobile Responsive', 'Payment Gateway']
  },
  {
    id: 'proj-2',
    title: 'HealthCare Clinic & Tele-Consultation Portal',
    category: 'local-business',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    description: 'Patient appointment booking system with online inquiry forms, WhatsApp integration, and automated SMS reminders.',
    tags: ['Healthcare', 'Appointment Booking', 'Lead Automation']
  },
  {
    id: 'proj-3',
    title: 'Interior Design & Sanitaryware Fittings Hub',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    description: 'Modern, high-end product gallery showcasing luxury bathroom and kitchen architecture with quote request engine.',
    tags: ['Architecture', 'Product Catalog', 'Lead Gen']
  },
  {
    id: 'proj-4',
    title: 'Real Estate & Property Investment Showcase',
    category: 'local-business',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    description: 'Interactive property listings with virtual floor plan views, instant call request, and AI lead scoring sequence.',
    tags: ['Real Estate', 'AI Lead Generation', 'Delhi NCR']
  },
  {
    id: 'proj-5',
    title: 'Automated Outreach & Lead Generation Portal',
    category: 'automation',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    description: 'Automated CRM integration and email sequence builder designed for B2B local business outreach.',
    tags: ['AI Automation', 'Email Sequences', 'CRM Workflow']
  },
  {
    id: 'proj-6',
    title: 'Celebration Ethnic Anarkali Boutique Store',
    category: 'e-commerce',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
    description: 'Vibrant ethnic wear store optimized for heavy festive sales with instagram shop feed integration.',
    tags: ['Boutique', 'E-Commerce', 'Instagram Sync']
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'v-1',
    name: 'Rajinder Soni',
    role: 'Business Owner',
    company: 'Soni Electronics',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    quote: 'We were very impressed with all the aspects of our new website and lead automation. We would highly recommend Clickin Digital for Digital Marketing Solutions!'
  },
  {
    id: 'v-2',
    name: 'Komal Rastogi',
    role: 'Boutique Founder',
    company: 'Ethnic Elegance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80',
    quote: 'Clickin Digital team delivered our project within 5 days! Sales increased by 140% after implementing automated follow-up sequences.'
  },
  {
    id: 'v-3',
    name: 'Deepanshu',
    role: 'Clinic Manager',
    company: 'Arogya Dental',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80',
    quote: 'Clickin Digital is a great company. I hire them for a lot more than just building a website. They are our true growth partners.'
  }
];

export const TEXT_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Praveen Khosle',
    role: 'Jeweller',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    quote: 'We were very impressed with all the aspects of our new website. We would highly recommend Clickin Digital for Digital Marketing Solutions.'
  },
  {
    id: 't-2',
    name: 'Samarth',
    role: 'E-Commerce Merchant',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
    quote: 'Rahul Singh and his team created an incredible automated sales pipeline for us. Our customer inquiries get instant WhatsApp replies, leading to 2x higher closing rate.'
  },
  {
    id: 't-3',
    name: 'Kamal Kumar',
    role: 'Real Estate Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    quote: 'Clickin Digital is a great company. I hire them for a lot more than just building a website. They are like our internal marketing team.'
  },
  {
    id: 't-4',
    name: 'Milan',
    role: 'Business Consultant',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    quote: 'We interviewed many digital marketing firms but it was clear right from starting that Clickin Digital was the best choice.'
  },
  {
    id: 't-5',
    name: 'Ashok Meena',
    role: 'Institute Owner',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80',
    quote: 'We re-did our website twice in one year and the first company nowhere stands in front of Clickin Digital. Good job Guys!'
  },
  {
    id: 't-6',
    name: 'Surbhi Panchal',
    role: 'Event Organiser',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    quote: 'Attentive to detail, great communications skills. Rahul really understood each and everything required for our grand event launch.'
  }
];
