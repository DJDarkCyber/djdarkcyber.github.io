/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Daniel Joe⚡Portfolio",
  description:
    "Driven by a passion for AI and full-stack development. Skilled in building scalable, AI-powered web applications with Django and React. Currently exploring the world of ethical hacking and pentesting to deepen my backend expertise.",
  og: {
    title: "Daniel Joe Portfolio",
    type: "website",
    url: "http://daniel-joe437.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Daniel Joe",
  logo_name: "Daniel Joe",
  nickname: "Software Developer 💻",
  subTitle:
    "Driven by a passion for AI and full-stack development. Skilled in building scalable, AI-powered web applications with Django and React. Also have experience in the world of ethical hacking and pentesting to deepen my backend expertise.",
  resumeLink: "https://djdarkcyber.github.io/My-Resume/",
  githubProfile: "https://github.com/DJDarkCyber",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/DJDarkCyber",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/daniel-joe-843228256/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:rdjoe2004@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   fontAwesomeIcon: "fa-instagram", 
  //   backgroundColor: "#E4405F",
  // },
  // {
  //   fontAwesomeIcon: "fa-hashnode",
  //   backgroundColor: "#1877F2",
  // },
  {
    name: "X-Twitter",
    link: "https://x.com/Mr__437",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "AI, ML & Data Analysis",
      fileName: "DataScienceImg",
      skills: [
        "🚀 Building scalable AI models for real-world applications",
        "⚡ Hands-on experience in developing and deploying ML-powered web solutions",
        "🔍 Exploring red team pentesting and advanced backend systems for robust security",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Data Analysis & Visualization",
          fontAwesomeClassname: "carbon:data-volume",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "devicon-plain:django-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building dynamic front-end interfaces using ReactJS",
        "⚡ Deploying and managing web applications on cloud platforms",
        "⚡ Crafting robust back-end systems with Django, Django Rest Framework, PostgreSQL, and SQLite",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "devicon:nextjs-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "Tailwind css",
          fontAwesomeClassname: "devicon:tailwindcss",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "devicon:firebase-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "devicon:express",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "API",
          fontAwesomeClassname: "arcticons:api-tester",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "devicon:vercel-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "devicon:netlify-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },

        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:figma",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
      ],
    },

    {
      title: "Red Teamer & Pentester",
      fileName: "FullStackImg",
      skills: [
        "⚡ Hands-on experience in red team hacking and penetration testing",
        "⚡ Proficient in Python scripting for automation and exploits",
        "⚡ Skilled in network analysis and security monitoring with Splunk",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tryhackme",
          fontAwesomeClassname: "arcticons:tryhackme",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Splunk",
          fontAwesomeClassname: "simple-icons:splunk",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hack the box",
          fontAwesomeClassname: "simple-icons:hackthebox",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kali linux",
          fontAwesomeClassname: "devicon:kalilinux-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "skill-icons:windows-light",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },


    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "logos:figma",
    //       style: {
    //         color: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "logos:adobe-xd",
    //       style: {
    //         color: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "logos:adobe-illustrator",
    //       style: {
    //         color: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Canva",
    //       fontAwesomeClassname: "simple-icons:canva",
    //       style: {
    //         color: "",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#000000",
      },
      profileLink: "https://github.com/DJDarkCyber",
    },
    {
      siteName: "TryHackMe",
      iconifyClassname: "arcticons:tryhackme",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://tryhackme.com/r/p/Mr437",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "V.V College Of Engineering",
      subtitle: "B.E. - 8.32   CGPA",
      logo_path: "vvm.jpg",
      duration: "2021 - 2025",
      descriptions: [
        "🔺 I studied software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "📈 Apart from this, I have done courses on Machine Learning, Data Analysis, Artificial Intelligence, Ethical Hacking, Web Development and Networks.",
      ],
      website_link: "https://www.vvcoe.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python course",
      subtitle: "Udemy",
      logo_path: "udemy-logo.jpg",
      certificate_link: "",
      alt_name: "Stanford University",
      color_code: "#ffffff",
    },
    {
      title: "Machine Learning",
      subtitle: "Kaggle",
      logo_path: "kaggle.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Learn Python & Ethical Hacking",
      subtitle: "Udemy",
      logo_path: "zsecurity.webp",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#ffffff",
    },
    {
      title: "Data Science",
      subtitle: "Udemy",
      logo_path: "udemy-logo.jpg",
      certificate_link: "",
      alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "Machine Learning with Python",
      subtitle: "Udemy",
      logo_path: "udemy-logo.jpg",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#ffffff",
    },
    {
      title: "Big Data",
      subtitle: "Infosys",
      logo_path: "Infosys_logo.png",
      certificate_link: "",
      alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "ReactJS",
      subtitle: "Udemy",
      logo_path: "udemy-logo.jpg",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#ffffff",
    },
    {
      title: "Ethical Hacking",
      subtitle: "Udemy",
      logo_path: "zsecurity.webp",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Data Science",
      subtitle: "Udemy",
      logo_path: "udemy-logo.jpg",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Pytorch",
      subtitle: "Udemy",
      logo_path: "udemy-logo.jpg",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#ffffff",
    },
    {
      title: "Tensorflow",
      subtitle: "Udemy",
      logo_path: "udemy-logo.jpg",
      certificate_link: "",
      alt_name: "NPTEL",
      color_code: "#ffffff",
    },
    {
      title: "Django",
      subtitle: "Udemy",
      logo_path: "udemy-logo.jpg",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work / Internship",
  description:
    "As a Software Engineer with experience in a corporate environment, I'm always open to exploring new opportunities that align with my skills and expertise. If you have any projects, roles, or initiatives that could benefit from my background, I'd be thrilled to connect and discuss how I can bring value to your team and organization.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Looking for opportunities",
          company: "",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "Currently Present in ",
          location: "Chennai / Tirunelveli, Tamil Nadu, India",
          description:
            "Constantly honing my skills every single day. If you've made it this far in exploring my portfolio, it might just mean there's an exciting opportunity on your mind. I'd love to connect and chat about how I can bring value to your team or project. Let's take that next step together in my career journey!",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Networking Intern",
          company: "KaaShiv InfoTech",
          company_url: "https://www.kaashivinfotech.com/",
          logo_path: "tiktok_logo.png",
          duration: "July 2024",
          location: "KaaShiv InfoTech, Chennai",
          description:
            "Attended a networking internship where I collaborated with peers to drive concept development and client engagement for various tech solutions, including apps, web platforms, and design projects. Demonstrated leadership, effective teamwork, and multitasking skills throughout. Additionally, I contributed to developing and deploying projects, focusing on coding, testing, and improving user experience.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Department Magazine Publication",
          company: "Computer Science and Engineering Department",
          company_url: "https://vvcoe.org/",
          location:
            "V V College of Engineering, V V Nagar, Arasoor",
          description:
            "Assisted my department in creating and publishing a magazine for the CSE department, contributing to content creation, design, and coordination, while enhancing team collaboration and project management skills.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I’ve got hands-on experience with a range of the latest technologies! My expertise includes building robust Machine Learning models, Python-based Data Science projects, and crafting Responsive Websites/Web Apps. I also specialize in creating powerful full-stack applications using React.js and Django REST APIs. Beyond that, I dive deep into the realms of AI, Ethical Hacking, and Penetration Testing, with a focus on Red Team operations. I love exploring how data-driven insights and secure systems can transform tech landscapes.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on AI research papers.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "Lumbar Spine Degenerative Classification",
      createdAt: "",
      description:
        "Paper about research on medical feild related to lumbar spine degenerative classification problems.",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactMail.png",
    description: (
      <span>
        Be it for a project, a part-time role, a presentation, or simply to say
        hello, I'm always happy and looking forward to hearing from you.
        <br /> I can help you with Python, ML, Deep Learning, Data Analysis, Web Dev and
        Pentesting.
      </span>
    ),
  },
  blogSection: {
    title: "Aspiration",
    subtitle:
      "I am actively seeking thrilling opportunities where I can contribute and grow. Explore my GitHub to discover my skills and projects, and feel free to reach out if you have a role that aligns with my talents and aspirations.",
    link: "https://github.com/DJDarkCyber",
    avatar_image_path: "code.png",
  },
  addressSection: {
    title: "Connect",
    subtitle:
      "Feel free to reach out if you're looking for a Developer or designer, or simply want to connect.",
    avatar_image_path: "",
    location_map_link: "https://github.com/DJDarkCyber",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

console.log(
  "%c Designed and Developed by Daniel Joe",
  "background-image: linear-gradient(90deg,#abc4ff,#D5CFD6); color: black;font-weight:1000;font-size:1rem; padding:20px;"
);

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
