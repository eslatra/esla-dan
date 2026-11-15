export const projects = [
  {
    id: "01",
    slug: "eslatra",
    name: "Eslatra",
    category: "TECHNOLOGY & BUSINESS",
    tagline: "Digital solutions for business.",
    shortDescription: "Software development, cybersecurity, and digital services for business teams.",
    website: "https://eslatra.com",
    externalLinkText: "Visit Eslatra",
    image: "/imgs/products/eslatra.png",
    bgPattern: "#D5DCDF",
    tags: ["Software Development", "Cybersecurity", "Digital Services", "Cloud Architecture"],
    
    // Case study / Project detail content
    caseStudyDraft: "Public product information is included below. Esla's role, implementation details, decisions, and outcomes reflect production delivery.",
    problem: "Esla's public positioning focuses on helping businesses build, secure, and improve their digital presence. Modern enterprises face fragmented software tooling, disjointed team workflows, and complex cybersecurity compliance requirements across expanding cloud surfaces.",
    solution: "The current public website presents software development, cybersecurity, branding, and digital services, giving businesses one place to explore these offerings. Eslatra bridges enterprise engineering with human-centered product design.",
    contribution: "Served as full-stack engineer and solutions architect, translating business requirements into high-performance web applications, resilient client dashboards, and secure digital infrastructure.",
    technicalImplementation: "Built using Next.js, Node.js, Express, MongoDB, and Tailwind CSS. Implemented microservice communication, strict role-based access control (RBAC), and automated CI/CD deployment pipelines.",
    challengesDecisions: "Balancing stringent cybersecurity protocols with frictionless user workflows. Deployed low-latency cached API responses, hardened authentication endpoints, and created modular service architecture to allow independent feature scaling.",
    results: "Empowered business clients to streamline operations, cut down deployment cycles, and secure digital assets across regional and international deployments."
  },
  {
    id: "02",
    slug: "uwa",
    name: "Uwa",
    category: "FILM & STREAMING",
    tagline: "African stories, on demand.",
    shortDescription: "A streaming offering for African movies and series, with early-access sign-up.",
    website: "https://uwaoriginals.com",
    externalLinkText: "Join Uwa waitlist",
    image: "/imgs/products/uwa.png",
    bgPattern: "#E5D9F2",
    tags: ["Streaming Platform", "Video on Demand", "Content Delivery", "African Cinema"],
    
    caseStudyDraft: "Public streaming platform showcase highlighting early access onboarding, media delivery, and community culture.",
    problem: "African filmmakers and content creators encounter severe bottlenecks in international distribution, fragmented licensing, and low monetization transparency. Viewers worldwide crave high-definition, authentic African cinema without regional lockouts.",
    solution: "Uwa is a revolutionary video streaming and cultural community platform. It delivers curated African movies, series, documentaries, and creator challenges with seamless streaming and intuitive discovery.",
    contribution: "Led the frontend product architecture and interactive media player development. Engineered responsive discovery feeds, user onboarding funnels, and waitlist integration.",
    technicalImplementation: "Developed with React, Next.js, Tailwind CSS, CDN video edge caching, and scalable RESTful backend services. Implemented mobile-responsive layouts tailored for high-traffic mobile users.",
    challengesDecisions: "Overcoming varying cellular network speeds and data costs across target regions. Engineered adaptive bitrate streaming fallbacks, aggressive image optimization, and lightweight client bundles.",
    results: "Built a rapidly growing subscriber waitlist, achieved sub-second initial content loads, and established an engaged community of creators and film enthusiasts."
  },
  {
    id: "03",
    slug: "therunclub",
    name: "TheRunClub",
    category: "SPORTS & COMMUNITY",
    tagline: "Built for every runner.",
    shortDescription: "A running and fitness platform for community, events, and training.",
    website: "https://trc.eslatra.com",
    externalLinkText: "Visit TheRunClub",
    image: "/imgs/products/trc.png",
    bgPattern: "#D8E2DC",
    tags: ["Sports & Fitness", "Community Hub", "Event Organization", "Training Guides"],
    
    caseStudyDraft: "Production platform dedicated to fitness empowerment, group run scheduling, and runner tracking.",
    problem: "Athletes and casual runners often lack a cohesive community platform to discover local group runs, sign up for competitive events, and access structured training resources.",
    solution: "TheRunClub organizes races, group workouts, and community fitness meetups into an engaging digital hub with progress tracking, leaderboards, and supportive athlete networks.",
    contribution: "Architected the full-stack community platform, event registration flows, interactive route displays, and automated participant email notifications.",
    technicalImplementation: "Engineered with React, Next.js, Node.js, MongoDB, and geolocation utilities. Optimized for instant event RSVP and fast mobile access during outdoor running sessions.",
    challengesDecisions: "Managing concurrent peak registrations during high-demand marathon event launches. Created race-condition-safe ticket allocations and database indexing.",
    results: "Supported multiple successful regional marathon registrations, connected hundreds of active runners weekly, and increased community event attendance."
  },
  {
    id: "04",
    slug: "saurimobile",
    name: "SauriMobile",
    category: "TRAVEL & MOBILITY",
    tagline: "Travel booking simplified.",
    shortDescription: "Multi-modal transportation booking across buses, trains, and flights.",
    website: "https://play.google.com/store/apps/details?id=com.qiittech.saurimobile",
    externalLinkText: "Download SauriMobile",
    image: "/imgs/products/saurimobile.png",
    bgPattern: "#FFE5D9",
    tags: ["Mobile App", "Cross-Platform", "Ticket Booking", "Transit APIs"],
    
    caseStudyDraft: "Cross-platform mobile application available on Android and iOS for comprehensive transport reservations.",
    problem: "Travelers frequently have to switch between incompatible apps and chaotic ticket counters to organize multi-leg journeys spanning bus operators, passenger trains, and domestic flights.",
    solution: "SauriMobile unifies multi-modal transit reservations in a single intuitive mobile app, providing real-time schedules, fair pricing comparisons, instant e-tickets, and mobile wallet payments.",
    contribution: "Contributed to cross-platform mobile frontend engineering, API integration with transport providers, payment gateway workflows, and ticket wallet UI.",
    technicalImplementation: "Built using React Native, Expo, Redux Toolkit, and secure native payment SDKs. Implemented offline ticket storage for verification without active internet connection.",
    challengesDecisions: "Ensuring barcode and QR-code tickets could be reliably validated at remote transit depots with spotty connectivity. Implemented cryptographically signed offline-accessible ticket passes.",
    results: "Successfully released on Google Play Store and Apple App Store, processing thousands of seamless commuter bookings."
  },
  {
    id: "05",
    slug: "midris-autos",
    name: "M-Idris autos",
    category: "AUTOMOTIVE & COMMERCE",
    tagline: "Modern vehicle marketplace.",
    shortDescription: "Online automotive platform connecting car buyers and verified sellers.",
    website: "https://midrisautos.vercel.app/",
    externalLinkText: "Visit M-Idris autos",
    image: "/imgs/products/midris.png",
    bgPattern: "#E2ECE9",
    tags: ["Automotive Marketplace", "E-Commerce", "Inventory Management", "Lead Generation"],
    
    caseStudyDraft: "Full-stack automotive digital dealership and vehicle discovery platform.",
    problem: "Car buyers in local markets suffer from outdated inventory lists, unclear pricing, and lack of verified inspection details when purchasing pre-owned and new vehicles.",
    solution: "M-Idris autos provides a sleek online showroom with high-resolution vehicle galleries, detailed spec sheets, transparent pricing, and instant seller inquiry channels.",
    contribution: "Designed and implemented the full-stack web application, inventory management database, dynamic vehicle filter system, and direct customer WhatsApp/call integrations.",
    technicalImplementation: "Built with Next.js, Tailwind CSS, MongoDB, and Cloudinary media processing. Optimized for lightning-fast photo loading and seamless mobile browsing.",
    challengesDecisions: "Optimizing vehicle galleries with dozens of high-res photos per car without degrading page speed. Implemented progressive image loading and WebP conversion.",
    results: "Elevated dealership online credibility, dramatically increased buyer inquiries, and reduced average time to sale for listed vehicles."
  },
  {
    id: "06",
    slug: "hellosauri",
    name: "HelloSauri",
    category: "TRAVEL & TICKETING",
    tagline: "All-in-one travel companion.",
    shortDescription: "Comprehensive travel planning and ticket booking across nationwide routes.",
    website: "https://hellosauri.com",
    externalLinkText: "Visit HelloSauri",
    image: "/imgs/products/hellosauri.png",
    bgPattern: "#DFE7FD",
    tags: ["Travel Planner", "Price Comparison", "Booking Engine", "Web Platform"],
    
    caseStudyDraft: "Web-based travel discovery and ticket purchasing platform.",
    problem: "Planning intercity journeys requires navigating disjointed carrier websites with inconsistent pricing, hidden fees, and unreliable scheduling information.",
    solution: "HelloSauri aggregates routes, transport providers, pricing tiers, and promotional discounts into one seamless web booking interface.",
    contribution: "Developed the core search and booking UI, route filtering algorithms, passenger details capture, and confirmation email dispatching service.",
    technicalImplementation: "Engineered using React, Next.js, Node.js, Express, and Tailwind CSS. Integrated with third-party payment processing gateways and transit APIs.",
    challengesDecisions: "Real-time synchronization of fast-changing ticket availability across multiple independent transit carrier systems.",
    results: "Delivered a frictionless booking experience for intercity commuters, saving travelers significant time and money on travel itineraries."
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
