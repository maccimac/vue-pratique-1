/**
 * # JobListing
 *   Our main object type
 */
export interface JobListing {
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

/**
 * # JobTag
 *   This allows us to pass tags
 *    (skills, languages, role, level)
 *   between components
 */
export interface JobTag {
  language?: string;
  tool?: string;
  role?: string;
  level?: string;
}
