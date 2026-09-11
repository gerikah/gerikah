export const ASSETS = {
  portrait: "/assets/(HERO)%20gerikah%20picture.png",
  logo: "/assets/(LOGO)%20-%20black%20G.png",
};

const offRackSnapshot = (file) => `/assets/projects/02.off%20the%20rack/OFF%20THE%20RACK%20-%20WEBSITE%20SNAPSHOTS/${encodeURIComponent(file)}.png`;
const offRackWireframe = (file) => `/assets/projects/02.off%20the%20rack/Off%20the%20Rack%20-%20Initial%20Layout%20Wireframe/${encodeURIComponent(file)}.png`;

export const OFF_THE_RACK_ASSETS = {
  hero: "/assets/projects/02.off%20the%20rack/OFF%20THE%20RACK%20-%20hero.png",
  sitemap: "/assets/projects/02.off%20the%20rack/OFF%20THE%20RACK%20sitemap.png",
  screens: {
    homepage: offRackSnapshot("HOMEPAGE HERO"),
    newArrivals: offRackSnapshot("HOMEPAGE NEW ARRIVALS"),
    homepageAbout: offRackSnapshot("HOMEPAGE ABOUT"),
    featured: offRackSnapshot("FEATURED"),
    about: offRackSnapshot("ABOUT PAGE"),
    process: offRackSnapshot("ABOUT PAGE 2"),
    contact: offRackSnapshot("CONTACT PAGE"),
    inquiry: offRackSnapshot("INQUIRY PAGE FORM"),
    footer: offRackSnapshot("FOOTER"),
    adminDashboard: offRackSnapshot("ADMIN DASHBOARD"),
    adminCategories: offRackSnapshot("ADMIN CATEGORIES"),
  },
  wireframes: {
    home: offRackWireframe("HOME"),
    shop: offRackWireframe("SHOP"),
    product: offRackWireframe("PRODUCT"),
    inquiry: offRackWireframe("INQUIRY FORM"),
    adminDashboard: offRackWireframe("ADMIN - DASHBOARD"),
    adminProducts: offRackWireframe("ADMIN - PRODUCTS"),
    adminCategories: offRackWireframe("ADMIN - CATEGORIES"),
    adminInquiries: offRackWireframe("ADMIN - INQUIRIES"),
  },
};

export const REAL_ESTATE_ASSETS = {
  hero: "/assets/projects/04.homepage%20redesign/REALESTATE%20-%20hero.png",
  homepageOne: "/assets/projects/04.homepage%20redesign/REALESTATE%20-%20homepage%20(1).png",
  homepageTwo: "/assets/projects/04.homepage%20redesign/REALESTATE%20-%20homepage%20(2).png",
};

export const GCS_ASSETS = {
  hero: "/assets/projects/01.ground%20control%20station/GCS%20-%20hero.png",
  flowchartOne: "/assets/projects/05.flows%20and%20wireframes/GCS%20-%20flowchart1.jpg",
  flowchartTwo: "/assets/projects/05.flows%20and%20wireframes/GCS%20-%20flowchart2.jpg",
  yoloFlowchart: "/assets/projects/05.flows%20and%20wireframes/GCS%20-%20YOLOv8%20Flowchart.jpg",
  webDashboard: "/assets/projects/01.ground%20control%20station/GCS%20WEB%20-%20dashboard.png",
  webAnalytics: "/assets/projects/01.ground%20control%20station/GCS%20WEB%20-%20analytics.png",
  webFlightLogs: "/assets/projects/01.ground%20control%20station/GCS%20WEB%20-%20flight%20logs.png",
  webStream: "/assets/projects/01.ground%20control%20station/GCS%20WEB%20-%20stream%20view.png",
  mobileDashboard: "/assets/projects/01.ground%20control%20station/GCS%20MOB%20-%20dashboard.png",
  mobileAnalytics: "/assets/projects/01.ground%20control%20station/GCS%20MOB%20-%20analytics.png",
  mobileFlightLogsOne: "/assets/projects/01.ground%20control%20station/GCS%20MOB%20-%20flight%20logs%201.png",
  mobileFlightLogsTwo: "/assets/projects/01.ground%20control%20station/GCS%20MOB%20-%20flight%20logs%202.png",
};

export const FLOWCHART_PROJECTS = [
  {
    title: "E-Registered Messaging System",
    context: "Workflow documentation for a messaging platform, covering account and sender management, message creation, campaigns, and related system functions.",
    contribution: "I designed the diagrams in Lucidchart, organizing user actions, system responses, and decision branches into consistent visual flows.",
    notes: ["Separate user and system lanes clarify responsibilities.", "Decision branches show validation, alternative actions, and error paths. The system overview complements the more detailed workflows."],
    diagrams: ["01", "02", "03", "04", "05", "06"].map((number) => ({ src: `/assets/projects/05.flows%20and%20wireframes/FIVERR%20-%20${number}.jpg`, title: `E-Registered Messaging System diagram ${number}` })),
  },
  {
    title: "DropSafe — Smart Locker Workflows",
    context: "Process diagrams showing how a smart parcel locker handles delivery, retrieval, and interactions through a resident dashboard.",
    contribution: "I designed the complete diagram set in Lucidchart, separating the main system, delivery, retrieval, and user workflows into connected processes.",
    notes: ["Separate diagrams make each part of the system easier to follow.", "OTP and RFID validation paths show access decisions. Sensor checks, status updates, and notifications connect physical events with system responses."],
    diagrams: [{ src: "/assets/projects/05.flows%20and%20wireframes/FIVERR%20-%20DROPSAFE.jpg", title: "DropSafe smart locker workflow diagram" }],
  },
  {
    title: "Study Buddies — Application User Flows",
    context: "User flows for a study-partner application, covering account access, profile setup, matching, chat, and navigation.",
    contribution: "I designed all the flowcharts in Lucidchart, mapping the application’s main journeys and organizing them into clearly labeled sections.",
    notes: ["Account-related processes are separated from matching and messaging.", "Labeled branches distinguish successful actions from retry paths. A shared diagram key explains the symbols used throughout."],
    diagrams: [{ src: "/assets/projects/05.flows%20and%20wireframes/FIVERR%20-%20Study%20Buddies%20Flowchart%20Project.jpg", title: "Study Buddies application user flow diagram" }],
  },
  {
    title: "Task Mate — Mobile Wireframes",
    context: "Low-fidelity wireframes for a task-management application, covering onboarding, account access, the task dashboard, settings, and support.",
    contribution: "I designed all the wireframe screens and their connections in Lucidchart, including layout, navigation paths, and explanatory annotations.",
    notes: ["Grayscale screens keep attention on structure and functionality.", "Connecting arrows explain movement between screens. Annotations describe the purpose of each screen and its main interactions."],
    diagrams: [{ src: "/assets/projects/05.flows%20and%20wireframes/FIVERR%20-%20Task%20Mate%20Wireframe.jpg", title: "Task Mate mobile wireframe diagram" }],
  },
];

export const FLOWCHART_HERO = "/assets/projects/05.flows%20and%20wireframes/FIVERR%20-%20hero.png";
export const FLOWCHART_ASSETS = FLOWCHART_PROJECTS.flatMap((project) => project.diagrams);

export const RIFTBOUND_ASSETS = {
  hero: "/assets/projects/03.riftbound/RIFTBOUND%20-%20hero.png",
  home: "/assets/projects/03.riftbound/RIFTBOUND%20-%20home.png",
  heroes: "/assets/projects/03.riftbound/RIFTBOUND%20-%20heroes.png",
  equipments: "/assets/projects/03.riftbound/RIFTBOUND%20-%20equipments.png",
  battle: "/assets/projects/03.riftbound/RIFTBOUND%20-%20battle.png",
  logo: "/assets/projects/03.riftbound/RIFTBOUND%20-%20logo.png",
};
