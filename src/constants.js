// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
import {
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaRocket,
  FaLeaf,
} from "react-icons/fa";

// logo
import logo from "./assets/logo/logo.png";

export { logo };

// client details
export const clientDetails = {
  whatsapplink:
    "https://api.whatsapp.com/send/?phone=9561140911&text&type=phone_number&app_absent=0",
  phone: "+91-9561140911",
  email: "info@invedasolutions.com",
  address: `porvorim,Goa 403521`,
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  // {
  //   id: 2,
  //   title: "Industries",
  //   link: "/industries",
  // },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "In-Depth Consultation",
    description: "Understand your needs, discuss goals.",
    img: process1,
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Create roadmap, define KPIs, set timeline.",
    img: process2,
  },
  {
    id: 3,
    title: "Design and Development",
    description: "Design visually stunning, develop functional website",
    img: process3,
  },
  {
    id: 4,
    title: "Rigorous Testing",
    description: "Ensure optimal performance, compatibility, security",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.jpg"),
    description:
      "We create powerful e-commerce websites that enhance customer engagement, streamline business operations, and drive sustainable revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.jpg"),
    description:
      "Developing dynamic and engaging social media websites designed to foster community interaction, boost brand awareness, and encourage user loyalty.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.jpg"),
    description:
      "Crafting high-conversion landing pages that grab attention and drive meaningful action, tailored to showcase your brand and optimize results.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.jpg"),
    description:
      "Building bespoke websites designed specifically for your business, combining innovative design and seamless functionality for a remarkable online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.jpg"),
    description:
      "We create exceptional iOS apps using Swift and Objective-C, delivering seamless performance, modern design, and enhanced user engagement.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.jpg"),
    description:
      "Our Android apps, crafted with Java and Kotlin, are tailored to your business vision, offering robust features and outstanding user experiences.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.jpg"),
    description:
      "Leverage Flutter’s single codebase to build responsive apps for iOS and Android, ensuring efficiency without compromising on quality.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.jpg"),
    description:
      "Our hybrid apps deliver seamless functionality across platforms, combining native performance with versatile design for an enhanced user experience.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img1: require("./assets/services-details/blockchain-1.jpg"),
    img2: require("./assets/services-details/blockchain-2.jpg"),
    title: "Blockchain Development",
    smallPara:
      "Blockchain technology is revolutionizing industries by providing decentralized, secure, and transparent solutions for data management and transactions. Blockchain development involves creating distributed ledger systems that ensure data integrity and trust.\n\nFrom cryptocurrencies to smart contracts, blockchain applications are transforming finance, supply chain, healthcare, and more, offering innovative solutions for modern challenges.",
    keyBenefits: [
      "Decentralized and tamper-proof systems.",
      "Enhanced security and data integrity.",
      "Transparent and auditable transactions.",
      "Smart contract automation for efficiency.",
    ],
    detailsPageContent: {
      firstPara: ` Blockchain technology is reshaping industries by enabling secure, decentralized, and transparent systems. From cryptocurrencies to supply chain management, blockchain applications are driving innovation and solving complex challenges.
          \n
          Our blockchain development services focus on creating robust, scalable, and secure solutions tailored to your business needs. We specialize in developing smart contracts, decentralized applications (dApps), and custom blockchain networks.,
      servicesSection: We offer end-to-end blockchain development, including consulting, design, development, and deployment. Our expertise spans public, private, and hybrid blockchain solutions, ensuring we can meet your specific requirements.
          \n
          Our services include blockchain architecture design, smart contract development, and integration with existing systems. We focus on delivering secure, efficient, and scalable blockchain solutions that drive innovation and create value for your business.,
   `,
    },
  },
  {
    id: 2,
    img1: require("./assets/services-details/app-development1.jpg"),
    img2: require("./assets/services-details/app-development2.jpg"),
    title: "App Development",
    smallPara:
      "Mobile applications have become an integral part of our daily lives, transforming the way we communicate, consume information, and conduct business. The development of mobile apps requires a unique set of skills and considerations, as compared to website development.\n\nOne of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.",
    keyBenefits: [
      "Cross-platform compatibility for iOS and Android.",
      "User-centric design for better engagement.",
      "Robust performance and offline capabilities.",
      "Advanced security features for data protection.",
    ],
    detailsPageContent: {
      firstPara: ` Mobile applications have revolutionized the way we interact with technology, providing seamless access to services, information, and entertainment on the go. Developing a successful mobile app requires a deep understanding of user behavior, platform-specific guidelines, and performance optimization.
          \n
          Our app development process involves creating native and cross-platform apps that deliver exceptional user experiences. We focus on intuitive design, smooth navigation, and robust functionality to ensure your app stands out in the competitive market.,
      servicesSection: Our app development services cover the entire lifecycle, from concept to deployment and maintenance. We specialize in building apps for iOS and Android platforms, utilizing technologies like Swift, Kotlin, React Native, and Flutter. Our team ensures your app is optimized for performance, security, and scalability, providing a seamless experience for your users.
          \n
          Whether you need a consumer-facing app or an enterprise solution, we tailor our approach to meet your specific requirements, delivering high-quality apps that drive engagement and achieve your business goals.,
   `,
    },
  },
  {
    id: 3,
    img1: require("./assets/services-details/ai-1.jpg"),
    img2: require("./assets/services-details/ai-2.jpg"),
    title: "Artificial Intelligence Development",
    smallPara:
      "Artificial Intelligence (AI) is transforming industries by enabling machines to perform tasks that traditionally required human intelligence. AI development involves creating systems that can learn, reason, and make decisions, driving innovation across various sectors.\n\nFrom natural language processing to computer vision, AI applications are enhancing efficiency, improving decision-making, and creating new opportunities for businesses worldwide.",
    keyBenefits: [
      "Automation of complex tasks and processes.",
      "Enhanced decision-making with predictive analytics.",
      "Improved customer experiences through personalization.",
      "Innovative solutions for industry-specific challenges.",
    ],
    detailsPageContent: {
      firstPara: `Artificial Intelligence (AI) is revolutionizing industries by enabling machines to perform tasks that require human-like intelligence. From healthcare to finance, AI applications are driving innovation and creating new opportunities for businesses.
          \n
          Our AI development services focus on creating intelligent systems that can learn, reason, and make decisions. We specialize in developing AI solutions tailored to your business needs, ensuring they deliver measurable results.,
      servicesSection: We offer end-to-end AI development, including consulting, design, development, and deployment. Our expertise spans machine learning, natural language processing, computer vision, and robotics, ensuring we can meet your specific requirements.
          \n
          Our services include AI strategy development, model training, and integration with existing systems. We focus on delivering scalable, efficient, and innovative AI solutions that drive growth and create value for your business.,
    `,
    },
  },
  {
    id: 4,
    img1: require("./assets/services-details/ml-1.jpg"),
    img2: require("./assets/services-details/ml-2.jpg"),
    title: "Machine Learning",
    smallPara:
      "Machine Learning (ML) is a subset of AI that focuses on enabling systems to learn from data and improve over time without explicit programming. ML development involves creating algorithms and models that can analyze data, identify patterns, and make predictions.\n\nFrom recommendation systems to fraud detection, machine learning applications are transforming industries by providing data-driven insights and automating complex processes.",
    keyBenefits: [
      "Data-driven insights for informed decision-making.",
      "Automation of repetitive and complex tasks.",
      "Improved accuracy and efficiency through predictive models.",
      "Scalable solutions for diverse business needs.",
    ],
    detailsPageContent: {
      firstPara: `Machine Learning (ML) is a powerful tool that enables systems to learn from data and improve over time. From predictive analytics to automation, ML applications are transforming industries and creating new opportunities for businesses.
          \n
          Our machine learning services focus on developing algorithms and models that can analyze data, identify patterns, and make predictions. We specialize in creating ML solutions tailored to your business needs, ensuring they deliver measurable results.,
      servicesSection: We offer end-to-end machine learning development, including data collection, model training, and deployment. Our expertise spans supervised, unsupervised, and reinforcement learning, ensuring we can meet your specific requirements.
          \n
          Our services include ML strategy development, data preprocessing, and model optimization. We focus on delivering scalable, efficient, and innovative ML solutions that drive growth and create value for your business.,
    `,
    },
  },
  {
    id: 5,
    img1: require("./assets/services-details/web-development1.jpg"),
    img2: require("./assets/services-details/web-development2.jpg"),
    title: "Web Development",
    smallPara:
      "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs.\n\nAt the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with.",
    keyBenefits: [
      "Responsive and user-friendly design.",
      "Custom-built solutions tailored to your business needs.",
      "Secure and scalable architecture.",
      "Seamless integration with third-party tools and APIs.",
    ],
    detailsPageContent: {
      firstPara: `In the modern digital landscape, web applications play a crucial role
          in our daily activities, work, and communication. From e-commerce to
          educational platforms, these applications empower businesses and
          individuals alike. Building a successful web application requires
          creativity, technical expertise, and a deep understanding of user
          needs.
          \n
          Web development is a blend of front-end and back-end technologies. The
          front-end focuses on user-facing elements, delivering engaging and
          intuitive interfaces that captivate and inform.,
      servicesSection: Whether you need a sleek landing page or a complex e-commerce
          platform, we offer comprehensive web development solutions. Our
          expertise spans full-stack development, ensuring both robust back-end
          functionality and intuitive front-end interfaces. Our websites don’t
          just look great—they perform flawlessly, driving conversions and
          delivering measurable results. \n
          On the back-end, we manage the critical logic, data handling, and
          security that power your application. Using technologies like Python,
          PHP, Ruby, and Java, along with databases such as MySQL, PostgreSQL,
          and MongoDB, we build efficient, scalable solutions that ensure
          reliability and performance.,
    `,
    },
  },
  {
    id: 6,
    img1: require("./assets/services-details/ui-ux-1.jpg"),
    img2: require("./assets/services-details/ui-ux-2.jpg"),
    title: "UI/UX Design",
    smallPara:
      "UI/UX design is the process of creating user interfaces and experiences that are intuitive, engaging, and visually appealing. It involves understanding user behavior, designing wireframes and prototypes, and testing designs to ensure they meet user needs.\n\nEffective UI/UX design is critical for creating digital products that are easy to use, aesthetically pleasing, and aligned with business goals, ultimately driving user satisfaction and loyalty.",
    keyBenefits: [
      "Intuitive and user-friendly interfaces.",
      "Engaging and visually appealing designs.",
      "Improved user satisfaction and retention.",
      "Alignment with business goals and user needs.",
    ],
    detailsPageContent: {
      firstPara: `UI/UX design is a critical component of creating digital products that are intuitive, engaging, and visually appealing. From websites to mobile apps, effective design ensures users can easily navigate and interact with your product.
          \n
          Our UI/UX design services focus on understanding user behavior, creating wireframes and prototypes, and testing designs to ensure they meet user needs. We specialize in delivering designs that are both functional and aesthetically pleasing.,
      servicesSection: We offer end-to-end UI/UX design services, including user research, wireframing, prototyping, and usability testing. Our expertise spans web and mobile design, ensuring we can create solutions tailored to your specific requirements.
          \n
          Our services include design strategy development, visual design, and interaction design. We focus on delivering designs that enhance user satisfaction, drive engagement, and align with your business goals.,
    `,
    },
  },
  {
    id: 7,
    img1: require("./assets/services-details/rpa-1.jpg"),
    img2: require("./assets/services-details/rpa-2.jpg"),
    title: "Robotic Process Automation",
    smallPara:
      "Robotic Process Automation (RPA) is a technology that uses software robots to automate repetitive and rule-based tasks, improving efficiency and reducing human error. RPA solutions are transforming industries by streamlining workflows and enabling employees to focus on higher-value tasks.\n\nFrom data entry to customer service, RPA applications are enhancing productivity, reducing costs, and driving operational excellence across various sectors.",
    keyBenefits: [
      "Automation of repetitive and rule-based tasks.",
      "Improved efficiency and reduced human error.",
      "Cost savings and enhanced productivity.",
      "Scalable solutions for diverse business needs.",
    ],
    detailsPageContent: {
      firstPara: `Robotic Process Automation (RPA) is revolutionizing industries by automating repetitive and rule-based tasks, enabling businesses to improve efficiency and reduce costs. From data entry to customer service, RPA solutions are transforming workflows and driving operational excellence.
          \n
          Our RPA services focus on creating software robots that can automate tasks, streamline processes, and improve accuracy. We specialize in developing RPA solutions tailored to your business needs, ensuring they deliver measurable results.,
      servicesSection: We offer end-to-end RPA development, including process analysis, bot development, and deployment. Our expertise spans various RPA platforms, ensuring we can create solutions that meet your specific requirements.
          \n
          Our services include RPA strategy development, process automation, and integration with existing systems. We focus on delivering scalable, efficient, and innovative RPA solutions that drive growth and create value for your business.,
    `,
    },
  },
];

// trusted clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Aarav Kapoor",
    title: "Founder of TechSphere Innovations",
    description:
      "INVEDA SOLUTIONS LLP delivered an exceptional blockchain solution that revolutionized our operations. Their expertise in blockchain development is unmatched!",
  },
  {
    id: 2,
    img: "",
    name: "Sanya Mehta",
    title: "CTO of GreenLink Energy Solutions",
    description:
      "The mobile app developed by INVEDA SOLUTIONS LLP transformed our business. Their app development team is highly skilled and delivered a seamless user experience.",
  },
  {
    id: 3,
    img: "",
    name: "Rahul Verma",
    title: "Director of OmniTrade Logistics",
    description:
      "INVEDA SOLUTIONS LLP implemented an AI-driven system that optimized our logistics operations. Their artificial intelligence development expertise is truly impressive.",
  },
  {
    id: 4,
    img: "",
    name: "Dr. Ananya Gupta",
    title: "CEO of MedEase Technologies",
    description:
      "The machine learning models developed by INVEDA SOLUTIONS LLP have significantly improved our data analysis capabilities. Their work is both innovative and impactful.",
  },
  {
    id: 5,
    img: "",
    name: "Neha Sharma",
    title: "Head of Operations at FinTech Solutions",
    description:
      "INVEDA SOLUTIONS LLP created a stunning and highly functional website for us. Their web development team is professional, creative, and detail-oriented.",
  },
  {
    id: 6,
    img: "",
    name: "Vikram Singh",
    title: "Product Manager at HealthTech Innovations",
    description:
      "The UI/UX design by INVEDA SOLUTIONS LLP elevated our platform to a whole new level. Their designs are intuitive, user-friendly, and visually appealing.",
  },
  {
    id: 7,
    img: "",
    name: "Priya Patel",
    title: "COO of AutoTech Systems",
    description:
      "INVEDA SOLUTIONS LLP implemented RPA solutions that streamlined our workflows and boosted efficiency. Their robotic process automation expertise is top-notch.",
  },
];
// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: require("./assets/industries/Fintech.webp"),
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: require("./assets/industries/Insurance.webp"),
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: require("./assets/industries/Hospitality.webp"),
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "On Demand",
    img: require("./assets/industries/On Demand.webp"),
    desc: "Empowering on-demand platforms with intelligent matchmaking, real-time tracking, and user-centric analytics.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: require("./assets/industries/Food & Restaurant.webp"),
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("./assets/industries/Education.webp"),
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11,
    title: "Game",
    img: require("./assets/industries/Game.webp"),
    desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const whyChooseUsData = [
  {
    icon: <FaUsers className="w-12 h-12 mb-4 text-blue-600" />,
    title: "Client-Focused Solutions",
    description:
      "We put our clients at the center of everything we do, delivering tailored solutions that drive impactful and long-lasting results.",
  },
  {
    icon: <FaLightbulb className="w-12 h-12 mb-4 text-blue-600" />,
    title: "Expertise in Emerging Technologies",
    description:
      "Our team specializes in blockchain, AI, machine learning, and more, ensuring your business benefits from cutting-edge solutions.",
  },
  {
    icon: <FaHandshake className="w-12 h-12 mb-4 text-blue-600" />,
    title: "Collaboration and Transparency",
    description:
      "We work closely with you, ensuring open communication and clear expectations throughout the project.",
  },
  {
    icon: <FaChartLine className="w-12 h-12 mb-4 text-blue-600" />,
    title: "A Proven Track Record",
    description:
      "We’ve delivered solutions to businesses across industries, consistently exceeding expectations and driving measurable results.",
  },
];

export const approachData = [
  {
    icon: <FaCogs className="w-8 h-8 mb-4 text-blue-600" />,
    title: "Discovery and Strategy",
    description:
      "We start by understanding your business, goals, and challenges to define a strategy that aligns with your objectives.",
  },
  {
    icon: <FaRocket className="w-8 h-8 mb-4 text-blue-600" />,
    title: "Design and Development",
    description:
      "Our team combines creativity and technical expertise to deliver functional, user-friendly, and scalable solutions.",
  },
  {
    icon: <FaChartLine className="w-8 h-8 mb-4 text-blue-600" />,
    title: "Testing and Quality Assurance",
    description:
      "We rigorously test every aspect of the solution to ensure it’s secure, reliable, and ready for the real world.",
  },
  {
    icon: <FaLeaf className="w-8 h-8 mb-4 text-blue-600" />,
    title: "Launch and Support",
    description:
      "We provide ongoing support to ensure your solution continues to perform optimally long after the launch.",
  },
];

export const valuesData = [
  {
    icon: <FaHandshake className="w-6 h-6 mr-2" />,
    title: "Integrity",
    description: "We are transparent, honest, and ethical in everything we do.",
  },
  {
    icon: <FaChartLine className="w-6 h-6 mr-2" />,
    title: "Excellence",
    description:
      "We strive for excellence in every project, delivering only the best solutions.",
  },
  {
    icon: <FaUsers className="w-6 h-6 mr-2" />,
    title: "Collaboration",
    description:
      "We work closely with our clients and foster teamwork within our organization.",
  },
  {
    icon: <FaLightbulb className="w-6 h-6 mr-2" />,
    title: "Innovation",
    description:
      "We embrace new ideas and find creative solutions to complex problems.",
  },
  {
    icon: <FaRocket className="w-6 h-6 mr-2" />,
    title: "Customer Focus",
    description:
      "We put our clients at the heart of our work, ensuring their success.",
  },
];
