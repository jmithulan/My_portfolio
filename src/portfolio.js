/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jeyavinthan Mithulan",
  title: "Hi all, I'm Jeyavinthan Mithulan",
  subTitle: emoji(
    "IT Student | Aspiring App Developer\nI'm Jeyavinthan Mithulan, an IT student passionate about mobile and app development. I enjoy building practical applications and constantly learning new technologies to bring my ideas to life."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true
  
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jmithulan",
  linkedin: "https://www.linkedin.com/in/mithulan-jeyavinthan-a2652a305",
  gmail: "jeyamithulan@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/Jeyamithulan?mibextid=wwXIfr",
  medium: "",
  instagram: "https://www.instagram.com/jeyamithulan?igsh=YWxlYXZsMXRueThv&utm_source=qr",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, // Hide work experience section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false // Hide open source section
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of my personal and academic projects.",
  projects: [
    {
      projectName: "Car Booking System",
      projectDesc: "A responsive car booking system where users can book vehicles with key features like availability checking and booking history.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Mufaris32/car_booking_system"
        }
      ]
    },
    {
      projectName: "Fun Facts",
      projectDesc: "A simple app that displays random fun facts using JavaScript and external APIs.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Mufaris32/Fun-Facts"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",
  achievementsCards: [],
  display: false // Hide achievement section
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Hide blogs section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Hide talks section
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false // Hide podcast section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  image: require("./WhatsApp Image 2025-06-15 at 01.09.58_d4ca6750.jpg"),
  display: true
  
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Reach out to me via LinkedIn.",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
