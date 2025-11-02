import frontend from "@/assets/images/frontend.svg";
import design from "@/assets/images/design.svg";
import development from "@/assets/images/development.svg";
import discovery from "@/assets/images/discovery.png";
import planning from "@/assets/images/planning.svg";

export const EXPERTISE_DETAILS_DATA = [
  {
    title: "Discovery",
    image: discovery,
    description:
      "Before writing a single line of code, I start by understanding the product’s purpose, audience, and technical requirements. This stage ensures that every design and technical choice aligns with real goals — not assumptions.",
    bullets: [
      "Define business and user goals",
      "Analyze technical constraints and architecture options",
      "Review design briefs or Figma prototypes",
      "Identify potential challenges early",
    ],
  },
  {
    title: "Planning & Architecture",
    image: planning,
    description:
      "Here I focus on designing a solid foundation for scalability and maintainability. I set up the structure, dependencies, and reusable building blocks before diving into UI work.",
    bullets: [
      "Establish folder and component structure",
      "Define naming conventions and data flow",
      "Configure project setup (Vite, React Query, Tailwind, etc.), Plan API communication and state management",
    ],
  },
  {
    title: "Design & Prototyping",
    image: design,
    description:
      "Once the foundation is ready, I translate designs into responsive and accessible interfaces — keeping attention to every pixel and interaction.",
    bullets: [
      "Convert Figma or wireframes into clean React components",
      "Ensure full responsiveness across breakpoints",
      "Focus on accessibility and semantics",
      "Apply smooth micro-interactions and animations",
    ],
  },
  {
    title: "Development",
    image: development,
    description:
      "This is where ideas become reality. I implement logic, connect APIs, and bring the UI to life while keeping performance and readability as top priorities.",
    bullets: [
      "Choose the right technologies for the project scope",
      "Write clean, type-safe code with TypeScript",
      "Manage data efficiently using React Query",
      "Optimize rendering and bundle size",
    ],
  },
  {
    title: "Testing & Delivery",
    image: frontend,
    description:
      "After the core features are ready, I focus on testing, optimization, and deployment — ensuring a smooth handoff and production-ready performance.",
    bullets: [
      "Write unit and integration tests (Vitest / Playwright)",
      "Verify performance and accessibility",
      "Conduct thorough code reviews",
      "Deploy and monitor the final build",
    ],
  },
];
