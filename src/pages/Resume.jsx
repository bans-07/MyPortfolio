import React from "react";

function Resume() {
    return (
      <div className="container">
        <h1>Resume</h1>
        <p>
          Download my resume <a href="/resume.pdf" download>here</a>.
        </p>
  
        <h2>Professional Summary</h2>
        <p>
          Experienced Quality Assurance Tester with a passion for software development 
          and a strong foundation in full-stack technologies. Through hands-on experience 
          and intensive bootcamp training, I have developed proficiency in front-end and 
          back-end development, databases, and version control. With a keen eye for detail 
          and problem-solving skills, I ensure the delivery of high-quality, scalable, 
          and user-friendly applications.
        </p>
  
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Front-End:</strong> HTML, CSS, JavaScript, React</li>
          <li><strong>Back-End:</strong> Node.js, Express.js</li>
          <li><strong>Databases:</strong> SQL</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Testing & Debugging:</strong> Manual and Automated Testing, QA Processes</li>
          <li><strong>Other Tools & Technologies:</strong> RESTful APIs, Postman, Agile/Scrum Methodologies</li>
        </ul>
  
        <h2>Work Experience</h2>
        <h3>Quality Assurance Tester | [GreenShield] | [5 years]</h3>
        <ul>
          <li>Conducted rigorous software testing, identifying and resolving defects to enhance system performance.</li>
          <li>Collaborated with developers and stakeholders to ensure seamless product functionality.</li>
          <li>Developed test plans, cases, and scripts to automate testing processes.</li>
        </ul>
  
        <h3>Full-Stack Developer (Freelance/Projects)</h3>
        <ul>
          <li>Built dynamic and responsive web applications using React and Node.js.</li>
          <li>Designed and implemented RESTful APIs for seamless front-end and back-end communication.</li>
          <li>Managed databases using SQL and MongoDB to store and retrieve application data.</li>
        </ul>
  
        <h2>Education</h2>
        <ul>
          <li><strong>Full-Stack Web Development Bootcamp</strong> – [Edx bootcamp(UofT)], [2025]</li>
          <li><strong>[Bachelors in Science]</strong> – [Mohawk college], [2019]</li>
        </ul>
  
        <h2>Projects</h2>
        <h3>My Portfolio</h3>
        <ul>
          <li>Developed and deployed a personal portfolio showcasing projects, skills, and contact information.</li>
          <li>Implemented React Router for smooth navigation between sections.</li>
          <li>Hosted the project on Netlify for easy accessibility.</li>
        </ul>
  
        <h3>Weather Dashboard</h3>
        <ul>
          <li>Created a weather application using OpenWeather API to fetch real-time data.</li>
          <li>Integrated a search history feature with local storage for user convenience.</li>
        </ul>
  
        <h3>Employee Tracker CLI App</h3>
        <ul>
          <li>Built a command-line application using Node.js and PostgreSQL to manage employee databases.</li>
          <li>Enabled users to add, update, and retrieve employee records seamlessly.</li>
        </ul>
  
        <h2>Certifications & Additional Training</h2>
        <ul>
          <li>Full-Stack Development Certificate – [Bootcamp/Institution]</li>
          <li>JavaScript & React Certification – [Platform]</li>
        </ul>
  
        <h2>Contact Information</h2>
        <ul>
          <li>📧 <strong>Email:</strong> [bansari.d7@gmail.com]</li>
          <li>📞 <strong>Phone:</strong> [416-789-9987]</li>
          <li>💼 <strong>LinkedIn:</strong> <a href="www.linkedin.com/in/dixitbansari" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li>📂 <strong>GitHub:</strong> <a href="https://github.com/bans-07" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    );
  }
  
  export default Resume;
  
