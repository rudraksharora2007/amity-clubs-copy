export interface SanityLeader {
  _id: string;
  name: string;
  role: string;
  description?: string;
  portrait?: unknown;
  twitterUrl?: string;
  linkedinUrl?: string;
  order: number;
}

export interface SanityDepartment {
  _id: string;
  name: string;
  departmentId: string;
  departmentHead: string;
  headRole?: string;
  headMessage?: string;
  headPortrait?: unknown;
  headLinkedinUrl?: string;
  headTwitterUrl?: string;
  coHeads?: string[];
  theme?: "blue" | "green" | "red" | "teal" | "gold";
  order: number;
}

export interface CommitteeSettings {
  _id: string;
  heroEyebrow?: string;
  heroTitleLine1?: string;
  heroTitleLine2?: string;
  heroTitleLine3?: string;
  heroDescription?: string;
  officerCountLabel?: string;
  purposeEyebrow?: string;
  purposeTitle?: string;
  visionBody?: string;
  missionBody?: string;
  mottoLine1?: string;
  mottoLine2?: string;
  ctaTitle?: string;
  ctaButtonLabel?: string;
}

export interface SanityCommitteeLeader {
  _id: string;
  name: string;
  role: string;
  bio: string;
  deptLabel?: string;
  chipLabel?: string;
  messageHeader?: string;
  portrait?: unknown;
  linkedinUrl?: string;
  twitterUrl?: string;
  order: number;
}
