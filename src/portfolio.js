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
    "I'm Madhura, a passionate Full Stack Software Developer. Creative expression is what lights me up. I am seasoned in designing Web applications with JavaScript / Reactjs / Nodejs / .NET / C# and few other frameworks with a focus on crafting elegant exceptional digital experiences."
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
  subTitle: "FULL STACK DEVELOPER INTERESTED IN EXPLORING THE ENTIRE SPECTRUM OF WEB APP DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Create highly interactive web applications using best practices in a variety of different languages, platforms and frameworks."
    ),
    emoji("⚡Few technologies I have been working with recently include JavaScript, React, Node.js, Java, .Net, C#, SQL, MongoDB."),
    emoji(
      "⚡ Integration of third party services such as Docker/ Kuberenetes / AWS. "
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
      desc: " Awarded the Academic Achievement Award Scholarship",
      descBullets: [
        "Relevant Courses: Advanced Data Structures, Analysis of Algorithms, Distributed Operating Systems, Machine Learning,Neural Networks, Programming Language Principles."]
    },
    {
      schoolName: "Visvesvaraya Technological University",
      logo: vtuImg,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2014 - July 2018",
      desc:
        "Ranked top 15% in the program.",
      descBullets: ["Relevant Courses: Data Structures, Object Oriented Programming, Database Management System, Programming the Web, Unix and Shell Programming"]
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
      date: "Aug 2018 2015 – May 2019",
      descBullets: [
        "Worked in an Agile environment to build RESTful Web APIs on .NET framework to fetch organizational data from end points. Interfaced with an external SQL Server.",
        "Developed and maintained code for in-house websites primarily through Model-view-controller(MVC) paradigm of designing web applications. Implemented data access layer using Entity Framework Code First approach.","Played a prominent role in developing test cases. Analyzed and deployed fixes to various product issues."
      ]
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
  title: "Some Things I've Built",
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

//Blogs Section

const blogSection = {
  title: "Some Things I've Built",
  subtitle:
    "Trying to push the outer bounds of creative comfort zone.",

  blogs: [
    {
      url:
        "https://github.com/Madhura-b/Twitter-Engine",
      title: "Twitter Clone",
      description:
        "A Twitter-like platform to tweet, subscribe to followers, get tagged, activate live reloading of news feed and more. Achieved simulation of over 1000 independent clients and a server."
    },
    {
      url:
        "https://github.com/Madhura-b/Compiler-Design",
      title: " A Compiler",
      description:
        "A compiler for a custom programming language built from scratch. Procure the java byte code and run on any machine with a JVM. 95% testing success rate."
    },
    {
      url:
        "https://github.com/Madhura-b/Social-Media-MERN",
      title: "Social Media - Memories",
      description:
        "A web app for visualizing and posting special events of life. Developed and maintained using JavaScript, React, MongoDB, Node.js."
    },
    {
      url: "https://github.com/Madhura-b/Job-Scheduling",
      title: "Task Manager",
      description:
        "A system that stores a large number of records for easy retrieval. Implemented a scheduling algorithm to provide the most cost-eective way of performing operations on these records. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

//Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ],
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

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
  blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails
};
