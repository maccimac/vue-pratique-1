import { JobListing } from "@/types";

export const mockJob1: JobListing = {
  id: 1,
  company: "Photosnap",
  logo: "./images/photosnap.svg",
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
};
export const mockJob2: JobListing = {
  id: 2,
  company: "Manage",
  logo: "./images/manage.svg",
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
};
