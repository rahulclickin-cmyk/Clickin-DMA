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
    subtitle: 'Perfect for Startups & Small Businesses',
    price: '₹3,999',
    features: [
      '1 Premium Responsive Landing Page',
      'Mobile Friendly Design',
      'WhatsApp Click-to-Chat Button',
      'Contact Form',
      'Basic SEO Setup',
      'SSL Certificate Setup',
      'Fast Loading Website',
      '1 Free Revision',
      '7 Days Free Support'
    ]
  },
  {
    id: 'professional-website',
    name: 'PROFESSIONAL WEBSITE',
    subtitle: 'Best for Growing Businesses',
    price: '₹8,000',
    popular: true,
    badge: 'Most Popular',
    features: [
      'Up to 5 Custom Pages',
      'Premium Responsive Design',
      'Contact Form',
      'WhatsApp Integration',
      'Google Maps Integration',
      'Basic SEO Setup',
      'Speed Optimization',
      'Social Media Integration',
      'SSL Certificate Setup',
      '1 Business Email',
      '2 Free Revisions',
      '15 Days Free Support'
    ]
  },
  {
    id: 'booking-website',
    name: 'BOOKING WEBSITE',
    subtitle: 'Perfect for Clinics, Salons, Gyms & Consultants',
    price: '₹12,000',
    features: [
      'Up to 7 Pages',
      'Appointment Booking System',
      'WhatsApp Confirmation',
      'Email Notification',
      'Razorpay Payment Integration',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Admin Dashboard',
      'Contact & Inquiry Forms',
      '30 Days Free Support'
    ]
  },
  {
    id: 'ecommerce-website',
    name: 'E-COMMERCE WEBSITE',
    subtitle: 'Launch Your Online Store',
    price: 'Starting ₹15,000',
    features: [
      'Up to 25 Products',
      'Shopping Cart',
      'Razorpay Payment Gateway',
      'Cash on Delivery Option',
      'Product Categories',
      'Order Management',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Coupon System',
      'Admin Panel',
      '30 Days Free Support'
    ]
  }
];

export const OPTIONAL_ADDONS = [
  { name: 'Extra Page', price: '₹800/Page', icon: 'FileText' },
  { name: 'Business Email', price: '₹500', icon: 'Mail' },
  { name: 'Logo Design', price: '₹1,000', icon: 'Palette' },
  { name: 'Content Writing', price: '₹500/Page', icon: 'PenTool' },
  { name: 'Premium Images', price: '₹500', icon: 'Image' },
  { name: 'Payment Gateway Setup', price: '₹1,000', icon: 'CreditCard' },
  { name: 'Blog Setup', price: '₹1,500', icon: 'Layout' },
  { name: 'Booking System Upgrade', price: '₹3,000', icon: 'Calendar' },
  { name: 'Advanced SEO', price: '₹5,000+', icon: 'Search' },
  { name: 'Smart Chatbot', price: '₹5,000+', icon: 'MessageSquare' },
  { name: 'WhatsApp Automation', price: '₹7,500+', icon: 'MessageSquare' },
  { name: 'Monthly Website Maintenance', price: '₹999/month', icon: 'ShieldCheck' }
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-1',
    title: 'Luxury Interior & Architecture Portfolio',
    category: 'website',
    image: 'https://lh3.googleusercontent.com/d/126tmb7V5fbLsTVgZQyMHun-6INW5BKh6',
    url: 'https://drive.google.com/file/d/126tmb7V5fbLsTVgZQyMHun-6INW5BKh6/view?usp=drive_link',
    description: 'High-converting interior design & architectural showcase featuring luxury product galleries, full page layouts, and interactive consultation booking.',
    tags: ['Architecture', 'Interior Design', 'Lead Gen', 'Live Client Web']
  },
  {
    id: 'proj-2',
    title: 'Comfort Cotton - Ethnic Fashion E-Commerce',
    category: 'e-commerce',
    image: 'https://lh3.googleusercontent.com/d/1B6MApIk28CUTnLi5tTOxHvo5Sn6c_KkF',
    url: 'https://drive.google.com/file/d/1B6MApIk28CUTnLi5tTOxHvo5Sn6c_KkF/view?usp=drive_link',
    description: 'Custom online clothing catalog featuring responsive festive collection banners, product filters, and instant Razorpay checkout.',
    tags: ['E-Commerce', 'Fashion Store', 'Razorpay Gateway', 'Mobile Responsive']
  },
  {
    id: 'proj-3',
    title: 'HealthCare Dental & Clinic Tele-Consultation',
    category: 'local-business',
    image: 'https://lh3.googleusercontent.com/d/1IREvxIOP3X4q1MkL_qwdiXdFb79x-oms',
    url: 'https://drive.google.com/file/d/1IREvxIOP3X4q1MkL_qwdiXdFb79x-oms/view?usp=drive_link',
    description: 'Patient appointment booking portal with online inquiry forms, WhatsApp integration, doctor profiles, and automated notifications.',
    tags: ['Healthcare', 'Appointment Booking', 'WhatsApp Leads', 'Clinic Website']
  },
  {
    id: 'proj-4',
    title: 'Real Estate & Property Investment Portal',
    category: 'local-business',
    image: 'https://lh3.googleusercontent.com/d/1tbOTq1NZHMTfkN4gTl05k94xJOKtXaIG',
    url: 'https://drive.google.com/file/d/1tbOTq1NZHMTfkN4gTl05k94xJOKtXaIG/view?usp=drive_link',
    description: 'Interactive property listings with virtual floor plans, instant call request buttons, and automated lead routing.',
    tags: ['Real Estate', 'Lead Gen', 'Property Portal', 'High Converting']
  },
  {
    id: 'proj-5',
    title: 'Automated Lead Outreach & CRM Portal',
    category: 'automation',
    image: 'https://lh3.googleusercontent.com/d/1qPElNsJF6JC9jcdb1HOiioLdORPfVuUe',
    url: 'https://drive.google.com/file/d/1qPElNsJF6JC9jcdb1HOiioLdORPfVuUe/view?usp=drive_link',
    description: 'Smart B2B lead generation dashboard and automated outreach sequence builder tailored for growing business clients.',
    tags: ['Smart Automation', 'B2B Lead Gen', 'CRM Workflow', 'Sales Funnel']
  },
  {
    id: 'proj-6',
    title: 'Celebration Ethnic Anarkali Boutique Store',
    category: 'e-commerce',
    image: 'https://lh3.googleusercontent.com/d/1ansFayHNHguuLtQlKg99inPB6ojhZKT0',
    url: 'https://drive.google.com/file/d/1ansFayHNHguuLtQlKg99inPB6ojhZKT0/view?usp=drive_link',
    description: 'Vibrant ethnic fashion store optimized for high-volume festive sales with Instagram shop sync and discount banners.',
    tags: ['Boutique', 'E-Commerce', 'Instagram Sync', 'Bridal Wear']
  },
  {
    id: 'proj-7',
    title: 'FitPulse Gym & Fitness Studio Booking',
    category: 'local-business',
    image: 'https://lh3.googleusercontent.com/d/1c83IDdd8-VUg7nxk5NzQzTgsiQkDYJTz',
    url: 'https://drive.google.com/file/d/1c83IDdd8-VUg7nxk5NzQzTgsiQkDYJTz/view?usp=drive_link',
    description: 'Personal training & gym membership booking portal with trainer schedules, class passes, and online payment setup.',
    tags: ['Gym & Fitness', 'Booking System', 'Membership Portal', 'Local Business']
  },
  {
    id: 'proj-8',
    title: 'Gourmet Bistro & Cafe Digital Menu Landing',
    category: 'website',
    image: 'https://lh3.googleusercontent.com/d/1mDOFsW5k_fVtSlm26wIY2QxceIA7Zpus',
    url: 'https://drive.google.com/file/d/1mDOFsW5k_fVtSlm26wIY2QxceIA7Zpus/view?usp=drive_link',
    description: 'Sleek restaurant website featuring digital QR code menus, table reservation engine, and instant WhatsApp order desk.',
    tags: ['Restaurant', 'QR Menu', 'Table Reservation', 'Digital Order']
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
