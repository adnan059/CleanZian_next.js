import officeClean from "@/assets/images/office-clean.png";
import springClean from "@/assets/images/spring-clean.png";
import houseClean from "@/assets/images/house-clean.png";

import doctor1 from "@/assets/images/doctor1.png";
import doctor2 from "@/assets/images/doctor2.png";
import doctor3 from "@/assets/images/doctor3.png";

import blogImg1 from "@/assets/images/blogImg1.png";
import blogImg2 from "@/assets/images/blogImg2.png";
import blogImg3 from "@/assets/images/blogImg3.png";

export const headerMenuItems = [
  { menu: "home" },
  {
    menu: "about us",
    subMenu: ["our story", "our team", "mission & values"],
  },
  {
    menu: "services",
    subMenu: [
      "regular house cleaning",
      "office cleaning",
      "kitchen cleaning",
      "floor polishing",
    ],
  },
  { menu: "blog" },
  { menu: "contact" },
];

// -----------------------------------
export const serviceData = [
  {
    title: "Office Cleaning",
    desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services",
    pic: officeClean,
  },

  {
    title: "Spring Cleaning",
    desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services",
    pic: springClean,
  },

  {
    title: "House Cleaning",
    desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services",
    pic: houseClean,
  },
];

// -----------------------------------

export const teamData = [
  {
    id: 1,
    name: "Jane Doe",
    desc: "She is an expert cleaning staff member who provides thorough cleaning with precision,",
    pic: doctor1,
  },

  {
    id: 2,
    name: "John Doe",
    desc: "He is an expert cleaning staff member who provides thorough cleaning with precision,",
    pic: doctor2,
  },

  {
    id: 3,
    name: "Linda Smith",
    desc: "She is an expert cleaning staff member who provides thorough cleaning with precision,",
    pic: doctor3,
  },
];

// -----------------------------------

export const companyFeatures = [
  "vetted professionals",
  "Next day availability",
  "Standard cleaning tasks",
  "Affordable Prices",
  "Eco-friendly products",
];

// -----------------------------------

export const pricingData = [
  {
    packageName: "basic package",
    price: 59,
    packageDetails: [
      "Dusting of all surfaces",
      "Sweeping and mopping floors",
      "Vacuuming carpets and rugs",
      "Cleaning of kitchen surfaces",
      "Cleaning of bathroom surfaces",
      "Emptying trash bins",
    ],
  },

  {
    packageName: "enterprise package",
    price: 69,
    packageDetails: [
      "All services in the Basic Plan",
      "Detailed dusting",
      "Wiping down of kitchen appliances",
      "Cleaning inside the microwave",
      "Changing bed linens",
      "Spot cleaning walls and doors",
    ],
  },

  {
    packageName: "premium package",
    price: 99,
    packageDetails: [
      "All services in the Enterprise Plan",
      "Deep cleaning of kitchen appliances",
      "Cleaning baseboards, door frames, and vents",
      "Organization of closets and pantries",
      "Carpet and upholstery spot cleaning",
      "Detailed bathroom cleaning",
    ],
  },
];

// -----------------------------------

export const feedbackData = [
  {
    name: "Olivia Reynolds",
    profession: "Marketing Manager",
    feedback:
      "I’ve hired other cleaning services before, but this team stands out. They arrived right on time, came fully prepared, and cleaned my apartment from top to bottom with incredible attention to detail.",
  },
  {
    name: "Jason Miller",
    profession: "Software Engineer",
    feedback:
      "Between work and kids, I barely have time to breathe—so booking this cleaning company was a game-changer. I came home to a fresh, organized space that smelled amazing.",
  },
  {
    name: "Emily Carter",
    profession: "Operations Director",
    feedback:
      "Our office needed a deep clean before a client visit, and they totally delivered. Desks, windows, even the tiny kitchen area looked immaculate.",
  },
  {
    name: "Ryan Thompson",
    profession: "Freelance Photographer",
    feedback:
      "Not only did they clean every corner with precision, they even helped organize my pantry and folded laundry I left out. It’s that kind of thoughtful service that keeps me coming back.",
  },
];

// -----------------------------------

export const blogData = [
  {
    id: 1,
    author: "Matt Robin",
    date: "2024-01-06",
    title: "Eco-Friendly Cleaning: How We Keep Your Home Green",
    blogText:
      "Learn about our commitment to eco-friendly practices. We share the eco-conscious products",
    pic: blogImg1,
  },

  {
    id: 2,
    author: "carl hooper",
    date: "2024-03-05",
    title: "How to Maintain a Clean Home Between Professional Visits",
    blogText:
      "Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips",
    pic: blogImg2,
  },

  {
    id: 3,
    author: "Oliver John",
    date: "2024-12-09",
    title: "The Benefits of Regular Professional Cleaning",
    blogText:
      "Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air",
    pic: blogImg3,
  },
];
