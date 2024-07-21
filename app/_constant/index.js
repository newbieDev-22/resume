import movieBooking from "../../public/images/projects/movie-booking.png";
import radomtoon from "../../public/images/projects/radomtoon.png";

export const experienceData = [
  {
    position: "Senior Data Scientist",
    company: "The Gang Technology",
    time: "Feb 2022 - Feb 2024",
    work: "Analytical skills fuel development of safety-focused computer vision models and machine learning solutions. Data analysis and visualization skills uncover valuable insights. Strong communication and teamwork facilitate collaboration across disciplines.",
  },
  {
    position: "Mechanical Engineer",
    company: "AGC chemicals",
    time: "Sep 2017 - Sep 2020",
    work: "Results-driven mechanical engineer. Maintained rotating equipment, piping, and spare parts. Led improvement projects to optimize plant operations with preventive/corrective maintenance and root cause analysis (increasing MTBF).",
  },
  {
    position: "Mechanical Engineer",
    company: "Sony technology (Thailand)",
    time: "Jan 2017 - Aug 2017",
    work: "Thriving on problem-solving, I leveraged my skills as a mechanical engineer to identify root causes of product issues and implement improvements. This experience honed my analytical abilities and ability to translate findings into actionable solutions.",
  },
];

export const educationData = [
  {
    type: "Software Park Thailand Code Camp 17th",
    time: "Mar 2024 - July 2024",
    place: "Code Camp",
    info: "Fast-tracked my full-stack development skills through an intensive bootcamp, mastering front-end technologies (HTML, CSS, JavaScript) to build dynamic user interfaces and leveraging React.js for user-friendly web apps. Additionally, I gained back-end expertise with Express.js for robust APIs and utilized MySQL for efficient data management.",
  },
  {
    type: "Master of Statistic",
    time: "2020 - 2022",
    place: "Chulalongkorn university",
    info: `GPA 3.92 : Statistics degree unlocks advanced data analysis. 
    Master probability, inference, and modeling (regression). 
    Potentially specialize in data science or machine learning. 
    Go beyond basics, sharpen your analytical mind for complex data problems, become a data-driven asset.`,
  },
  {
    type: "Bachelor of Mechanical Engineering",
    time: "2012 - 2016",
    place: `King Mongkut's Institute of Technology Ladkrabang`,
    info: "GPA 3.29",
  },
];

export const projectData = [
  {
    id: 1,
    title: "Movie Booking Application",
    summary: `
Built a full-stack movie booking application that empowers users to browse movies, 
view real-time showtimes, and book tickets effortlessly. It also streamlines theater administration 
by providing features to add new movies and update showtimes, 
ensuring a smooth experience for both moviegoers and theaters.`,
    img: movieBooking,
    frontRepo: "https://github.com/newbieDev-22/movie-booking-frontend",
    backRepo: "https://github.com/newbieDev-22/movie-booking-backend",
    link: "https://movie-booking-frontend-three.vercel.app/",
    testUser: "a@mail.com // 123456",
  },
  {
    id: 2,
    title: "Radomtoon's Crowdfunding Platform",
    summary: `Built "Radomtoon," a secure crowdfunding platform for Thailand, facilitating creative 
    project funding by connecting creators and supporters. Leveraged Figma 
    for design, ER diagrams for data modeling, and React with Tailwind/DaisyUI for a user-friendly 
    front-end. Employed Zustand for state management and ensured secure back-end with Express.js, JWT, 
    and bcrypt. Utilized Git for version control and Scrum methodologies for collaboration. 
    Successfully deployed the platform for seamless user access.`,
    img: radomtoon,
    frontRepo: "https://github.com/newbieDev-22/radomtoon-frontend",
    backRepo: "https://github.com/newbieDev-22/radomtoon-backend",
    link: "https://radomtoon-frontend.vercel.app/",
    testUser: "radomtoon4@outlook.com // 123456",
  },
];

export const frontEndSkillList = [
  "HTML",
  "CSS",
  "React",
  "React",
  "JavaScript",
  "Axios (RESTful API)",
  "Zustand (Store Management)",
  "Stripe (Payment Gateway)",
  "Joi (Data Validation)",
  "Tailwind CSS (Styling Utility)",
];

export const backEndSkillList = [
  "CORS",
  "Express",
  "Prisma (ORM)",
  "Bcrypt (Password Hashing)",
  "Multer (File Upload Handling)",
  "Node Cron (Job Scheduling)",
  "Nodemailer (Email Service)",
  "Json Web Token (Authentication)",
];

export const otherSkillList = [
  "Git",
  "Python",
  "Scrum",
  "Machine Learning",
  "Statistical Analysis",
  "MySQL (Relational Database)",
];
