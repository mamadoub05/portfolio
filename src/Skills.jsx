const skills = [
  "JavaScript", "React", "TypeScript", "HTML", "CSS",
  "Java", "Python", "SQL", "R",
  "Git", "Linux", "AWS S3", "Vercel",
  "PyTorch", "NumPy", "Pandas", "OpenAI API"
]

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills