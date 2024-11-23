'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Lead Developer',
    company: 'Blockdots, London',
    period: '2022 - Present',
    description: 'The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart software.',
  },
  {
    title: 'Full Stack Web Developer',
    company: 'Parsons, The New School',
    period: '2021 - 2022',
    description: 'The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  },
]

const education = [
  {
    course: 'Programming Course',
    institution: 'Harverd University',
    period: '2006 - 2014',
    description: 'The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart software.',
  },
  {
    course: 'Graphic Design Course',
    institution: 'Blockdots, London',
    period: '2016 - 2020',
    description: 'The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Expertise Section */}
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Expertise
            </motion.h2>
            <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute -left-[41px] w-5 h-5 bg-orange-500 rounded-full" />
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1 bg-orange-500 text-white rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Education Background
            </motion.h2>
            <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute -left-[41px] w-5 h-5 bg-orange-500 rounded-full" />
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{edu.course}</h3>
                        <p className="text-gray-600">{edu.institution}</p>
                      </div>
                      <span className="px-4 py-1 bg-orange-500 text-white rounded-full text-sm">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

