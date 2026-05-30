export interface CollegeCard {
  id: number;
  name: string;
  location: string;
  state: string;
  type: string;
  fees: number;
  rating: number;
  nirfRanking: number | null;
  images: string[];
placements: {
  id?: number;
  collegeId?: number;
  averagePackage: number;
  highestPackage: number;
  placementPercentage: number;
  topRecruiters?: string[];
}[] | null;
  _count?: { reviews: number };
}

export interface CollegeDetail extends CollegeCard {
  overview: string;
  establishedYear: number;
  website: string | null;
  courses: Course[];
  reviews: Review[];
}

export interface Course {
  id: number;
  name: string;
  duration: string;
  fees: number;
  eligibility: string;
  seats: number;
}

export interface Review {
  id: number;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
  user: { name: string };
}

export interface PredictorResult {
  college: { id: number; name: string; location: string; state: string; rating: number; images: string[] };
  course: { name: string };
  closingRank: number;
  openingRank: number;
  category: string;
}
