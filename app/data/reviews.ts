export type Review = {
  name: string;
  role: string;
  company?: string;
  location?: string;
  text: string;
  image: string;
  rating: number; // 1-5
};

export const reviews: Review[] = [
  {
    name: "Mathilda Burns",
    role: "Backery Shop",
    company: "",
    location: "Tronto, Italy",
    text: "We have started 1 year back with 2 developer from WORK24 (Mehul and Prachi) and now my team reach to 25 with WORK24. I am impressed with loyalty and dedication…",
    image: "/uploads/2024/11/PngItem_220721-e1732950098261.png",
    rating: 4,
  },
  {
    name: "Vinod",
    role: "MD",
    company: "MyAvin.com",
    location: "Indonesia",
    text: "Since last 3 years WORK24 team working with my dream project MyAvin all in one app for Indonesia. Bhavin and Vrajal is like not only my team member but my…",
    image: "/uploads/2024/11/PngItem_220721-e1732950098261.png",
    rating: 4,
  },
  {
    name: "Reginald Go",
    role: "Chairman",
    company: "Cocotel",
    location: "Philippines",
    text: "Jitendra Dadhaniya is a very passionate & talented IT professional! We would like to thank you and WORK24 team for your service, loyalty & dedication to our company.",
    image: "/uploads/2024/11/PngItem_220721-e1732950098261.png",
    rating: 4,
  },
];

