import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cloud, Database, Brain, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "C/C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "R", level: 85 },
        { name: "MATLAB", level: 75 },
        { name: "Excel", level: 90 },
        { name: "Power BI", level: 85 }
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Flask", level: 90 },
        { name: "FastAPI", level: 85 }
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Azure", level: 85 },
        { name: "Docker", level: 80 },
        { name: "GitHub Actions", level: 75 }
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "SQLite", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 }
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "AI/ML Frameworks",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "scikit-learn", level: 95 },
        { name: "OpenAI GPT", level: 85 },
        { name: "Keras", level: 90 }
      ],
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const certifications = [
    "Microsoft Azure AI Fundamentals (AI-900)",
    "GOMYCODE Data Science Bootcamp",
    "Microsoft Power Platform Fundamentals (PL-900)",
    "Learning Data Analytics Foundations",
    "Eskills Academy Python Programming"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of data science, 
            machine learning, and software development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-lg text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 bg-gradient-to-r ${category.gradient} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg text-white">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-white">
              Certifications & Training
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg border border-secondary/10 dark:border-accent/10"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full flex-shrink-0"></div>
                <span className="text-text dark:text-gray-300 font-medium">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;