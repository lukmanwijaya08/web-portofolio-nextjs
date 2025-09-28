import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-20 border-t border-gray-700">
      <h2 className="text-4xl font-bold mb-10 text-center">Pengalaman Kerja</h2>
      <div className="space-y-12">
        {experience.map((job) => (
          <div key={job.id} className="relative pl-8 sm:pl-32">
            <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-700"></div>
            <div className="relative">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-xl text-gray-400">{job.company}</p>
              <p className="text-sm text-gray-500 mb-4">{job.duration}</p>
              <ul className="list-disc list-inside space-y-1">
                {job.description.map((point, index) => (
                  <li key={index} className="text-gray-300">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;