import React from 'react'

function Experience() {
  return (
    <section id="experience" className="mt-20 px-5 sm:px-20 lg:px-20 bg-[#fffff4] py-10">
        <h2 className="text-3xl font-semibold mb-10">My Work Experience</h2>
        <div className="relative border-l-4 border-dotted border-orange-300 pl-6 space-y-10">
          <div className="absolute top-1 left-[-10px] w-4 h-4 bg-orange-400 rounded-full"></div>
          <div>
            <p className="text-xl font-bold text-gray-800">FitPeo</p>
            <p className="text-sm text-gray-500">Nov 2024 - Apr 2025</p>
            <p className="text-md">
              <span className="font-semibold text-lg">Web Developer</span> –
              Created dashboards using Remix & React.js. Integrated RPM, CCM,
              PCM features.
            </p>
          </div>
          <div className="absolute top-28 left-[-10px] w-4 h-4 bg-orange-400 rounded-full"></div>
          <div>
            <p className="text-xl font-bold text-gray-800">Credex Technology</p>
            <p className="text-sm text-gray-500">Jan 2022 - Sept 2024</p>
            <p className="text-md">
              <span className="font-semibold text-lg">Software Engineer</span> –
              Built responsive web apps, led API integration and optimization
              efforts.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Experience
