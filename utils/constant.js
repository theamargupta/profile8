// Skills data - centralized for reuse
export const skills = [
  {
    id: 'HTML5',
    name: 'HTML5',
    icon: 'SiHtml5',
    color: {
      hex: '#e34f26'
    }
  },
  {
    id: 'CSS3',
    name: 'CSS3',
    icon: 'SiCss3',
    color: {
      hex: '#1572b6'
    }
  },
  {
    id: 'JavaScript',
    name: 'JavaScript',
    icon: 'SiJavascript',
    color: {
      hex: '#f7df1e'
    }
  },
  {
    id: 'Typescript',
    name: 'Typescript',
    icon: 'SiTypescript',
    color: {
      hex: '#3178c6'
    }
  },
  {
    id: 'React',
    name: 'React',
    icon: 'SiReact',
    color: {
      hex: '#61dafb'
    }
  },
  {
    id: 'Github',
    name: 'Github',
    icon: 'SiGithub',
    color: null
  },
  {
    id: 'Next',
    name: 'Next.js',
    icon: 'SiNextdotjs',
    color: null
  },
  {
    id: 'Firebase',
    name: 'Firebase',
    icon: 'SiFirebase',
    color: {
      hex: '#f7df1e'
    }
  },
  {
    id: 'Graphql',
    name: 'Graphql',
    icon: 'SiGraphql',
    color: {
      hex: '#de33a6'
    }
  },
  {
    id: 'Heroku',
    name: 'Heroku',
    icon: 'SiHeroku',
    color: {
      hex: '#430098'
    }
  },
  {
    id: 'Nuxt',
    name: 'Nuxt.js',
    icon: 'SiNuxtdotjs',
    color: {
      hex: '#00bd85'
    }
  },
  {
    id: 'Vue',
    name: 'Vue.js',
    icon: 'SiVuedotjs',
    color: {
      hex: '#3fb27f'
    }
  },
  {
    id: 'Vuex',
    name: 'Vuex',
    icon: 'SiVuedotjs',
    color: {
      hex: '#3fb984'
    }
  },
  {
    id: 'Redux',
    name: 'Redux',
    icon: 'SiRedux',
    color: {
      hex: '#764bbc'
    }
  },
  {
    id: 'Material',
    name: 'Material Ui',
    icon: 'SiMui',
    color: {
      hex: '#007dc5'
    }
  },
  {
    id: 'Netlify',
    name: 'Netlify',
    icon: 'SiNetlify',
    color: {
      hex: '#008ab5'
    }
  },
  {
    id: 'Styled',
    name: 'Styled Components',
    icon: 'SiStyledcomponents',
    color: {
      hex: '#dd877a'
    }
  },
  {
    id: 'Auth0',
    name: 'Auth0',
    icon: 'SiAuth0',
    color: {
      hex: '#e45123'
    }
  },
  {
    id: 'Tailwind',
    name: 'Tailwind CSS',
    icon: 'SiTailwindcss',
    color: {
      hex: '#007dc5'
    }
  },
  {
    id: 'Vercel',
    name: 'Vercel',
    icon: 'SiVercel',
    color: {
      hex: '#000000'
    }
  },
  {
    id: 'Bootstrap',
    name: 'Bootstrap',
    icon: 'SiBootstrap',
    color: {
      hex: '#563d7c'
    }
  },
  {
    id: 'Supabase',
    name: 'Supabase',
    icon: 'SiSupabase',
    color: {
      hex: '#34B27B'
    }
  },
  {
    id: 'Google',
    name: 'Google',
    icon: 'SiGoogle',
    color: {
      hex: '#FF0000'
    }
  }
];

// Helper function to get skills by IDs
const getSkillsByIds = (skillIds) => {
  return skillIds
    .map((id) => skills.find((skill) => skill.id === id))
    .filter(Boolean);
};

export const varriable = {
  linkedin: {
    href: 'https://www.linkedin.com/in/amar-gupta-2684a1157/'
  },
  github: {
    href: 'https://github.com/theamargupta'
  },
  skills,
  socials: [
    {
      id: 'ckse9o7nkd1c70b39p7e58cmu',
      name: 'Github',
      color: null,
      href: 'https://github.com/theamargupta',
      icon: 'SiGithub'
    },
    {
      id: 'ckse9ox48d1df0b39qvrvr9v7',
      name: 'Linkedin',
      color: '#0A66C2',
      href: 'https://www.linkedin.com/in/amar-gupta-2684a1157/',
      icon: 'SiLinkedin'
    },
    {
      id: 'ckse9pe3cd40c0c815r0fzqen',
      name: 'Facebook',
      color: '#1DA1F2',
      href: 'https://www.facebook.com/amarlalaji',
      icon: 'SiFacebook'
    },
    {
      id: 'ckse9pvu8d01f0b85f6bskx60',
      name: 'Instagram',
      color: '#9146FF',
      href: 'https://www.instagram.com/amarguptta/',
      icon: 'SiInstagram'
    },
    {
      id: 'ckse9qdl4cyyl0c883ymddb82',
      name: 'Google',
      color: '#FF0000',
      href: 'mailto:theamargupta.tech@gmail.com',
      icon: 'SiGoogle'
    }
  ],
  experiences: [
    {
      id: 'cl3bftclk2e6w0czshoxbopjz',
      title: 'React Web Developer & Deployment Specialist',
      jobTitle: 'Frontend Developer',
      company: 'AJR Info Systems Pvt. Ltd',
      duration: null,
      location: 'Delhi',
      description: 'Responsible for building Single page applications',
      as: 'Full Time WFH',
      date: ['2022-08-01']
    },
    {
      id: 'cl3bftclk2e6w0czshoxbopjz',
      title: 'Software Engineer',
      jobTitle: 'Frontend Developer',
      company: 'Spark Eighteen Pvt Ltd',
      duration: '6 mos',
      location: 'Delhi',
      description: 'Responsible for building Single page applications',
      as: 'Full Time WFH',
      date: ['2021-12-01', '2022-08-01']
    },
    {
      id: 'ckrylir80gv5s0b93hvtwk22m',
      title: 'LoudCloud Systems Pvt. Ltd.',
      jobTitle: 'Software Engineer',
      company: 'LoudCloud Systems',
      duration: null,
      location: 'Mumbai, Maharashtra, India',
      description:
        'Responsible for building Single page applications and websites using React/Redux and in Vue',
      as: 'Full-time WFH',
      date: ['2020-12-01', '2021-10-01']
    },
    {
      id: 'ckseacfkgd5sz0c81ng8o8y5l',
      title: 'Les Transformations Pvt. Ltd.',
      jobTitle: 'Frontend Developer',
      company: 'Les Transformations',
      duration: '3 mos',
      location: 'Gurugram, Haryana, India',
      description: 'Responsible for building Single page applications',
      as: 'Full-time WFH',
      date: ['2020-09-01', '2020-11-30']
    }
  ],
  projects: [
    {
      id: '1',
      title: 'Devfrend Startup',
      tools: getSkillsByIds([
        'Next',
        'Bootstrap',
        'React',
        'JavaScript',
        'Supabase',
        'Vercel'
      ]),
      description: `Devfrend Web Solutions is a high-velocity web development startup offering premium websites for just $99. Built using Next.js, Redux, and Styled Components, the platform delivers fast, SEO-optimized, mobile-friendly websites in just 1-2 days. With a focus on entrepreneurs, small businesses, and global startups, Devfrend streamlines development using efficient templates and modern tech to maintain quality while keeping costs low. Integrated with Auth0 for secure authentication and deployed via Vercel for blazing performance, Devfrend has served 500+ clients across the USA, UK, Australia, and Canada.`,
      demoImg:
        'https://i.ibb.co/B5FpV0gL/Screenshot-2025-07-31-at-3-20-33-PM.png',
      live: 'http://devfrend.com/',
      feature: true,
      challenges: [
        {
          title: 'Rapid Development Pipeline',
          solution:
            'Implemented a streamlined template system with reusable components and automated deployment processes to deliver websites in 1-2 days.'
        },
        {
          title: 'Cost-Effective Solutions',
          solution:
            'Optimized development workflow using efficient tech stack and templates to maintain $99 pricing while ensuring high quality.'
        },
        {
          title: 'Global Scalability',
          solution:
            "Leveraged Vercel's global CDN and Supabase for international client support across USA, UK, Australia, and Canada."
        }
      ],
      keyFeatures: [
        'Lightning-fast website delivery (1-2 days)',
        'Premium quality at $99 price point',
        'SEO-optimized and mobile-responsive',
        'Secure authentication system',
        'Global CDN deployment',
        'Template-based rapid development',
        'Multi-region client support'
      ],
      architecture:
        'Built with Next.js for server-side rendering and optimal performance, integrated with Supabase for backend services and authentication, deployed on Vercel for global accessibility and speed.'
    },
    {
      id: '2',
      title: 'InvenSync360',
      tools: getSkillsByIds([
        'Next',
        'React',
        'Tailwind',
        'JavaScript',
        'Google',
        'Vercel'
      ]),
      description: `InvenSync360 is a modern, real-time inventory and billing automation tool designed for small and medium-sized businesses. Built with Next.js, React, and TailwindCSS, it offers seamless inventory tracking, customer/vendor management, PDF billing, and Google Sheets integration. Featuring a sleek analytics dashboard and secure login system via NextAuth, it's optimized for speed, usability, and instant deployment.`,
      demoImg:
        'https://i.ibb.co/Dg7PJD41/Screenshot-2025-07-31-at-3-27-03-PM.png',
      live: 'https://inven-sync360.vercel.app/',
      feature: true,
      challenges: [
        {
          title: 'Real-Time Data Sync',
          solution:
            'Integrated Google Sheets API for two-way real-time synchronization with external spreadsheets, eliminating manual data exports.'
        },
        {
          title: 'Professional Billing & Reporting',
          solution:
            'Used jsPDF and AutoTable to create downloadable PDFs for invoices and purchase orders with clean formatting.'
        },
        {
          title: 'Dynamic Analytics Dashboard',
          solution:
            'Built reusable hooks and state logic to compute real-time metrics like revenue, profit, inventory cost, and pending payments.'
        }
      ],
      keyFeatures: [
        'Real-time inventory and billing dashboard',
        'Two-way Google Sheets sync',
        'Customer and vendor management',
        'Sales and purchase invoicing with PDF export',
        'Analytics: revenue, profit, expenses, and stock value',
        'NextAuth-powered secure login system',
        'Responsive UI with TailwindCSS'
      ],
      architecture:
        'Built using the Next.js App Router with React and TailwindCSS, integrated with Google Sheets API for sync. Authentication is handled via NextAuth. Export capabilities implemented using jsPDF and AutoTable. Deployed on Vercel for instant global accessibility.'
    },
    {
      id: '3',
      title: 'Ecommerce Seller Admin Panel',
      tools: getSkillsByIds([
        'React',
        'Redux',
        'Auth0',
        'GraphQL',
        'Material UI',
        'JavaScript',
        'Vercel'
      ]),
      description: `The Ecommerce Seller Admin Panel is a feature-rich dashboard built for multichannel sellers managing products across Flipkart, Amazon, Meesho, and more. Designed with React, Material UI, and Redux, it allows sellers to manage inventory, process returns, generate bills, and export data. Integrated with Auth0 for secure login, and GraphQL for efficient data flow, this system helps ecommerce sellers operate at scale with precision.`,
      demoImg:
        'https://i.ibb.co/bgTmMw8B/Screenshot-2025-07-31-at-5-15-58-PM.png',
      live: 'https://ecomadmin.vercel.app',
      feature: true,
      challenges: [
        {
          title: 'Multi-Marketplace Complexity',
          solution:
            'Implemented separate views and filters for Flipkart, Amazon, Meesho, and other channels to allow sellers to isolate and analyze data independently.'
        },
        {
          title: 'Large-Scale Inventory Handling',
          solution:
            'Utilized React Virtualized and MUI Data Grid to enable smooth performance while rendering thousands of rows with advanced filters and CSV export.'
        },
        {
          title: 'Export & Data Interoperability',
          solution:
            'Built CSV, Excel, and PDF export features using PapaParse, jsPDF, and FileSaver.js for end-to-end reconciliation and reporting.'
        }
      ],
      keyFeatures: [
        'Multi-channel sales tracking (Flipkart, Amazon, Meesho)',
        'Sales, returns, and payments view with date filters',
        'Inventory listing with SKU, order ID, invoice amount',
        'Data export in CSV, Excel, PDF',
        'Responsive sidebar navigation with icons',
        'Secure login via Auth0',
        'Advanced filtering and virtualized grid for large datasets'
      ],
      architecture:
        'Built with React 17 and Redux Toolkit for state management. Auth0 handles authentication, while Material UI provides a consistent responsive interface. GraphQL is used for structured querying, and data exports are handled using PapaParse and jsPDF. Deployed on Vercel for instant scalability.'
    },
    {
      id: 'ckrylfipkguz90b93u2q265ma',
      title: 'Vue Dashboard',
      description:
        'Crafted a sleek Vue.js dashboard using Vue 3, enhanced with custom CSS for unique visual appeal.\n Seamlessly integrated data visualization and user interaction, delivering an intuitive user experience.\n Engineered for scalability and performance, promising a responsive and dynamic interface.',
      repo: 'https://github.com/theamargupta/vue-dash',
      live: 'https://vue-dash-one.vercel.app/',
      feature: false
    },
    {
      id: 'ckrylfipkguz90b93u2q265ma',
      title: 'Interview Assignment Dashbaord',
      description:
        'Designed an interview assignment dashboard with Redux, React Router 6, and React, optimized as a Progressive Web App (PWA) for offline access.\n Seamlessly deployed on Vercel, styled with Tailwind CSS, and enhanced with Typescript for robust performance and maintainability.\n Delivers a seamless user experience with dynamic routing, state management, and responsive design.',
      repo: 'https://github.com/theamargupta/interviewAssignmentDashbaord',
      live: 'https://interview-assignment-dashbaord.vercel.app/',
      feature: false
    },
    {
      id: 'ckrylfipkguz90b93u2q265ma',
      title: 'Portfolio 7',
      description:
        'This is a portfolio website built using React, Node Sass, and styled-components. It showcases the skills, projects, and experiences of the developer. The website has a modern and responsive design, with smooth animations and transitions',
      repo: 'https://github.com/theamargupta/profile7',
      live: 'https://profile7.vercel.app/',
      feature: false
    },
    {
      id: 'ckrylfipkguz90b93u2q265ma',
      title: 'Google App Script',
      description: '',
      repo: 'https://github.com/theamargupta/google-react-app-script',
      live: '',
      feature: false
    },
    {
      id: 'ckrylfipkguz90b93u2q265ma',
      title: 'SmallCase Clone',
      description: 'smallcaseClone',
      repo: 'https://github.com/theamargupta/smallcaseClone',
      live: 'https://smallcase-clone-ten.vercel.app/',
      feature: false
    },
    {
      id: 'ckrylfipkguz90b93u2q265ma',
      title: 'Toys and Stationary E-commerce Website',
      description:
        'The Toys and Stationary E-commerce Website is an online platform designed for selling various toys and stationary items in an eco-friendly manner.\n The website is built using Next.js, React, and other libraries and technologies to provide a seamless and engaging shopping experience for users.',
      repo: 'https://github.com/theamargupta/trendyandhandy',
      live: 'https://trendyandhandy.vercel.app/',
      feature: false
    },
    {
      id: 'ckrylfipkguz90b93u2q265ma',
      title: 'Kendo With Backend',
      description:
        'This is a toy project that showcases the integration of Kendo React components in a web application. The project includes both client-side and server-side implementations using various libraries and technologies.',
      repo: 'https://github.com/theamargupta/KendoWithBackend',
      live: '',
      feature: false
    }
  ]
};
