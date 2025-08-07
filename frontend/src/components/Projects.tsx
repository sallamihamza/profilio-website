import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, Database, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Credit Risk Prediction App",
      description: "Advanced machine learning system for predicting credit risk using Random Forest algorithm with comprehensive data preprocessing and model optimization.",
      icon: <TrendingUp className="w-8 h-8" />,
      technologies: ["Python", "Flask", "React", "Random Forest", "Pandas", "Scikit-learn"],
      achievements: ["15% accuracy improvement", "45,000 records processed", "Real-time predictions"],
      gradient: "from-blue-500 to-purple-600",
      category: "Machine Learning"
    },
    {
      title: "Customer Churn Prediction",
      description: "Intelligent system using XGBoost and SHAP for predicting customer churn with explainable AI features for business insights.",
      icon: <Users className="w-8 h-8" />,
      technologies: ["Python", "XGBoost", "SHAP", "Streamlit", "Pandas", "Matplotlib"],
      achievements: ["12% accuracy improvement", "Explainable AI", "Business insights"],
      gradient: "from-green-500 to-teal-600",
      category: "Predictive Analytics"
    },
    {
      title: "Natural Language to SQL Converter",
      description: "AI-powered application that converts natural language queries to SQL using OpenAI GPT models with Azure cloud integration.",
      icon: <Database className="w-8 h-8" />,
      technologies: ["OpenAI GPT", "Azure", "Streamlit", "Python", "SQL", "NLP"],
      achievements: ["89.39% SQL accuracy", "Natural language processing", "Cloud deployment"],
      gradient: "from-orange-500 to-red-600",
      category: "Natural Language Processing"
    },
    {
      title: "COVID-19 X-Ray Classification",
      description: "Deep learning model using Convolutional Neural Networks for automated COVID-19 detection from chest X-ray images.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["TensorFlow", "CNN", "Python", "Keras", "OpenCV", "Medical Imaging"],
      achievements: ["87% accuracy", "Medical AI", "Image classification"],
      gradient: "from-purple-500 to-pink-600",
      category: "Computer Vision"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of data science and AI projects that demonstrate practical applications 
            of machine learning, deep learning, and intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg text-white`}>
                    {project.icon}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Key Results
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary dark:text-accent rounded-full text-sm font-medium border border-secondary/20 dark:border-accent/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary to-accent text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-secondary text-secondary rounded-lg font-medium transition-all duration-300 hover:bg-secondary hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;