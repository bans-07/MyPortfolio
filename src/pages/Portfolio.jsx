import Project from "../components/Project";

const projects = [
  {
    title: "Project 1",
    image: "/path-to-project1.jpg",
    deployedLink: "https://project1-demo.com",
    repoLink: "https://github.com/yourusername/project1",
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
