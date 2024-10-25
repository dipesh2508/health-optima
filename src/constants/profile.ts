import Dipesh from "@/assets/images/dipesh.png";
import Isheta from "@/assets/images/isheta.png";
import Preyanshu from "@/assets/images/preyanshu.png";
import Divyanshu from "@/assets/images/divyanshu.png";
import { StaticImageData } from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
  linkedIn: string;
}

// Add this array of team members
export const teamMembers: TeamMember[] = [
  {
    name: "Dipesh Ranjan",
    role: "Full-Stack Developer & UX Designer",
    image: Dipesh,
    linkedIn: "https://www.linkedin.com/in/dipesh-ranjan/",
  },
  {
    name: "Isheta Aggarwal",
    role: "Front-End Developer & UX Designer",
    image: Isheta,
    linkedIn: "https://www.linkedin.com/in/isheta-aggarwal/",
  },
  {
    name: "Preyanshu Dhapola",
    role: "Front-End Developer",
    image: Preyanshu,
    linkedIn: "https://www.linkedin.com/in/preyanshu-d-852019231/",
  },
  {
    name: "Divyanshu Agarwal",
    role: "Back-End Developer",
    image: Divyanshu,
    linkedIn: "https://www.linkedin.com/in/divyanshu-agarwal-15774b222/",
  },
];
