export const profile = {
  name: 'Marvin Guerrero-Rangel',
  tagline: 'I build end-to-end machine learning systems — from data collection to deployment.',
  status: 'Open to ML / Data Science internships and full-time roles.',
  email: 'marvin3742@gmail.com',
  github: 'https://github.com/marvin3742',
  linkedin: 'https://linkedin.com/in/marvin3742',
  // TODO: replace with your actual Medium profile URL
  medium: 'https://medium.com/@marvin3742',
  resume: '/Marvin_Guerrero_Resume.pdf',
  image: '/profile_image.png',
};

export const about = "Hi! I'm currently pursuing a masters in CS at GT trying to break into ML/DS. I love learning new things and spend my free time building things I'm interested in. Outside of academics, I train MMA and love watching the UFC!"

export const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. in Computer Science',
    location: 'Remote',
    date: 'Dec 2027',
  },
  {
    school: 'University of South Florida',
    degree: 'B.S. in Computer Science',
    location: 'Tampa, FL',
    date: 'Dec 2025',
  },
];

export const projects = [
  {
    title: 'UFC Prediction Modeling',
    date: 'Spring 2026',
    image: '/projects/ufc_predictions.png',
    summary:
      'I wanted to see how far you could get predicting UFC fights from public data, so I built an ML pipeline designed to scale. A custom scraper pulls 8,500+ fights into a normalized PostgreSQL database, and SQL window functions reconstruct each fighter’s stats as they would have looked the day of the fight. Logistic Regression and KNN baselines land at 62.8% on a chronological holdout, served through a terminal app that scores upcoming cards and logs every prediction. Currently working on expanding data sources and more creative approaches to framing the outcome prediction problem.',
    tags: ['Scikit-Learn', 'Pandas', 'PostgreSQL', 'BeautifulSoup'],
    // TODO: replace with the actual Medium write-up URL
    writeup: 'https://medium.com/@marvin3742/building-a-ufc-prediction-modeling-week-1-985f21849448',
    github: 'https://github.com/Marvin3742/UFC-Prediction-Modeling',
  },
  {
    title: 'FacePortal.io',
    date: 'Fall 2025',
    image: '/projects/faceportal.png',
    summary: 
    "A full-stack web app that lets users upload a photo and see themselves age forward or backward. Under the hood it uses encoder4editing, a model that maps real images into a GAN’s editable latent space, to project the photo into StyleGAN, a generative model for realistic faces. InterFaceGAN then shifts the image along a learned “age” direction in that space. A PyTorch backend runs in Docker on a Runpod GPU, and a React frontend is deployed on Vercel. ",
    tags: ['PyTorch', 'StyleGAN', 'FastAPI', 'React', 'Docker'],
    writeup: 'https://www.faceportal.io/',
    github: 'https://github.com/Marvin3742/face-portal-frontend',
  },
];

