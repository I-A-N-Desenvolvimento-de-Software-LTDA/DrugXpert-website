import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "/pricing" },
  { label: "Documentation", href: "https://docs.drugxpert.net/" },
  { label: "About", href: "/about" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Speed up your research process DrugXpert’s drag-and-drop interface lets you build, analyze, and innovate effortlessly!",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Your research doesn’t stop; neither does DrugXpert! Access our tools from any device, anytime, anywhere.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "From data collection to reporting, DrugXpert’s templates provide the structure you need to stay organized and productive!",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Stay ahead of the curve with DrugXpert’s Real-Time Preview—view drug data and research insights as they happen!",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Break down barriers in drug research: DrugXpert's collaboration tools foster teamwork and amplify results!",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Elevate your research with real-time data visualization DrugXpert’s Analytics Dashboard gives you the full picture!",
  },
];

export const checklistItems = [
  {
    title: "Uncover Insights, Elevate Discoveries",
    description:
      "Gain a clear vision of your research progress with DrugXpert's intuitive analytics dashboard. Visualize key metrics, track performance, and make data-driven decisions that fuel innovation.",
  },
  {
    title: "Collaborate, Create, Conquer",
    description:
      "Bring researchers together across the globe with seamless collaboration tools. Share ideas, insights, and breakthroughs in real-time, driving collective progress in drug discovery.",
  },
  {
    title: "Instant Insights, Immediate Impact",
    description:
      "Stay ahead with real-time previews of your research outcomes. Monitor changes and visualize results as they happen, empowering you to act faster and smarter.",
  },
  {
    title: "Simplify the Complex, Accelerate Your Workflow",
    description:
      "Experience the ease of use with DrugXpert's drag-and-drop interface. Whether you're analyzing datasets or building reports, streamline your process and focus on what matters most—discovery.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private Research",
      "1 Gb of Research Storage",
      "Analytics Dashboard",
      "10 API Calls",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private Research",
      "5 Gb of Research Storage",
      "Analytics Dashboard (Advance)",
      "50 API Calls",
    ],
  },
  {
    title: "Enterprise",
    price: "$30",
    features: [
      "Private Research",
      "Unlimited of Research Storage",
      "High Performance Network",
      "100 API Calls",
    ],
  },
];

export const subscribeOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private Research",
      "1 Gb of Research Storage",
      "Analytics Dashboard",
      "10 API Calls",
      "10 API Calls",
      "10 API Calls",
      "10 API Calls",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private Research",
      "5 Gb of Research Storage",
      "Analytics Dashboard (Advance)",
      "50 API Calls",
      "50 API Calls",
      "50 API Calls",
      "50 API Calls",
    ],
  },
  {
    title: "Enterprise",
    price: "$30",
    features: [
      "Private Research",
      "Unlimited of Research Storage",
      "High Performance Network",
      "100 API Calls",
      "100 API Calls",
      "100 API Calls",
      "100 API Calls",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://app.drugxpert.net/auth-page/signup", text: "Getting Started" },
  { href: "https://docs.drugxpert.net/", text: "Documentation" },
  { href: "/about", text: "About" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
  
];

export const companyLinks = [
  { href: "/terms", text: "Terms of Service" },  
  { href: "/privacy", text: "Privacy Policy" },
  { href: "/refund", text: "Return & Refund Policy" },
  { href: "#", text: "Cookie Policy" },
  { href: "#", text: "Acceptable Use Policy" },
];
