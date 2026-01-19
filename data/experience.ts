import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Jio Platforms",
    logo: "/images/companies/jio.png",
    role: "Project Intern",
    type: "",
    duration: "August 2024 - May 2025",
    startDate: "2024-08",
    endDate: "2025-05",
    description:
      "Implemented real-time audio streaming.",
    details: [
      "Developed a React-based web application for real-time medical documentation, leveraging a gRPC and Protobuf backend for high-performance data exchange.",
      "Implemented real-time audio streaming using WebSockets and integrated the Web Speech API for speech-to-text transcription.",
      "Integrated UI components with gRPC microservices to automatically generate structured SOAP and Progress Reports from the transcribed text.",
      "Worked on the data flow to support key healthcare features, focusing on performance and reliability.",
    ],
  },
];
