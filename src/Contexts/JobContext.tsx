import { createContext, ReactNode, useContext, useState } from "react";

export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

interface ContextProps {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  filterBy: string[];
  setFilterBy: React.Dispatch<React.SetStateAction<string[]>>;
  isFiltered: boolean;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProviderProps {
  children: ReactNode;
}

const AppContext = createContext<ContextProps | undefined>(undefined);

export const useJobs = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useJobs must be used within an AppProvider");
  }
  return context;
};

const AppProvider = ({ children }: ProviderProps) => {
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filterBy, setFilterBy] = useState<string[]>([]);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Photosnap",
      logo: "./public/photosnap.svg",
      new: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 2,
      company: "Manage",
      logo: "./public/manage.svg",
      new: true,
      featured: true,
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"],
    },
    {
      id: 3,
      company: "Account",
      logo: "./public/account.svg",
      new: true,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
    {
      id: 4,
      company: "MyHome",
      logo: "./public/myhome.svg",
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA Only",
      languages: ["CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 5,
      company: "Loop Studios",
      logo: "./public/loop-studios.svg",
      new: false,
      featured: false,
      position: "Software Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Ruby"],
      tools: ["Sass"],
    },
    {
      id: 6,
      company: "FaceIt",
      logo: "./public/faceit.svg",
      new: false,
      featured: false,
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK Only",
      languages: ["Ruby"],
      tools: ["RoR"],
    },
    {
      id: 7,
      company: "Shortly",
      logo: "./public/shortly.svg",
      new: false,
      featured: false,
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"],
    },
    {
      id: 8,
      company: "Insure",
      logo: "./public/insure.svg",
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["Vue", "Sass"],
    },
    {
      id: 9,
      company: "Eyecam Co.",
      logo: "./public/eyecam-co.svg",
      new: false,
      featured: false,
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Python"],
      tools: ["Django"],
    },
    {
      id: 10,
      company: "The Air Filter Company",
      logo: "./public/the-air-filter-company.svg",
      new: false,
      featured: false,
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        jobs,
        setJobs,
        filterBy,
        setFilterBy,
        isFiltered,
        setIsFiltered,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
