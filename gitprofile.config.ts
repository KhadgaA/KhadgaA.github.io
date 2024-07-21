// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'KhadgaA', // Your GitHub username
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 6,
        exclude: {
          forks: false,
          projects: [],
        },
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Multilingual Speaker Identification and Verification System',
          description: 'Developed a system achieving 98% accuracy in identification across 5 Indian languages.',
          imageUrl: 'https://example.com/speaker_recognition.jpg', // Replace with actual image URL
          link: 'https://github.com/KhadgaA/speaker-recognition', // Replace with actual project link
        },
        {
          title: 'VQ-VAE and Transformer-based Image Synthesis for Skin Lesion Analysis',
          description: 'Implemented VQ-VAE for skin lesion image synthesis with PSNR value of 12.7.',
          imageUrl: 'https://example.com/skin_lesion.jpg', // Replace with actual image URL
          link: 'https://github.com/KhadgaA/skin-lesion-synthesis', // Replace with actual project link
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Alli Khadga Jyoth',
    description: 'M.Tech AI Student | Aspiring AI Researcher & ML Engineer',
    imageURL: '', // Add your profile image URL if desired
  },
  social: {
    linkedin: 'khadga-a', // Replace with your LinkedIn username
    github: 'KhadgaA',
    email: 'khadgajyothalli@gmail.com',
  },
  resume: {
    fileUrl: 'https://example.com/your-resume.pdf', // Replace with your actual resume URL
  },
  skills: [
    'Python',
    'PyTorch',
    'Scikit-Learn',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'Machine Learning',
    'Data Analysis',
    'SQL',
  ],
  experiences: [
    {
      company: 'Indian Institute of Technology, Jodhpur',
      position: 'Teaching Assistant',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://iitj.ac.in/',
    },
    {
      company: 'Indian Institute of Technology, Jodhpur',
      position: 'Teaching Assistant',
      from: 'August 2023',
      to: 'December 2023',
      companyLink: 'https://iitj.ac.in/',
    },
  ],
  educations: [
    {
      institution: 'Indian Institute of Technology, Jodhpur',
      degree: 'M.Tech in Artificial Intelligence',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Indian Institute of Science Education and Research, Bhopal',
      degree: 'B.S. in Data Science & Engineering',
      from: '2019',
      to: '2023',
    },
  ],
  // Remove or comment out sections you don't need (certifications, publications, blog)
  themeConfig: {
    defaultTheme: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk'],
  },
  footer: `Made with GitProfile and ❤️`,
  enablePWA: true,
};

export default CONFIG;
