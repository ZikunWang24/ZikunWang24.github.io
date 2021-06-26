/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "ZikunWang24",
  title: "Hi all, I'm Zikun",
  subTitle: emoji(
    "Software Development Engineer 🧑‍💻 Deep-Learning Learner 🤖 DevOps Engineering Apprentice 🧑‍🎓 文艺青年 💡 Passionate Soccer Fan ⚽ Life-long Scholar and Citizen ❤️"
  ),
  resumeLink:
    "https://drive.google.com/file/d/18BGIU97H_zkWy_A7jmC1sCUijmO6liA0/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ZikunWang24",
  linkedin: "https://www.linkedin.com/in/zikunwang/",
  gmail: "z1wang@ucsd.edu",
  instagram:"https://www.instagram.com/kunkun0415/",
  facebook: "https://www.facebook.com/zikun.wang.56",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: emoji("What I Do 🧑🏻‍💻"),
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly-interactive and beautifully-designed web and mobile applications"
    ),
    emoji("⚡ Help build Continous Intergation/Continous Delivery Pipelines"),
    emoji(
      "⚡ Learn the skills and techniques of Deep Learning"
    ),
    emoji(
      "⚡ Write creative materials"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Writing",
      fontAwesomeClassname: "fas fa-user-edit"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UC San Diego",
      logo: require("./assets/images/ucsd.jpeg"),
      subHeader: "BS/MS in Computer Science",
      duration: "September 2017 - June 2022",
      desc: "5-year Program for BS and MS degree, affiliated with Jacobs School of Engineering",
      descBullets: [
        "Major GPA 3.85+",
        "Cum Laude",
        "Marshall College Honor Program Member"
      ]
    },
    {
      schoolName: "Guangzhou No.6 High School",
      logo: require("./assets/images/gzlz.png"),
      subHeader: "High School Diploma",
      duration: "September 2014 - June 2017"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Writing",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine learning",
      progressPercentage: "50%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Tencent",
      companylogo: require("./assets/images/tencent.png"),
      date: "June 2021 – Present",
      desc: "Based at HQ in Shenzhen, China",
      descBullets: [
        "Work at CSIG Branch for Tencent Cloud Services",
        "Create scalable and realiable software systems",
        "Apply the techniques and principles in DevOps"
      ]
    },
    {
      role: "Content Marketing Officier Intern",
      company: "Overseas Students Services",
      companylogo: require("./assets/images/ossc.png"),
      date: "May 2021 – Present",
      desc: "Remote",
      descBullets: [
        "Write creative materials for marketing",
        "Publish articles on Wechat Official Account Platform, Little Red Book and Zhihu"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/grosafe.JPG"),
      projectName: "Grosafe",
      projectDesc: "A grocery risk evaluation App to help people shop safely in the pandemic",
      footerLink: [
        {
          name: "View Demo Video",
          url: "https://drive.google.com/file/d/1YRnobqL4EPvNi7wL6PoMIVhh6Yd3vOSq/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/corona.jpeg"),
      projectName: "Corona Data",
      projectDesc: "An App providing real-time data of COVID-19 around the world",
      footerLink: [
        {
          name: "View Demo Video",
          url: "https://drive.google.com/file/d/1pjfTV5hPMfFtmZM8FKZy_ko7HVRLk5Mn/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards And Certifications 🏆 "),
  subtitle:
    "Some Cool Stuff that I have done",

  achievementsCards: [
    {
      title: "COVID-19 Data Challenge: Navigating Life and Work in Border Communities",
      subtitle:
        "Earned the Second Prize; refer to Project GroSafe above for more info",
      image: require("./assets/images/ucsd.jpeg"),
      footerLink: [
        {
          name: "View Competition Page",
          url: "https://mexico.ucsd.edu/initiatives/border-solutions/data-challenge.html"
        }
      ]
    },
    {
      title: "Coursera Deep Learning Course Certificates",
      subtitle:
        "Certificates in Course 'Structuring Machine Learning Projects', 'Neural Networks and Deep Learning' and 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization'",
      image: require("./assets/images/cour.png"),
      footerLink: [
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: emoji("Blogs and Articles 📖"),
  subtitle:
    "I love sharing my thoughts and ideas by writing (All articles below are written in Chinese)",

  blogs: [
    {
      url: "https://mp.weixin.qq.com/s/L66sGH3BCAznevvB6589Qw",
      title: "Random Thoughts after Watching Some Films",
      description:
        "Share some thoughts and ideas about feminism."
    },
    {
      url: "https://mp.weixin.qq.com/s/y23tjbNkuUtWL-74Y3aA8g",
      title: "That Night",
      description:
        "An article I wrote when I was in middle school, telling the story of me, a young student, studying at late night."
    },
    {
      url: "https://mp.weixin.qq.com/s/l1WAQyZVNP4wGiO9N4BKxA",
      title: "What is it like to study Computer Science at UCSD",
      description:
        "Introduce UC San Diego's Most Competitive Major--Computer Science."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project/job opportunity or just want to say Hi? My Inbox is open for all!",
  email_address: "z1wang@ucsd.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
