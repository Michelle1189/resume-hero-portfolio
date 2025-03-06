
import React from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
            About Me
          </span>
          <h2 className="section-heading">Solving Problems Through Data & Machine Learning</h2>
          <p className="section-subheading">
            Turning complex data into actionable insights and intelligent solutions
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">
              As a graduate student in Information Systems and Mathematics, I bring over 2 years of experience in Machine Learning and Data Analytics across diverse industries including Bioscience and Business Consulting. I specialize in deploying AI models to optimize business processes, improve efficiency, and drive strategic decision-making.
            </p>
            
            <div className="mt-12 space-y-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-2xl">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Professional Experience</h3>
                  <p className="text-muted-foreground mt-2">
                    My professional journey spans from optimizing clinical trial processes using large language models to implementing data-driven solutions for retail businesses. I've consistently delivered tangible results through data analysis and AI implementations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-2xl">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Academic Foundation</h3>
                  <p className="text-muted-foreground mt-2">
                    With a strong background in Information Systems and Mathematics, I combine theoretical knowledge with practical applications. My academic experience has equipped me with the analytical thinking necessary to tackle complex data problems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-2xl">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Technical Expertise</h3>
                  <p className="text-muted-foreground mt-2">
                    I'm proficient in Python, SQL, Java, and various data visualization tools. My specialization extends to Machine Learning, Large Language Models (LLM), Natural Language Processing, and Predictive Modeling—skills that I've applied to drive real business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default About;
