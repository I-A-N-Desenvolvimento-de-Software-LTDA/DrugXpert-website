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

export const userTestimonials = [
  {
    title: "Accelerating Scientific Discoveries! ⚡️",
    text: "We have always faced challenges in analyzing new substances, but since we started using this AI, our productivity has skyrocketed. With detailed insights and accurate simulations, we have managed to reduce research time by up to 40%!",
    user: "Dr. Lucas Menezes",
    position: "Biotechnology Researcher 🧪"
  },
  {
    title: "A Revolution for Students and Laboratories 🎓🧬",
    text: "As a Pharmacy student, I needed a reliable tool to explore chemical interactions and mechanisms of action for new molecules. The AI platform provided me with quick and precise answers, transforming the way I study and develop my projects.",
    user: "Carla Antunes",
    position: "Pharmacy Student 💊"
  },
  {
    title: "Testing and Simulations in Record Time ⏳🧑‍🔬",
    text: "Our laboratory has always struggled with lengthy validation processes for new substances. With this AI, we optimized preclinical tests and predicted adverse effects much more efficiently. A game-changer for the pharmaceutical industry!",
    user: "Dr. Henrique Vasconcellos",
    position: "R&D Director at a BioTech 🏥"
  },
  {
    title: "Safety and Precision for New Discoveries 🔍✅",
    text: "The complexity of scientific research requires advanced tools, and this AI exceeded our expectations. We were able to explore new treatment possibilities with greater safety and precision, reducing risks and increasing innovation.",
    user: "Dr. Beatriz Oliveira",
    position: "Clinical Research Specialist 🏆"
  },
  {
    title: "Artificial Intelligence Transforming Medicine 🏥🤖",
    text: "Working with innovation requires cutting-edge tools. With this AI, we identified new therapeutic combinations with high precision, accelerating our drug development processes.",
    user: "Dr. Fernando Ribeiro",
    position: "Translational Medicine Researcher 💉"
  },
  {
    title: "Essential Support for New Research 📚🔬",
    text: "The platform has become a key component in my PhD research. Automated data analysis and predictive models allowed me to focus on the strategic part of my research, saving months of manual work.",
    user: "Mariana Costa",
    position: "PhD Candidate in Biomedical Sciences 🎓"
  }
];

export const partnerTestimonials = [
  {
    title: "Optimizing Drug Development Pipelines 🚀",
    text: "Integrating this AI into our workflow has significantly improved our efficiency in screening and developing new drugs. The predictive models have saved us both time and resources.",
    user: "Emma Collins",
    position: "CEO, PharmaGenix 🏥"
  },
  {
    title: "Transforming Biotechnology Research 🔬",
    text: "With this AI, our biotech company has accelerated molecular simulations and compound analysis, allowing us to make data-driven decisions faster than ever before.",
    user: "Dr. Robert Hayes",
    position: "Lead Scientist, BioInnovate 🧪"
  },
  {
    title: "Enhancing Safety in Clinical Trials ✅",
    text: "Ensuring patient safety is our top priority. The AI's advanced risk assessment tools have helped us mitigate potential adverse effects early in the process.",
    user: "Sophia Martinez",
    position: "Clinical Trials Director, MedSafe 🌍"
  },
  {
    title: "Data-Driven Innovation for the Pharmaceutical Industry 📊",
    text: "The AI-powered insights have given us a competitive edge in pharmaceutical R&D, providing deep analysis and optimization strategies for drug formulations.",
    user: "James Carter",
    position: "Head of Research, NovaPharm 💊"
  },
  {
    title: "Cutting-Edge AI for Vaccine Research 💉",
    text: "The AI-driven analysis tools have played a critical role in optimizing our vaccine development process, helping us bring innovative solutions to market faster.",
    user: "Dr. Olivia Bennett",
    position: "Chief Scientist, VaxTech 🌡️"
  },
  {
    title: "Streamlining Laboratory Workflows 🔄",
    text: "Our lab has benefited immensely from the automation and predictive modeling capabilities of this AI, making experiments more efficient and cost-effective.",
    user: "Daniel Foster",
    position: "Laboratory Manager, GenTech Labs 🏗️"
  }
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
    emoji: "🆓",
    perfectFor: ["Students", "Research beginners", "Individual projects", "Academic exploration"],
    features: [
      "Private Research Dashboard",
      "1 GB of research storage",
      "Basic Analytics Dashboard",
      "10 API calls/month",
      "Standard support (email)",
      "Group creation (up to 3 groups)",
      "Multi-platform compatibility",
      "Basic data visualization",
      "Monthly research reports",
      "Community access",
      "Basic search functionality"
    ],
    notOn: [
      "Advanced Analytics Dashboard",
      "Priority email support",
      "Event discounts",
      "Priority event registration",
      "Custom report generation"
    ],
  },
  {
    title: "Pro",
    price: "$10",
    emoji: "🌟",
    perfectFor: ["Professional researchers", "Small research teams", "Pharmaceutical consultants", "Academic departments"],
    features: [
      "5 GB of research storage",
      "Advanced Analytics Dashboard",
      "50 API calls/month",
      "Priority email support",
      "Event discounts (up to 30% off)",
      "Priority event registration",
      "Advanced data visualization",
      "Custom report generation",
      "Research collaboration tools",
      "Advanced search filters",
      "Export data in multiple formats",
      "Integration with common research tools",
      "Automated backup system",
      "Research timeline tracking"
    ],
    notOn: [
      "Unlimited research storage",
      "24/7 priority support",
      "Unlimited private groups",
      "Custom API integration",
      "Dedicated account manager"
    ],
  },
  {
    title: "Enterprise",
    price: "$30",
    emoji: "🚀",
    perfectFor: ["Large organizations", "Research institutions", "Pharmaceutical companies", "Clinical research teams"],
    features: [
      "Unlimited research storage",
      "High-performance dedicated servers",
      "100 API calls/month",
      "24/7 priority support",
      "Unlimited private groups",
      "Access to exclusive research networks",
      "Custom API integration",
      "Advanced security features",
      "Dedicated account manager",
      "Custom analytics solutions",
      "Team management tools",
      "Compliance reporting",
      "Audit logs",
      "Priority feature updates",
      "Custom training sessions",
      "Enterprise-grade encryption"
    ],
    notOn: [],
  },
];

export const paymentMethods = [
  "Major credit cards (Visa, Mastercard, American Express)",
  "Pix instant payment",
  "Bank slip (Boleto)",
  "Digital wallets (PayPal, Google Pay, Apple Pay)"
];

export const securityFeatures = [
  "SSL encrypted transactions",
  "GDPR compliant",
  "HIPAA compliant",
  "Regular security audits",
  "Data backup guarantee"
];

export const planComparison = [
  { feature: "Storage", free: "1 GB", pro: "5 GB", enterprise: "Unlimited" },
  { feature: "API Calls", free: "10/month", pro: "50/month", enterprise: "100/month" },
  { feature: "Support", free: "Standard", pro: "Priority", enterprise: "24/7" },
  { feature: "Analytics", free: "Basic", pro: "Advanced", enterprise: "Custom" },
  { feature: "Groups", free: "Up to 3", pro: "Up to 10", enterprise: "Unlimited" }
];

export const subscriptionFAQs = [
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes take effect on your next billing cycle."
  },
  {
    question: "Is there a contract commitment?",
    answer: "No, all plans are month-to-month with no long-term commitment required."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee for paid plans."
  }
];

export const enterpriseSolutions = [
  "Custom feature development",
  "Dedicated hosting options",
  "Volume licensing",
  "Custom API limits",
  "Specialized training programs"
];

export const PartnersIndex = [
  {
    image: '/assets/Partners/partnersPage/chEMBL.png',
    link: "https://www.ebi.ac.uk/chembl/",
    text: "ChEMBL",
    description:
      "ChEMBL is a manually curated database of bioactive molecules with drug-like properties.",
    category: "Research Database"
  },
  {
    image: '/assets/Partners/partnersPage/NCI.png',
    link: "https://www.nih.gov/about-nih/what-we-do/nih-almanac/national-cancer-institute-nci",
    text: "NIH National Cancer Institute",
    description:
      "The National Cancer Institute (NCI) is the federal government's principal agency for cancer research and training",
    category: "Research Institute"
  },
  {
    image: '/assets/Partners/partnersPage/EPA.png',
    link: "https://www.epa.gov/",
    text: "U.S. Environmental Protection Agency",
    description:
   "The U.S. Environmental Protection Agency is an independent agency of the United States government responsible for protecting human health and the environment.",
   category: "Government Agency"
  },
  {
    image: '/assets/Partners/partnersPage/HMP.png',
    link: "https://hmpdacc.org/hmp/",
    text: "Human Microbiome Project",
    description:
      "The Human Microbiome Project (HMP) was a research initiative launched by the United States National Institutes of Health (NIH) in 2007.",
    category: "Research Initiative"
  },
  {
    image: '/assets/Partners/partnersPage/NVIDIA.png',
    link: "https://www.nvidia.com/en-us/industries/healthcare-life-sciences/",
    text: "Nvidia Corporation",
    description:
      "Accelerated computing and AI are driving the next generation of medical devices and biomedical research.",
    category: "Technology"
  },
  {
    image: '/assets/Partners/partnersPage/PSI.png',
    link: "https://pubmed.ncbi.nlm.nih.gov/19010965/",
    text: "Protein Structure Initiative",
    description:
      "The Protein Structure Initiative was a USA based project that aimed at accelerating discovery in structural genomics and contribute to understanding biological function.",
    category: "Research Initiative"
  },
  {
    image: '/assets/Partners/partnersPage/FDA.png',
    link: "https://www.fda.gov/",
    text: "Food and Drug Administration",
    description:
      "The Food and Drug Administration is a federal agency of the United States Department of Health and Human Services, one of the federal executive departments of the United States.",
    category: "Government Agency"
  },
  {
    image: '/assets/Partners/partnersPage/NIMH.png',
    link: "https://www.nimh.nih.gov/",
    text: "National Institute of Mental Health",
    description:
      "The National Institute of Mental Health (NIMH) is one of 27 institutes and centers that make up the National Institutes of Health (NIH).",
    category: "Research Institute"
  },
  {
    image: '/assets/Partners/partnersPage/PUBCHEM.png',
    link: "https://pubchem.ncbi.nlm.nih.gov/",
    text: "PubChem",
    description:
      "PubChem is the world's largest collection of freely accessible chemical information. Search chemicals by name, molecular formula, structure, and other identifiers.",
    category: "Research Database"
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
  { href: "/workflow", text: "Workflow" },
  { href: "/supported-devices", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "release-notes", text: "Release Notes" },
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

export const timelineItems = [
  {
    quarter: 'Q1 2024',
    phase: 'Phase 1',
    title: 'Planning',
    icon: '📌',
    items: ['Architecture', 'MVP']
  },
  {
    quarter: 'Q2 2024',
    phase: 'Phase 2',
    title: 'Infrastructure',
    icon: '🚀',
    items: ['API', 'Database']
  },
  {
    quarter: 'Q3 2024',
    phase: 'Phase 3',
    title: 'Community',
    icon: '💬',
    items: ['Forum', 'Integration']
  },
  {
    quarter: 'Q4 2024',
    phase: 'Phase 4',
    title: 'AI & Chatbot',
    icon: '🧠',
    items: ['Virtual Assistant', 'Machine Learning']
  },
  {
    quarter: 'Q1 2025',
    phase: 'Phase 5',
    title: 'Mobile App',
    icon: '📱',
    items: ['Design', 'Development']
  },
  {
    quarter: 'Q2 2025',
    phase: 'Phase 6',
    title: 'Launch',
    icon: '📢',
    items: ['Release Notes', 'Updates']
  }
];

export const detailedRoadmapItems = [
  {
    phase: "Phase 1",
    title: "Planning and Architecture",
    duration: "1-2 months",
    icon: "📌",
    items: [
      {
        title: "Analyze current version weaknesses",
        subItems: [
          "Define new architecture and technologies",
          "Choose framework and structure for backend and frontend",
          "Define database and scalability strategies",
          "Structure authentication and security"
        ]
      },
      {
        title: "Create MVP before complete migration",
        subItems: ["Prototype essential features"]
      }
    ]
  },
  {
    phase: "Phase 2",
    title: "Infrastructure and API",
    duration: "2-3 months",
    icon: "🚀",
    items: [
      {
        title: "Create API",
        subItems: [
          "Define exposed data and functionalities",
          "Choose architecture (REST or GraphQL)",
          "Implement authentication and rate limiting",
          "Create documentation for easy use"
        ]
      },
      {
        title: "",
        subItems: [
          "Integrate platform login with other features",
          "Configure database (MongoDB) and optimize queries"
        ]
      }
    ]
  },
  {
    phase: "Phase 3",
    title: "Forum and Community",
    duration: "2 months",
    icon: "💬",
    items: [
      {
        title: "",
        subItems: [
          "Create platform forum",
          "Choose technology (Discourse, NodeBB, custom)",
          "Integrate with platform login",
          "Configure categories, permissions and moderation",
          "Test and validate with initial users"
        ]
      }
    ]
  },
  {
    phase: "Phase 4",
    title: "AI and Chatbot",
    duration: "3 months",
    icon: "🧠",
    items: [
      {
        title: "Start AI development",
        subItems: [
          "Define objectives (data analysis, virtual assistant)",
          "Choose frameworks and models (TensorFlow, PyTorch, OpenAI)",
          "Create initial prototype and test with small datasets"
        ]
      },
      {
        title: "Create or configure AI chatbot for DrugXpert",
        subItems: [
          "Choose service (COZE, Dialogflow, Rasa, GPT)",
          "Train with FAQs and use cases",
          "Integrate with platform and test with users"
        ]
      }
    ]
  },
  {
    phase: "Phase 5",
    title: "Mobile Application",
    duration: "4 months",
    icon: "📱",
    items: [
      {
        title: "Create mobile app design",
        subItems: [
          "Define essential features",
          "Create wireframes and prototypes (Figma, Adobe XD)",
          "Validate with users before development"
        ]
      },
      {
        title: "Configure mobile application",
        subItems: [
          "Choose technology (React Native, Flutter, Swift/Kotlin)",
          "Develop MVP for initial tests",
          "Publish on stores (Google Play and App Store)"
        ]
      }
    ]
  },
  {
    phase: "Phase 6",
    title: "Communication and Continuous Launch",
    duration: "Continuous",
    icon: "📢",
    items: [
      {
        title: "",
        subItems: [
          "Create release notes page",
          "Define standard format for updates",
          "Integrate page with DrugXpert website",
          "Regular updates with improvements"
        ]
      }
    ]
  }
];

export const versionHistory = [
  {
    version: "1.0.0",
    date: "January 2024",
    icon: "/assets/release-notes/update.png",
    status: {
      text: "✨ Stable version available for all users",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    features: [
      {
        title: "Initial DrugXpert Release",
      },
      {
        title: "Medication Search System",
        subItems: [
          "Search by commercial name and active ingredient",
          "Advanced category filters",
          "Automatic search suggestions"
        ]
      },
      {
        title: "Responsive interface with new design",
        subItems: [
          "Support for all devices",
          "Dark mode implemented"
        ]
      },
      {
        title: "Initial database with over 10,000 medications",
      }
    ]
  },
  {
    version: "0.9.0",
    type: "(Beta)",
    date: "December 2023",
    icon: "/assets/release-notes/config.png",
    status: {
      text: "🔒 Closed Beta - Limited access to testers",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700"
    },
    features: [
      {
        title: "Advanced System Settings",
        subItems: [
          "Interface customization",
          "Notification preferences",
          "Privacy settings"
        ]
      },
      {
        title: "Initial Search System Implementation",
        subItems: [
          "Performance optimization",
          "Results caching"
        ]
      },
      {
        title: "Fixed 15+ bugs reported by testers"
      },
      {
        title: "Significant performance improvements"
      }
    ]
  },
  {
    version: "0.8.0",
    type: "(Alpha)",
    date: "October 2023",
    icon: "/assets/release-notes/security.png",
    status: {
      text: "🔒 Internal Alpha - Development only",
      bgColor: "bg-red-50",
      textColor: "text-red-700"
    },
    features: [
      {
        title: "Initial Security Implementation",
        subItems: [
          "Two-factor authentication",
          "Sensitive data encryption",
          "CSRF attack protection"
        ]
      },
      {
        title: "Basic Interface Implementation",
        subItems: [
          "Main UI components",
          "Basic routing system"
        ]
      },
      {
        title: "First Integration Tests",
        subItems: [
          "Automated testing",
          "Error monitoring"
        ]
      }
    ]
  }
];