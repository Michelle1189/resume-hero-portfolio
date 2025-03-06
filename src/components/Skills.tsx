
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Analytical Tools",
      skills: ["Python", "SQL", "Java", "Excel", "Tableau", "Power BI", "R", "MATLAB"]
    },
    {
      name: "Data Science & AI",
      skills: ["Machine Learning", "Large Language Models (LLM)", "Natural Language Processing", "Statistical Forecasting", "Predictive Modeling"]
    },
    {
      name: "Business Intelligence",
      skills: ["Data Analysis", "Data Visualization", "Linear Optimization", "Predictive Analysis", "Business Analytics", "Data Mining"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
            Skills
          </span>
          <h2 className="section-heading">Technical Expertise</h2>
          <p className="section-subheading">
            A comprehensive toolkit for data analysis and machine learning
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl border border-muted hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">{category.name}</h3>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="tag hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary/5 p-8 rounded-xl border border-primary/10">
            <h3 className="text-xl font-semibold mb-6 text-center">Proficiency Level</h3>
            <div className="space-y-6">
              {[
                { name: "Machine Learning & AI", level: 90 },
                { name: "Data Analysis & Visualization", level: 95 },
                { name: "Python Programming", level: 90 },
                { name: "SQL & Database Management", level: 85 },
                { name: "Statistical Analysis", level: 85 }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 200}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
