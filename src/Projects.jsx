const projects = [
  {
    id: 1,
    title: "To-Do App",
    description: "A full CRUD To-Do app with filters, editing, and localStorage persistence.",
    tech: ["React", "CSS", "localStorage"],
    live: "https://todo-k8fch81kr-mamadou.vercel.app",
    github: "https://github.com/mamadoub05/todo-app"
  },
  {
    id: 2,
    title: "WeatherLens",
    description: "A Java-based image editor with weather API integration, fetching 7-day forecasts via custom terminal arguments and parsing JSON with GSON.",
    tech: ["Java", "REST API", "JSON", "GSON"],
    live: null,
    github: null
  },
  {
    id: 3,
    title: "PraySync",
    description: "An interactive web app that teaches Islamic prayer positions with dynamic content, responsive UI, and instant visual feedback.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://pray-sync-gbiskutct-mamadou.vercel.app",
    github: "https://github.com/mamadoub05/PraySync"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A real-time weather app with city autocomplete, dynamic backgrounds, and live data from the OpenWeatherMap API.",
    tech: ["React", "REST API", "CSS", "Vite"],
    live: "https://weather-fmubm35hz-mamadou.vercel.app",
    github: "https://github.com/mamadoub05/weather-app"
  }
]

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="project-links">
              {project.live && <a href={project.live} target="_blank">Live Demo</a>}
              {project.github && <a href={project.github} target="_blank">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects