function Project({ title, image, deployedLink, repoLink }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <img src= "MyPortfolio\src\assets\bottle.jpg" alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="mt-2">
          {"Access Demo site: "}
            <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Live Demo
            </a>
            <br></br>
            <br></br>
            {"Access GitHub Repo:"}
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Project;
  