import Project from "../components/Project";

const projects = [
  {
    title: "Project 1: Aqua Buddy",
    image: "MyPortfolio\src\assets\bottle.jpg",
    deployedLink: "https://bans-07.github.io/Aqua-Buddy/",
    repoLink: "https://github.com/bans-07/Aqua-Buddy",
  },
  // Add more projects here
];

function Portfolio() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
