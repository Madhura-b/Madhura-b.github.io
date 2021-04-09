/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import logoImg from "./assets/images/uflLogo.png";
import vtuImg from "./assets/images/vtu.jpg";
import infLogo from "./assets/images/infrrdLogo.png";
import awsCertificate from "./assets/images/aws.png";
import dlCertificaite from "./assets/images/DLCertificate.png";
import mlCertificate from "./assets/images/mlCertificate.png";
import webCertificate from "./assets/images/webCertificate.jpg";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Madhura Basavaraju",
  title: "Who I am",
  subTitle: (
    "I'm Madhura, a passionate Full Stack Software Developer. Seasoned in designing Web applications with JavaScript / Reactjs / Nodejs / .NET / C# and some other frameworks with a focus on crafting elegant and user-friendly experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1CXqq7iOe_tju7_XxSUB5gj35BK3ELmui/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Madhura-b",
  linkedin: "https://www.linkedin.com/in/madhura-b107/",
  gmail: "madhurab107@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
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
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fa fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: logoImg,
      // logo:require("./assets/images/uflLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2019 - May 2021",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Relevant Courses: Advanced Data Structures, Analysis of Algorithms, Distributed Operating Systems, Machine Learning,Neural Networks, Programming Language Principles"]
    },
    {
      schoolName: "Visvesvaraya Technological University",
      logo: vtuImg,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2014 - July 2018",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Relevant Courses: Data Structures, Object Oriented Programming, Database Management System, Programming the Web,Unix and Shell Programming"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Infrrd",
      companylogo: infLogo,
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Infrrd",
      companylogo: infLogo,
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      
      projectName: "Twitter Clone",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "See Project",
          url: "https://github.com/Madhura-b/Twitter-Engine"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: twitterLogo,
      projectName: "Twitter Clone",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "See Project",
          url: "https://github.com/Madhura-b/Twitter-Engine"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: twitterLogo,
      projectName: "Twitter Clone",
      projectDesc: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
      footerLink: [
        {
          name: "See Project",
          url: "https://github.com/Madhura-b/Twitter-Engine"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "See Project",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications and Awards Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Fundamentals: Going Cloud-Native",
      image: awsCertificate,
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://www.coursera.org/account/accomplishments/certificate/36GEV4YW5SDK"
        },
      ]
    },
    {
      title: "Deep Learning Specialization",
      image: dlCertificaite,
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://www.coursera.org/account/accomplishments/specialization/certificate/24S5DBUSJVC4"
        }
      ]
    },

    {
      title: "Introduction to Machine Learning ",
      image: mlCertificate,
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://www.coursera.org/account/accomplishments/verify/E86LL6TRTFXK"
        }
      ]
    },
    {
      title: "Web Development Bootcamp",
      image: webCertificate,
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/1LhKOeMiVNWCn9rRL-yKfL4p8f9cIsAPQ/view?usp=sharing"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url:
//         "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "Hi podcasting",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "3527455321",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails
};
