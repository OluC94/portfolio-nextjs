interface PortfolioData {
  id: string;
  title: string;
  category: string;
  summary: string;
  techStack: string[];
  keyword: string[];
  liveUrl: string;
  feRepoUrl: string;
  beRepoUrl: string;
}

const portfolioData: PortfolioData[] = [
  {
    id: "01",
    title: "NC Games",
    category: "Web App",
    summary: "",
    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node",
      "PostgreSQL",
      "Express",
      "Axios",
    ],
    keyword: ["Full-stack", "Web App", "RESTful"],
    liveUrl: "https://oluc94-nc-games.netlify.app/",
    feRepoUrl: "https://github.com/OluC94/fe-nc-games",
    beRepoUrl: "https://github.com/OluC94/be-project-nc-games",
  },

  {
    id: "02",
    title: "Real Impact",
    category: "Web App",
    summary: "",
    techStack: ["JavaScript", "HTML", "CSS", "React", "Node", "Axios"],
    keyword: ["Front-end", "Web App", "UI-UX"],
    liveUrl: "https://reel-impact.netlify.app/",
    feRepoUrl: "https://github.com/OluC94/movie-game-react/",
    beRepoUrl: "",
  },
];

export default portfolioData;
