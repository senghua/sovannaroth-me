import plutoThumbnail from "../assets/thumbnails/pluto-thumbnail.png";
import eastBuyThumbnail from "../assets/thumbnails/east-buy.jpg";
import sambathThumbnail from "../assets/thumbnails/sambath-home.jpg";
import tumpeangKuchThumbnail from "../assets/thumbnails/tumpeang-kuch.jpg";
import eastLandAndHomeThumbnail from "../assets/thumbnails/east-land-and-home.jpeg";

const screenModules = import.meta.glob("../assets/screens/*/*.{jpg,jpeg,png,webp}", { eager: true });

function getScreens(slug) {
  return Object.keys(screenModules)
    .filter((path) => path.includes(`/screens/${slug}/`))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path) => screenModules[path].default);
}

export const projects = [
  {
    slug: "east-buy",
    name: "EAST BUY",
    subtitle: "Food delivery ecosystem",
    role: "Senior UX/UI Designer",
    period: "Mar 2025 — Present",
    oneLiner:
      "Led design across Customer, Driver, Merchant, and Admin — four interconnected platforms built on one shared design system.",
    tags: ["Product design", "Design systems", "Research"],
    thumbnail: eastBuyThumbnail,
    screens: getScreens("east-buy"),
    frame: "phone",
    accent: "#E8720C",
    platforms: ["Customer app", "Driver app", "Merchant app", "Admin dashboard"],
    figmaUrl: null,
    problem:
      "East Buy needed four interconnected platforms — customer ordering, merchant operations, driver delivery, and internal admin — to work seamlessly together in real time. Before this project, the experience was fragmented: slow merchant operations, an inefficient driver workflow, no operational visibility, and an inconsistent experience across surfaces.",
    solution:
      "A shared design system powers all four surfaces: multi-input food discovery, streamlined checkout with saved payment methods, real-time order tracking for customers and drivers, and dashboards built for fast decisions during high-volume operations. The result is one coherent product ecosystem instead of four disconnected apps.",
    features: [
      { title: "Food discovery", items: ["Multi-input search", "Voice & image-assisted discovery", "Personalized recommendations"] },
      { title: "Menu & ordering", items: ["Visual menu browsing", "Order customization", "Delivery instructions"] },
      { title: "Payment & checkout", items: ["Multiple payment methods", "Streamlined checkout flow", "Promotions & voucher support"] },
      { title: "Delivery experience", items: ["Real-time order tracking", "Live delivery updates", "Estimated arrival time"] },
    ],
  },
  {
    slug: "pluto",
    name: "Pluto",
    subtitle: "Fintech mobile wallet app",
    role: "Product Design | UX Researcher | UI Designer | Branding | UI Auditor",
    period: "TBD",
    oneLiner: "Pluto is a modern mobile wallet designed to simplify peer-to-peer (P2P) transactions. By leveraging seamless QR code technology, it delivers fast, secure, and effortless transfers with an intuitive user experience at its core.",
    tags: ["Product design", "UX/UI", "Fintech"],
    thumbnail: plutoThumbnail,
    screens: getScreens("pluto"),
    frame: "phone",
    accent: "#cb9f00",
    platforms: ["iOS app", "Android app"],
    figmaUrl: null,
    problem: "Pluto is a modern mobile wallet designed to simplify peer-to-peer (P2P) transactions. By leveraging seamless QR code technology, it delivers fast, secure, and effortless transfers with an intuitive user experience at its core.",
    solution: "TODO: describe the solution and outcome.",
    features: [],
  },
  {
    slug: "east-land-and-home",
    name: "EAST LAND AND HOME",
    subtitle: "Property search & booking app",
    role: "Product Analytics | UX Researcher | UI Designer | UI Auditor",
    period: "TBD",
    oneLiner: "TODO: add a one-line summary for East Land and Home.",
    tags: ["Product design", "UX/UI"],
    thumbnail: eastLandAndHomeThumbnail,
    screens: getScreens("east-land-and-home"),
    frame: "phone",
    accent: "#1D8A5F",
    platforms: ["iOS app", "Android app"],
    figmaUrl: null,
    problem: "The project began with a thorough product analysis, outlining the required features, functionality and so on. This involved clarifying the project's scope, setting project deliverables, establishing the project timeline, and finalizing the proposal and agreement",
    solution: "TODO: describe the solution and outcome.",
    features: [],
  },
  {
    slug: "sambath",
    name: "Sambath Home Kitchen & Furniture",
    subtitle: "E-commerce & brand website",
    role: "Product Designer",
    period: "Mar 2023 — Jan 2025",
    oneLiner:
      "Designed the browse-and-discovery experience for a furniture e-commerce brand, tying the site directly to marketing campaigns.",
    tags: ["Web design", "E-commerce", "Brand"],
    thumbnail: sambathThumbnail,
    screens: getScreens("sambath"),
    frame: "browser",
    accent: "#B4703A",
    platforms: ["Marketing site", "Product catalog"],
    figmaUrl: null,
    liveUrl: "https://sambathhome.com/",
    problem:
      "Sambath needed a website that could carry seasonal marketing campaigns while making a large, varied furniture catalog easy to browse — without the experience feeling like a generic catalog dump.",
    solution:
      "A clean, campaign-ready storefront where browsing and discovery come first — modular banner placements for marketing, a filterable catalog, and product pages designed to convert.",
    features: [
      { title: "Browse & discovery", items: ["Category-first navigation", "Room & material filtering", "Modular campaign banners"] },
      { title: "Product pages", items: ["Large product photography", "Clear pricing & variants", "Related products"] },
    ],
  },
  {
    slug: "tumpeang-kuch",
    name: "Tumpeang Kuch",
    subtitle: "Nonprofit website & brand guide",
    role: "Product Designer (Volunteer)",
    period: "Aug 2024 — Present",
    oneLiner:
      "Volunteer UX/UI and brand guide for a nonprofit, and mentored junior designers through the process.",
    tags: ["Nonprofit", "Brand identity", "Mentorship"],
    thumbnail: tumpeangKuchThumbnail,
    screens: getScreens("tumpeang-kuch"),
    frame: "browser",
    accent: "#1E8A6E",
    platforms: ["Website", "Brand guide"],
    figmaUrl: null,
    problem:
      "The organization needed a credible web presence and a consistent visual identity to communicate its mission clearly to donors and the community, with no dedicated design team of its own.",
    solution:
      "A clear, mission-first website paired with a brand guide that keeps the organization's presence consistent — built collaboratively with junior designers as a hands-on mentorship opportunity.",
    features: [
      { title: "Website", items: ["Mission-first homepage", "Programs & impact pages", "Donate / get involved flow"] },
      { title: "Brand guide", items: ["Color & typography system", "Logo usage", "Voice & imagery direction"] },
    ],
  },
];
