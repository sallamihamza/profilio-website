import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Brain, Code, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Passionate about developing intelligent systems and predictive models"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions from data processing to user interfaces"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies in data science"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Transforming complex business challenges into data-driven solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Data Scientist and AI Engineer with a strong foundation in applied mathematics 
              and modeling engineering. Currently pursuing my degree at the Higher National Engineering School 
              of Tunis, I combine theoretical knowledge with practical experience to solve complex real-world problems.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With a Master's in Data Science completed in 2023, I specialize in developing machine learning 
              models, building predictive systems, and creating intelligent applications that drive business value. 
              My expertise spans from traditional statistical methods to cutting-edge deep learning techniques.
            </p>

            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-text dark:text-gray-300">Applied Mathematics and Modeling Engineering </h4>
                  <p className="text-gray-600 dark:text-gray-400">Higher National Engineering School of Tunis • Current</p>
                </div>
                <div>
                  <h4 className="font-medium text-text dark:text-gray-300">Master's in Data Science</h4>
                  <p className="text-gray-600 dark:text-gray-400">Higher Institute of Computer Science and Mathematics, Monastir • Completed 2023</p>
                </div>
                <div>
                  <h4 className="font-medium text-text dark:text-gray-300">Bachelor's in Applied Mathematics</h4>
                  <p className="text-gray-600 dark:text-gray-400">Higher Institute of Computer Science and Mathematics, Monastir • Completed 2022</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-secondary mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;