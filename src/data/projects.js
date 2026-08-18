export const projects = [
  {
    slug: "east-buy",
    name: "EAST BUY",
    subtitle: "Food delivery ecosystem",
    role: "Lead Product Designer",
    period: "Mar 2025 — Present",
    oneLiner:
      "Led design across Customer, Driver, Merchant, and Admin — four interconnected platforms built on one shared design system.",
    tags: ["Product design", "Design systems", "Research"],
    frame: "phone",
    accent: "#E8720C",
    platforms: ["Customer app", "Driver app", "Merchant app", "Admin dashboard"],
    figmaUrl: null,
    problem:
      "East Buy needed four interconnected platforms — customer ordering, merchant operations, driver delivery, and internal admin — to work seamlessly together in real time. Before this project, the experience was fragmented: slow merchant operations, an inefficient driver workflow, no operational visibility, and an inconsistent experience across surfaces.",
    process: [
      {
        title: "Research & discovery",
        body: "Ran stakeholder interviews across product, engineering, and operations to map the four user groups' distinct workflows, then synthesized shared pain points into a single set of business goals: increase order conversion, improve delivery efficiency, reduce operational friction, and build infrastructure that could scale.",
      },
      {
        title: "UX strategy",
        body: "Defined five core principles to guide every screen: reduce cognitive load, faster navigation, real-time visibility, operational efficiency, and cross-platform consistency — enforced through a unified design system so the product feels identical whether you're a customer, a merchant, or an admin.",
      },
      {
        title: "Wireframes & system",
        body: "Built the information architecture and component library first, then layered in flows for each platform — food discovery, checkout, live tracking, merchant order management, and driver dispatch — usability-tested with real users before final UI.",
      },
    ],
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
    slug: "sambath",
    name: "Sambath Home Kitchen & Furniture",
    subtitle: "E-commerce & brand website",
    role: "Product Designer",
    period: "Mar 2023 — Jan 2025",
    oneLiner:
      "Designed the browse-and-discovery experience for a furniture e-commerce brand, tying the site directly to marketing campaigns.",
    tags: ["Web design", "E-commerce", "Brand"],
    frame: "browser",
    accent: "#B4703A",
    platforms: ["Marketing site", "Product catalog"],
    figmaUrl: null,
    problem:
      "Sambath needed a website that could carry seasonal marketing campaigns while making a large, varied furniture catalog easy to browse — without the experience feeling like a generic catalog dump.",
    process: [
      {
        title: "Research & feedback loops",
        body: "Worked directly with the client and gathered ongoing customer feedback to understand how shoppers browse furniture online versus in-store, then prioritized discovery paths around room type and material.",
      },
      {
        title: "Wireframes",
        body: "Structured category and product pages around large product photography, clear pricing, and fast filtering, keeping campaign banners modular so marketing could update them independently.",
      },
      {
        title: "Iteration",
        body: "Refined layouts across multiple campaign cycles based on client feedback and site performance, tightening the path from homepage banner to product detail.",
      },
    ],
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
    frame: "browser",
    accent: "#1E8A6E",
    platforms: ["Website", "Brand guide"],
    figmaUrl: null,
    problem:
      "The organization needed a credible web presence and a consistent visual identity to communicate its mission clearly to donors and the community, with no dedicated design team of its own.",
    process: [
      {
        title: "Discovery",
        body: "Met with the organization to understand their mission, audience, and the story they needed the site to tell.",
      },
      {
        title: "Brand guide",
        body: "Established a lightweight brand guide — color, type, and imagery direction — so future content stays consistent as volunteers rotate.",
      },
      {
        title: "Mentorship",
        body: "Paired with and trained junior designers on the project, reviewing their work and handing off parts of the UI design as they grew more confident.",
      },
    ],
    solution:
      "A clear, mission-first website paired with a brand guide that keeps the organization's presence consistent — built collaboratively with junior designers as a hands-on mentorship opportunity.",
    features: [
      { title: "Website", items: ["Mission-first homepage", "Programs & impact pages", "Donate / get involved flow"] },
      { title: "Brand guide", items: ["Color & typography system", "Logo usage", "Voice & imagery direction"] },
    ],
  },
];
