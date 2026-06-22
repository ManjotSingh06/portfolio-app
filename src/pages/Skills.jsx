import React from "react";
import styled from "styled-components";



const Container = styled.div`
min-height: 100vh;
padding: 3rem;
background: #0a192f;
color: white;

h1 {
text-align: center;
color: #64ffda;
margin-bottom: 3rem;
}

.skills-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 2rem;
max-width: 1200px;
margin: auto;
}

.card-client {
background: #112240;
border: 2px solid #64ffda;
border-radius: 15px;
padding: 1.5rem;
transition: 0.3s;
box-shadow: 0 6px 15px rgba(0,0,0,0.3);
}

.card-client:hover {
transform: translateY(-10px);
}

.user-picture {
width: 70px;
height: 70px;
border: 2px solid #64ffda;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
font-size: 2rem;
}

.name-client {
text-align: center;
margin-top: 1rem;
font-size: 1.2rem;
font-weight: bold;
}

.name-client span {
display: block;
color: #8892b0;
font-size: 0.9rem;
margin-top: 5px;
}

.skills-list {
margin-top: 1.5rem;
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: center;
}

.skill-tag {
background: #233554;
color: #64ffda;
padding: 8px 12px;
border-radius: 20px;
font-size: 0.85rem;
}
`;

const skillGroups = [
{
title: "Frontend Development",
icon: "🎨",
skills: ["HTML", "CSS", "JavaScript", "React", "Styled Components"],
},
{
title: "Backend Development",
icon: "⚙️",
skills: ["Node.js", "Express.js", "Flask", "Django", "FastAPI"],
},
{
title: "Data Science & AI",
icon: "🤖",
skills: ["Python", "Pandas", "NumPy", "Machine Learning", "Scikit-Learn"],
},
{
title: "Generative AI",
icon: "🧠",
skills: ["LangChain", "LangGraph", "RAG", "Prompt Engineering"],
},
{
title: "Tools & Databases",
icon: "🛠️",
skills: ["Git", "GitHub", "SQL", "Supabase", "Streamlit", "Docker", "mongoDB",],
},
];

const Skills = () => {
return ( <Container> <h1>Skills & Technologies</h1>


  <div className="skills-grid">
    {skillGroups.map((group) => (
      <div className="card-client" key={group.title}>
        <div className="user-picture">
          <span>{group.icon}</span>
        </div>

        <p className="name-client">
          {group.title}
          <span>{group.skills.length} Technologies</span>
        </p>

        <div className="skills-list">
          {group.skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</Container>


);
};

export default Skills;
