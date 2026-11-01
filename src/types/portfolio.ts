export type Language = 'id' | 'en';

export type ProjectCategory = 'all' | 'fullstack' | 'ai' | 'fintech' | 'creative';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface GalleryItem {
  url: string;
  title: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  taglineId?: string;
  summary: string;
  summaryId?: string;
  fullDescription: string;
  fullDescriptionId?: string;
  category: ProjectCategory;
  categoryLabel: string;
  categoryLabelId: string;
  role: string;
  client: string;
  year: string;
  duration: string;
  featured: boolean;
  coverImage: string;
  demoUrl?: string;
  githubUrl?: string;
  metrics: ProjectMetric[];
  tags: string[];
  architecture: {
    overview: string;
    overviewId?: string;
    frontend: string[];
    backend: string[];
    cloudAndDevOps: string[];
  };
  challenges: {
    title: string;
    titleId?: string;
    description: string;
    descriptionId?: string;
  }[];
  solutions: {
    title: string;
    titleId?: string;
    description: string;
    descriptionId?: string;
  }[];
  results: {
    kpi: string;
    detail: string;
    detailId?: string;
  }[];
  gallery: GalleryItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  experienceYears: number;
  featured?: boolean;
  category: string;
  tagline: string;
  badge?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  skills: SkillItem[];
}

export interface CareerExperience {
  id: string;
  role: string;
  roleId?: string;
  company: string;
  location: string;
  period: string;
  type: string;
  typeId?: string;
  summary: string;
  summaryId?: string;
  keyAchievements: string[];
  keyAchievementsId?: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  degreeId?: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
  highlightsId?: string[];
}

export interface PersonalProfile {
  name: string;
  preferredName: string;
  title: string;
  titleId: string;
  headline: string;
  headlineId: string;
  bioSummary: string;
  bioSummaryId: string;
  detailedStory: string[];
  detailedStoryId: string[];
  location: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  cvDownloadUrl: string;
  availabilityStatus: {
    status: 'available' | 'booked' | 'selective';
    label: string;
    labelId: string;
  };
  stats: {
    yearsExperience: number;
    completedProjects: number;
    uptimeSla: string;
    clientSatisfaction: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  serviceType: string;
  budgetRange: string;
  message: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

