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
  },
  {
    id: "wind-debris",
    title: "Wind-Debris Clean Up",
    description:
      "Complementary clean-up of wind-blown debris in your yard. Free for qualifying regular service clients.",
    icon: "wind" as const,
  },
  {
    id: "deodorizing",
    title: "Deodorizing",
    description:
      "Enzyme-based deodorizing treatment for smaller areas like patios, kennels, and artificial turf.",
    icon: "spray-can" as const,
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
