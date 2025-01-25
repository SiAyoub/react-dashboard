// learnersData.tsx
export interface Learner {
  name: string;
  school: string;
  score: number;
  rank: number;
  image: string;
}

export interface LearnersData {
  [year: string]: {
    [level: string]: Learner[];
  };
}

export const learnersData: LearnersData = {
  "2025": {
    Beginner: [
      {
        name: "Jane Cooper",
        school: "St. Javidar School",
        score: 99.99,
        rank: 1,
        image: "https://i.pravatar.cc/150?img=19",
      },
      {
        name: "Eleanor Pena",
        school: "Polar School",
        score: 99.76,
        rank: 2,
        image: "https://i.pravatar.cc/150?img=8",
      },
      {
        name: "Devon Lane",
        school: "Polar School",
        score: 99.5,
        rank: 3,
        image: "https://i.pravatar.cc/150?img=3",
      },
    ],
    Intermediate: [
      {
        name: "Ronald Richards",
        school: "Cedar High",
        score: 97.8,
        rank: 1,
        image: "/path-to-image-4.jpg",
      },
      {
        name: "Arlene McCoy",
        school: "River Valley School",
        score: 96.2,
        rank: 2,
        image: "/path-to-image-5.jpg",
      },
      {
        name: "Darrell Steward",
        school: "Greenwood Academy",
        score: 94.6,
        rank: 3,
        image: "/path-to-image-6.jpg",
      },
    ],
  },
  "2024": {
    Beginner: [
      {
        name: "tney Henry",
        school: "Eastview School",
        score: 98.6,
        rank: 1,
        image: "https://i.pravatar.cc/150?img=26",
      },
      {
        name: "Jerome Bell",
        school: "Mountain High",
        score: 98.2,
        rank: 2,
        image: "https://i.pravatar.cc/150?img=31",
      },
      {
        name: "Ryn Murphy",
        school: "Future Academy",
        score: 97.9,
        rank: 3,
        image: "https://i.pravatar.cc/150?img=56",
      },
    ],
    Advanced: [
      {
        name: "Jacob Jones",
        school: "Harbor School",
        score: 96.4,
        rank: 1,
        image: "/path-to-image-10.jpg",
      },
      {
        name: "Kristin Watson",
        school: "Pinehill Academy",
        score: 95.3,
        rank: 2,
        image: "/path-to-image-11.jpg",
      },
      {
        name: "Darlene Robertson",
        school: "Summit School",
        score: 94.1,
        rank: 3,
        image: "/path-to-image-12.jpg",
      },
    ],
  },
  "2023": {
    Beginner: [
      {
        name: "Joe Howard",
        school: "lake Academy",
        score: 99.2,
        rank: 1,
        image: "https://i.pravatar.cc/150?img=43",
      },
      {
        name: "Ade Warren",
        school: "Highland High",
        score: 98.8,
        rank: 2,
        image: "https://i.pravatar.cc/150?img=68",
      },
      {
        name: "Guy Hawk",
        school: "Willow School",
        score: 98.3,
        rank: 3,
        image: "https://i.pravatar.cc/150?img=28",
      },
    ],
    Intermediate: [
      {
        name: "Leslie Alexander",
        school: "Sunrise Academy",
        score: 95.7,
        rank: 1,
        image: "/path-to-image-16.jpg",
      },
      {
        name: "Ralph Edwards",
        school: "Westwood High",
        score: 94.9,
        rank: 2,
        image: "/path-to-image-17.jpg",
      },
      {
        name: "Jenny Wilson",
        school: "Harmony Academy",
        score: 94.2,
        rank: 3,
        image: "/path-to-image-18.jpg",
      },
    ],
  },
  "2022": {
    Beginner: [
      {
        name: "Ann Perez",
        school: "Brookfield School",
        score: 98.9,
        rank: 1,
        image: "https://i.pravatar.cc/150?img=33",
      },
      {
        name: "Edward King",
        school: "Lakeside High",
        score: 98.4,
        rank: 2,
        image: "https://i.pravatar.cc/150?img=5",
      },
      {
        name: "Maria Smith",
        school: "Valley Academy",
        score: 97.8,
        rank: 3,
        image: "https://i.pravatar.cc/150?img=1",
      },
    ],
    Advanced: [
      {
        name: "Peter Johnson",
        school: "Rockwell School",
        score: 96.3,
        rank: 1,
        image: "/path-to-image-22.jpg",
      },
      {
        name: "Susan Green",
        school: "Hilltop Academy",
        score: 95.7,
        rank: 2,
        image: "/path-to-image-23.jpg",
      },
      {
        name: "James Brown",
        school: "Evergreen High",
        score: 94.6,
        rank: 3,
        image: "/path-to-image-24.jpg",
      },
    ],
  },
};
