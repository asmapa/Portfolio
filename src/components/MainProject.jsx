import React from 'react'

const MainProjectCard = ({ title, description, tech, link }) => (
  <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">

    <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>

    <p className="text-gray-300 mb-4">{description}</p>

    <p className="text-sm text-red-400 mb-4">
      <strong>Tech:</strong> {tech}
    </p>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-200"
    >
      View Project →
    </a>
  </div>
)

const MainProject = () => {

  const projects = [
    {
      title: "Placement Management System",
      description:
        "A full-stack web application for managing campus placements, including student and admin dashboards, company registrations, and result management.",
      tech: "PostgreSQL, Express, React, Node.js (PERN)",
      link: "https://github.com/asmapa/placement_portal"
    },
    {
      title: "IRIS - Smart Assistive App",
      description:
        "An AI-powered mobile application for visually impaired users Almost 9 features -> Face Recognition, Obstacle Detection, Object identification,Navigation,Reading Text,Currency Detection,Emergency Help,Phone Status,Describe Scene Infront OF U.",
      tech: "Android, Kotlin, ML Kit, TFLite, Firebase",
      link: ""
    },
    {
  title: "Embedded Engineer Portfolio Website",
  description:
    "Designed and developed a modern, responsive portfolio website for an embedded firmware engineer. The project showcases expertise in automotive systems, real-time embedded solutions, and firmware development with smooth animations and clean UI/UX.",
  tech: [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Framer Motion"
  ],
  link: "https://ameen-eta.vercel.app/"
}
  ]

  return (
    <section className=" text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">
<h1 className="text-3xl md:text-2xl font-bold mb-4 text-center text-red-500">
   Projects I’m Proud Of
</h1>

<p className="text-center text-black max-w-2xl mx-auto mb-10">
  I know these aren’t huge yet, but every project makes me better.  
  If you’ve got a cool app or website idea… tell me  I might build it next!
</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MainProjectCard key={index} {...project} />
          ))}
        </div>

      </div>

    </section>
  )
}

export default MainProject