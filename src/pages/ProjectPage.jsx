import { useParams } from "react-router-dom"
import { useEffect } from "react"

import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa"

import projectsData from "../data/projectsData"

const ProjectPage = () => {

  const { projectId } = useParams()

  useEffect(() => {

  window.scrollTo(0, 0)

}, [projectId])

  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="p-20 text-3xl">
        Project not found
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-600 font-semibold mb-4">
            {project.category}
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <FaGithub className="w-5 h-5" />

              GitHub
            </a>

            <a
              href={project.notebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <FaExternalLinkAlt className="text-sm" />

              Open Notebook
            </a>

          </div>

        </div>

      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Technologies */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="px-4 py-2 bg-cyan-50 text-cyan-600 border border-cyan-200 rounded-full"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        {/* Results */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Key Results
          </h2>

          <div className="space-y-4">

            {project.results.map((result) => (

              <div
                key={result}
                className="p-4 bg-white border border-gray-200 rounded-xl"
              >
                {result}
              </div>

            ))}

          </div>

        </div>

        {/* Notebook Preview */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Notebook Preview
          </h2>

          <div className="w-full h-[90vh] rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">

            <iframe
              src={project.notebook}
              title={project.title}
              className="w-full h-full"
              style={{
                border: "none"
              }}
            />

          </div>

        </div>

      </section>

    </div>

  )
}

export default ProjectPage