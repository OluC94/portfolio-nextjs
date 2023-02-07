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
    summary:
      "A Full Stack web application resembling a game review site created during the Northcoders Coding Bootcamp",
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
    keyword: ["Full stack", "Web App", "RESTful"],
    liveUrl: "https://oluc94-nc-games.netlify.app/",
    feRepoUrl: "https://github.com/OluC94/fe-nc-games",
    beRepoUrl: "https://github.com/OluC94/be-project-nc-games",
  },

  {
    id: "02",
    title: "Reel Impact",
    category: "Web App",
    summary:
      "A front-end movie trivia game that tests knowledge of actors and their appearances",
    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node",
      "Axios",
      "RapidAPI",
    ],
    keyword: ["Front-end", "Web App", "UI-UX"],
    liveUrl: "https://reel-impact.netlify.app/",
    feRepoUrl: "https://github.com/OluC94/movie-game-react/",
    beRepoUrl: "",
  },
  {
    id: "03",
    title: "My Portfolio Website",
    category: "Web App",
    summary:
      "The site you're on right now! A mobile-first responsive web page BLAH BLAH BLAH",
    techStack: ["TypeScript", "HTML", "CSS", "NextJs"],
    keyword: ["Front-end", "Web App", "UI-UX"],
    liveUrl: "",
    feRepoUrl: "https://github.com/OluC94/portfolio-nextjs",
    beRepoUrl: "",
  },
];

export default portfolioData;
