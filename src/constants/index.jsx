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
  { label: "Features", href: "/features" },
  { label: "Workflow", href: "#" },
  { label: "Documentation", href: "https://docs.drugxpert.net/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "https://blog.drugxpert.net/" },
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

export const featuresPage = [
  {
    image: '/assets/drag-and-drop.jpg',
    icon: <BotMessageSquare  size={36}/>,
    text: "Drag-and-Drop Interface",
    description:
      "Speed up your research process with DrugXpert! Our intuitive drag-and-drop interface empowers you to build, analyze, and innovate like never before. Imagine a world where you can seamlessly create workflows, visualize data, and share insights without the hassle of complicated tools. With DrugXpert, we’ve eliminated the barriers that slow you down, allowing you to focus on what truly matters—your research. Whether you're collaborating with a team or working independently, our platform provides the flexibility and efficiency you need to accelerate your discoveries. Unleash your creative potential and watch your ideas come to life effortlessly. Join us on a journey to transform the way you conduct research and experience the future of innovation today!",
  },
  {
    image: '/assets/multi-plataform.jpg',
    icon: <Fingerprint  size={36}/>,
    text: "Multi-Platform Compatibility",
    description:
      "Your research never stops, and neither does DrugXpert! Our powerful tools are at your fingertips, accessible from any device, anytime, anywhere. Imagine being able to dive into your research, collaborate with colleagues, and analyze data on the go, whether you’re at your desk, in the lab, or traveling. With DrugXpert, you can break free from the constraints of traditional research environments. Seamlessly switch between devices and continue your work without missing a beat. Stay connected and productive no matter where your research journey takes you. Embrace the freedom to innovate and explore without limits with DrugXpert by your side!",
  },
  {
    image: '/assets/Built-in-Templates.jpg',
    icon: <ShieldHalf size={36}/>,
    text: "Built-in Templates",
    description:
      "From data collection to reporting, DrugXpert’s templates offer the essential structure you need to stay organized and productive! Our carefully designed templates streamline every aspect of your research process, ensuring that you have everything you need at your fingertips. Say goodbye to clutter and confusion; with DrugXpert, you can efficiently manage your data, maintain clear documentation, and generate comprehensive reports with ease. Each template is tailored to facilitate your workflow, allowing you to focus on your research objectives rather than getting bogged down in the details. Elevate your productivity and keep your projects on track, all while enjoying a seamless user experience. Let DrugXpert be your trusted partner in navigating the complexities of research, so you can achieve your goals with confidence!",
  },
  {
    image: '/assets/real-time.jpg',
    icon: <BatteryCharging size={36}/>,
    text: "Real-Time Preview",
    description:
      "Stay ahead of the curve with DrugXpert’s Real-Time Preview—experience drug data and research insights as they happen! Our cutting-edge feature allows you to monitor and analyze your research in real-time, giving you immediate access to crucial information that can shape your decisions. Imagine having the ability to track changes, observe trends, and gain insights the moment they occur, all in one streamlined platform. With DrugXpert, you’ll never miss a beat, empowering you to respond swiftly to new developments and make informed choices that drive your research forward. Embrace the future of research with confidence, knowing that you have the latest data at your fingertips. Transform the way you engage with your research and stay at the forefront of innovation with DrugXpert!",
  },
  {
    image: '/assets/colab-tools.jpg',
    icon: <PlugZap size={36}/>,
    text: "Collaboration Tools",
    description:
      "Break down barriers in drug research with DrugXpert's collaboration tools—designed to foster teamwork and amplify your results! In today's fast-paced research environment, collaboration is key to success. DrugXpert empowers you and your team to work together seamlessly, whether you’re in the same room or across the globe. Our innovative collaboration tools make it easy to share insights, exchange feedback, and collectively tackle challenges in real-time. With features that streamline communication and integrate your research efforts, you can harness the full potential of your team's diverse expertise. Say goodbye to silos and inefficiencies; with DrugXpert, you'll cultivate a culture of collaboration that drives meaningful progress and accelerates your research outcomes. Unite your team and elevate your drug research to new heights!",
  },
  {
    image: '/assets/dashboard-real-time.jpg',
    icon: <GlobeLock size={36}/>,
    text: "Analytics Dashboard",
    description:
      "Elevate your research with real-time data visualization! DrugXpert’s Analytics Dashboard provides you with the full picture, transforming complex data into clear, actionable insights. With our advanced visualization tools, you can effortlessly track trends, identify patterns, and gain a deeper understanding of your research outcomes. No more sifting through endless spreadsheets; our intuitive dashboard allows you to visualize your data in dynamic charts and graphs that highlight key metrics at a glance. Whether you’re presenting findings to stakeholders or making critical decisions, DrugXpert equips you with the insights you need, right when you need them. Experience the power of real-time analytics and take your research to new heights with DrugXpert!",
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
      "Normal Support", 
    ],
    notOn: [
      "Creating groups",
      "Multi-Platform Compatibility",
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
      "Dedicated Support",
      "Creating groups",
      "Multi-Platform Compatibility",  
    ],
    notOn: [
      "Event discounts",
      "Priority purchasing for events",
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
      "24/7 Support",
      "Creating private groups",
      "Multi-Platform Compatibility",
      "Event discounts",
      "Priority purchasing for events",
      "Access to exclusive Groups",
    ],
    notOn: [
      
    ],
  },
];

export const PartnersIndex = [
  {
    image: '/assets/Partners/PartnersPage/chEMBL.png',
    link: "https://www.ebi.ac.uk/chembl/",
    text: "ChEMBL",
    description:
      "ChEMBL is a manually curated database of bioactive molecules with drug-like properties."
      },
  {
    image: '/assets/Partners/PartnersPage/NCI.png',
    link: "https://www.nih.gov/about-nih/what-we-do/nih-almanac/national-cancer-institute-nci",
    text: "NIH National Cancer Institute",
    description:
      "The National Cancer Institute (NCI) is the federal government’s principal agency for cancer research and training" 
    },
  {
    image: '/assets/Partners/PartnersPage/EPA.png',
    link: "https://www.epa.gov/",
    text: "U.S. Environmental Protection Agency",
    description:
   "The U.S. Environmental Protection Agency is an independent agency of the United States government responsible for protecting human health and the environment." 
  },
  {
    image: '/assets/Partners/PartnersPage/HMP.png',
    link: "https://hmpdacc.org/hmp/",
    text: "Human Microbiome Project",
    description:
      "The Human Microbiome Project (HMP) was a research initiative launched by the United States National Institutes of Health (NIH) in 2007."
     },
  {
    image: '/assets/Partners/PartnersPage/NVIDIA.png',
    link: "https://www.nvidia.com/en-us/industries/healthcare-life-sciences/",
    text: "Nvidia Corporation",
    description:
      "Accelerated computing and AI are driving the next generation of medical devices and biomedical research."
 },
  {
    image: '/assets/Partners/PartnersPage/PSI.png',
    link: "https://pubmed.ncbi.nlm.nih.gov/19010965/",
    text: "Protein Structure Initiative",
    description:
      "The Protein Structure Initiative was a USA based project that aimed at accelerating discovery in structural genomics and contribute to understanding biological function."
 },
 {
  image: '/assets/Partners/PartnersPage/FDA.png',
  link: "https://www.fda.gov/",
  text: "Food and Drug Administration",
  description:
     "The Food and Drug Administration is a federal agency of the United States Department of Health and Human Services, one of the federal executive departments of the United States."
   },
{
  image: '/assets/Partners/PartnersPage/NIMH.png',
  link: "https://www.nimh.nih.gov/",
  text: "National Institute of Mental Health",
  description:
      "The National Institute of Mental Health (NIMH) is one of 27 institutes and centers that make up the National Institutes of Health (NIH)."
},
{
  image: '/assets/Partners/PartnersPage/PUBCHEM.png',
  link: "https://pubchem.ncbi.nlm.nih.gov/",
  text: "PubChem",
  description:
      "PubChem is the world's largest collection of freely accessible chemical information. Search chemicals by name, molecular formula, structure, and other identifiers."
},
];

export const featuredArticle = {
  title: 'Electron microscopy reveals how ruthenium reordering boosts hydrogen production from ammonia',
  image: 'public/assets/articles/amonia.jpg',
  description: 'Scanning transmission electron microscopy experiments have uncovered the structural changes a ruthenium catalyst undergoes that increase its activity during an ammonia cracking reaction. The findings could help researchers design better heterogenous catalysts in the future.',
  preview: 'A sneak peek of the featured article to capture the reader\'s attention and encourage them to learn more.',
  link: 'https://blog.drugxpert.net/'
};

export const articles = [
  {
    title: 'Metal alloy shows practically no thermal expansion over extremely large temperature interval',
    image: '/assets/articles/new-alloy-shows-practi.jpg',
    description: 'Most metals expand when their temperature rises. The Eiffel Tower, for example, is about 10 to 15 centimeters taller in summer than in winter due to its thermal expansion. However, this effect is extremely undesirable for many technical applications.',
    link: 'https://blog.drugxpert.net/'
  },
  {
    title: 'Australia Bans DeepSeek From Government Tech on Security Concern',
    image: '/assets/articles/deepseek.jpg',
    description: 'Australia has banned DeepSeek AI services from all government systems and devices, becoming one of the first countries to take direct action against a Chinese artificial intelligence startup that shook Silicon Valley and global markets this year.',
    link: 'https://blog.drugxpert.net/'
  },
  {
    title: 'Attention, Spoiled Software Engineers: Take a Lesson from Google’s Programming Language',
    image: '/assets/articles/Go Faux.png',
    description: 'The language Go hails from an era when programmers had smaller egos and fewer commercial ambitions. My generation of strivers has a lot to learn.',
    link: 'https://blog.drugxpert.net/'
  },
  {
    title: 'Meta says this is the make or break year for the metaverse',
    image: 'public/assets/articles/QuestHermano2.png',
    description: '  Meta CTO Andrew Bosworth is giving the metaverse a year to become a hit, according to an internal forum post reported by Business Insider. That time period will determine whether Reality Labs’ mixed reality efforts are “the work of visionaries or a legendary misadventure,” he writes.  ',
    link: 'https://blog.drugxpert.net/'
  },
  {
    title: 'Breakthrough in Antibiotic Resistance Research',
    image: 'public/assets/articles/via.placeholder.png',
    description: 'A breakthrough in the fight against antibiotic resistance has been made. Scientists have discovered a new class of antibiotics that can fight superbugs, offering new hope in the battle against drug-resistant infections.',
    link: 'https://blog.drugxpert.net/'
  },
  {
    title: 'Pharmaceutical Industry Focuses on Personalized Medicine',
    image: 'public/assets/articles/via.placeholder.png',
    description: 'The pharmaceutical industry is shifting towards personalized medicine, tailoring treatments to individual patients based on their genetic makeup. This shift is expected to improve treatment outcomes and reduce adverse drug reactions.',
    link: 'https://blog.drugxpert.net/'
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
  { href: "/features", text: "Features" },
  { href: "/supported-devices", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "https://blog.drugxpert.net/", text: "Blog" },
  { href: "/partners", text: "Partners" },
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