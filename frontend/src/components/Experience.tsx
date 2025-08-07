import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Code } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "CODIX TN",
      position: "Data Scientist Intern",
      period: "Jun - July 2025",
      location: "Tunis, Tunisia",
      icon: <TrendingUp className="w-6 h-6" />,
      achievements: [
        "Built credit risk prediction system with 45,000 records",
        "Achieved 15% accuracy improvement using Random Forest algorithm",
        "Developed Flask API and React interface for model deployment",
        "Implemented data preprocessing pipelines for large-scale datasets"
      ],
      technologies: ["Python", "Flask", "React", "Random Forest", "Pandas", "Scikit-learn"]
    },
    {
      company: "Gafsa Phosphate Company",
      position: "Software Development Intern",
      period: "Jun - July 2024",
      location: "Gafsa, Tunisia",
      icon: <Code className="w-6 h-6" />,
      achievements: [
        "Created C# intern management application",
        "Reduced manual administrative work by 30%",
        "Provided technical support and resolved 15+ daily issues",
        "Improved workflow efficiency through automation"
      ],
      technologies: ["C#", ".NET", "SQL Server", "Windows Forms"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-secondary to-accent hidden md:block"></div>
              )}
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-white">
                      {exp.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary dark:text-white mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl font-semibold text-secondary mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-text dark:text-gray-300 mb-3">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-lg font-semibold text-text dark:text-gray-300 mb-3">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary dark:text-accent rounded-full text-sm font-medium border border-secondary/20 dark:border-accent/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;