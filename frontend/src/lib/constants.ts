export const SITE_CONFIG = {
  name: "P.A.W.S. HD",
  fullName: "P.A.W.S. HD LLC",
  tagline: "High Desert Pooper Scooper",
  description:
    "Professional pet waste removal service in the High Desert. We clean your yard so you can focus on things that really matter.",
  phone: "760-701-2280",
  email: "thescoop@pawshd.com",
  social: {
    facebook: "https://facebook.com/pawshd",
    instagram: "https://instagram.com/paws_hd",
  },
  clientPortal:
    "https://client.sweepandgo.com/login/paws-poop-and-waste-solutions-b49q8",
  quoteUrl:
    "https://client.sweepandgo.com/paws-poop-and-waste-solutions-b49q8/register",
};

export const NAV_LINKS = [
  { id: "services", label: "Services", href: "/services" },
  { id: "about", label: "About", href: "/about" },
  { id: "faqs", label: "FAQs", href: "/faq" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { label: "Happy Customers", value: 85, suffix: "+" },
  { label: "Subscribing Clients", value: 200, suffix: "+" },
  { label: "Five-Star Reviews", value: 150, suffix: "+" },
  { label: "Star Rating", value: 5.0, suffix: "", isRating: true },
] as const;

export const SERVICE_AREAS = [
  "Hesperia",
  "Victorville",
  "Apple Valley",
  "Adelanto",
  "Oak Hills",
  "Spring Valley Lake",
  "Phelan",
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Get Your Quote",
    description:
      "Tell us about your yard and furry friends. We'll provide a free, no-obligation quote.",
    icon: "clipboard-list" as const,
  },
  {
    number: 2,
    title: "Schedule Service",
    description:
      "Choose once, twice, or three times a week. We offer flexible scheduling.",
    icon: "calendar" as const,
  },
  {
    number: 3,
    title: "Enjoy a Clean Yard",
    description:
      "Relax while we handle the dirty work. No stone unturned, no poo left behind.",
    icon: "sparkles" as const,
  },
] as const;

export const SERVICES = [
  {
    id: "waste-removal",
    title: "Pet Waste Removal",
    description:
      "Our core service. We thoroughly clean your yard of all pet waste on a regular schedule that works for you.",
    icon: "trash-2" as const,
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Weekly, bi-weekly, or 3x/week options",
      "Complete yard coverage",
      "Waste bagged and removed",
      "Gate lock code access available",
    ],
  },
  {
    id: "wind-debris",
    title: "Wind-Debris Clean Up",
    description:
      "Complementary clean-up of wind-blown debris in your yard. Free for qualifying regular service clients.",
    icon: "wind" as const,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Free for qualifying clients",
      "Tumbleweeds and trash removal",
      "Keeps your yard tidy",
      "Included with regular service",
    ],
  },
  {
    id: "deodorizing",
    title: "Deodorizing",
    description:
      "Enzyme-based deodorizing treatment for smaller areas like patios, kennels, and artificial turf.",
    icon: "spray-can" as const,
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Enzyme-based formula",
      "Safe for pets and kids",
      "Patios, kennels, turf",
      "Eliminates odors at the source",
    ],
  },
] as const;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop",
  about:
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop",
  trust:
    "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1000&auto=format&fit=crop",
} as const;

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Hesperia",
    text: "Best service in the High Desert! My yard has never been cleaner. The team is reliable and thorough every single visit.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Mike & Lisa R.",
    location: "Apple Valley",
    text: "With three big dogs, our yard was a nightmare. PAWS HD changed everything. Worth every penny!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1558929996-da64ba858215?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Jennifer K.",
    location: "Victorville",
    text: "Professional, punctual, and affordable. I recommend PAWS HD to every pet owner I know. Five stars!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "David P.",
    location: "Oak Hills",
    text: "The wind debris cleanup alone is worth it. They go above and beyond. Consistently great service.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Amanda T.",
    location: "Spring Valley Lake",
    text: "I never have to worry about my yard anymore. The kids can play outside freely. Thank you PAWS HD!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Robert G.",
    location: "Adelanto",
    text: "Switched from another service and the difference is night and day. PAWS HD is thorough, on time, and the yard smells great.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Maria L.",
    location: "Victorville",
    text: "As a busy mom with two dogs, this service is a lifesaver. One less thing to worry about. Highly recommend!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Chris & Amy W.",
    location: "Hesperia",
    text: "We've been customers for over a year. Consistent, reliable, and friendly. Our backyard is always guest-ready now.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1477884213360-7e9d7dcc8f9b?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Tina R.",
    location: "Phelan",
    text: "The deodorizing add-on is amazing. Our patio area has never smelled better. Great value for the price.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop",
  },
] as const;

export const FAQS = [
  {
    question: "How will I be charged?",
    answer:
      "We offer convenient monthly billing. You'll receive an invoice at the beginning of each service period, and we accept all major credit cards through our secure client portal.",
  },
  {
    question: "How does your service work?",
    answer:
      "After you sign up, we'll schedule regular visits to your yard. Our team arrives on your scheduled day, thoroughly cleans your entire yard, and bags all waste for disposal. You don't even need to be home!",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on yard size, number of dogs, and service frequency. Contact us for a free, no-obligation quote tailored to your specific needs.",
  },
  {
    question: "Do you offer deodorizing services?",
    answer:
      "Yes! We offer enzyme-based deodorizing treatments for patios, kennels, artificial turf, and other smaller areas. Ask us about adding this to your regular service.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach us by phone at 760-701-2280, email at thescoop@pawshd.com, or through WhatsApp. You can also request a free quote through our website.",
  },
  {
    question: "How often do you come to my house?",
    answer:
      "We offer flexible scheduling — once, twice, or three times per week. We'll work with you to find the frequency that keeps your yard consistently clean.",
  },
] as const;
