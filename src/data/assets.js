export const ASSETS = {
  portrait: "/assets/(HERO)%20gerikah%20picture.png",
  logo: "/assets/(LOGO)%20-%20black%20G.png",
};

export const GCS_ASSETS = {
  hero: "/assets/projects/GCS%20-%20hero.png",
  flowchartOne: "/assets/projects/GCS%20-%20flowchart1.jpg",
  flowchartTwo: "/assets/projects/GCS%20-%20flowchart2.jpg",
  yoloFlowchart: "/assets/projects/GCS%20-%20YOLOv8%20Flowchart.jpg",
  webDashboard: "/assets/projects/GCS%20WEB%20-%20dashboard.png",
  webAnalytics: "/assets/projects/GCS%20WEB%20-%20analytics.png",
  webFlightLogs: "/assets/projects/GCS%20WEB%20-%20flight%20logs.png",
  webStream: "/assets/projects/GCS%20WEB%20-%20stream%20view.png",
  mobileDashboard: "/assets/projects/GCS%20MOB%20-%20dashboard.png",
  mobileAnalytics: "/assets/projects/GCS%20MOB%20-%20analytics.png",
  mobileFlightLogsOne: "/assets/projects/GCS%20MOB%20-%20flight%20logs%201.png",
  mobileFlightLogsTwo: "/assets/projects/GCS%20MOB%20-%20flight%20logs%202.png",
};

export const FLOWCHART_PROJECTS = [
  {
    title: "E-Registered Messaging System",
    context: "Workflow documentation for a messaging platform, covering account and sender management, message creation, campaigns, and related system functions.",
    contribution: "I designed the diagrams in Lucidchart, organizing user actions, system responses, and decision branches into consistent visual flows.",
    notes: ["Separate user and system lanes clarify responsibilities.", "Decision branches show validation, alternative actions, and error paths. The system overview complements the more detailed workflows."],
    diagrams: ["01", "02", "03", "04", "05", "06"].map((number) => ({ src: `/assets/projects/FIVERR%20-%20${number}.jpg`, title: `E-Registered Messaging System diagram ${number}` })),
  },
  {
    title: "DropSafe — Smart Locker Workflows",
    context: "Process diagrams showing how a smart parcel locker handles delivery, retrieval, and interactions through a resident dashboard.",
    contribution: "I designed the complete diagram set in Lucidchart, separating the main system, delivery, retrieval, and user workflows into connected processes.",
    notes: ["Separate diagrams make each part of the system easier to follow.", "OTP and RFID validation paths show access decisions. Sensor checks, status updates, and notifications connect physical events with system responses."],
    diagrams: [{ src: "/assets/projects/FIVERR%20-%20DROPSAFE.jpg", title: "DropSafe smart locker workflow diagram" }],
  },
  {
    title: "Study Buddies — Application User Flows",
    context: "User flows for a study-partner application, covering account access, profile setup, matching, chat, and navigation.",
    contribution: "I designed all the flowcharts in Lucidchart, mapping the application’s main journeys and organizing them into clearly labeled sections.",
    notes: ["Account-related processes are separated from matching and messaging.", "Labeled branches distinguish successful actions from retry paths. A shared diagram key explains the symbols used throughout."],
    diagrams: [{ src: "/assets/projects/FIVERR%20-%20Study%20Buddies%20Flowchart%20Project.jpg", title: "Study Buddies application user flow diagram" }],
  },
  {
    title: "Task Mate — Mobile Wireframes",
    context: "Low-fidelity wireframes for a task-management application, covering onboarding, account access, the task dashboard, settings, and support.",
    contribution: "I designed all the wireframe screens and their connections in Lucidchart, including layout, navigation paths, and explanatory annotations.",
    notes: ["Grayscale screens keep attention on structure and functionality.", "Connecting arrows explain movement between screens. Annotations describe the purpose of each screen and its main interactions."],
    diagrams: [{ src: "/assets/projects/FIVERR%20-%20Task%20Mate%20Wireframe.jpg", title: "Task Mate mobile wireframe diagram" }],
  },
];

export const FLOWCHART_HERO = "/assets/projects/FIVERR%20-%20hero.png";
export const FLOWCHART_ASSETS = FLOWCHART_PROJECTS.flatMap((project) => project.diagrams);

export const RIFTBOUND_ASSETS = {
  hero: "/assets/projects/RIFTBOUND%20-%20hero.png",
  home: "/assets/projects/RIFTBOUND%20-%20home.png",
  heroes: "/assets/projects/RIFTBOUND%20-%20heroes.png",
  equipments: "/assets/projects/RIFTBOUND%20-%20equipments.png",
  battle: "/assets/projects/RIFTBOUND%20-%20battle.png",
  logo: "/assets/projects/RIFTBOUND%20-%20logo.png",
};
