
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Beijing Yiwei Bioscience Co., Ltd",
      location: "Beijing, China",
      period: "March 2023 - October 2023",
      achievements: [
        "Deployed 5 mainstream GPT models (ChatGLM, ChatGPT, Llama, etc.) on Alibaba Cloud PAI platform for initial test by leading comprehensive research on large language models for project focused on clinical trial forms and medical reports generation through enhanced medical vocabulary learning.",
        "Reduced server resource usage by 25% and lead to strategic decision on implementation of ChatGLM2-12B by deploying and testing mainstream models on a GPU-less server.",
        "Increased inference speed by 20% and translation accuracy by 30% in Chinese English translation accuracy by fine-tuning the ChatGLM2-12B model using the p-tuning method.",
        "Boosted 15% in model retrieval accuracy by building a personalized medical knowledge base using LangChain.",
        "Reduced downtime by 40% and increased operational efficiency by 25% through development of software to monitor resource usage across 10+ Windows Server 2016 servers using Python and Commandline scripting."
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Rongma Consulting Co., Ltd.",
      location: "Beijing, China",
      period: "April 2022 - October 2022",
      achievements: [
        "Improved operational efficiency by identifying bottleneck in business operation cycle of a New-Retail E-Commerce company and collaborating with cross-functional teams to digitalize workflows, including database establishment and systematic analysis.",
        "Improved data consistency by managing a dynamic Excel database of 50,000+ customers using functions like VLOOKUP and PivotTables, and automating data integrity checks with Python libraries.",
        "Accomplished a 15% improvement in customer segmentation accuracy by using SQL to build and manage data pipelines for real-time analysis and automated reporting, ensuring data accuracy.",
        "Boosted predictive accuracy by 10% and $5,000 monthly revenue growth by conducting financial modeling and forecasting through machine learning models to forecast customer purchase behavior, empowering strategic decisions.",
        "Accomplished a sixfold increase in process efficiency by creating and delivering interactive dashboards with PowerBI to track and report business performance metrics, streamlining weekly reporting to senior management.",
        "Facilitated weekly meetings to effectively communicate results and insights to managers from diverse backgrounds."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
            Experience
          </span>
          <h2 className="section-heading">Professional Journey</h2>
          <p className="section-subheading">
            A track record of applying data science to solve real business challenges
          </p>
          
          <div className="mt-12">
            <ol className="relative border-s border-muted">
              {experiences.map((experience, index) => (
                <li key={index} className="mb-16 ms-6 group">
                  <span className="experience-dot group-hover:bg-primary/80 transition-colors"></span>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-muted hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                      <time className="text-sm font-medium text-muted-foreground mt-2 sm:mt-0">{experience.period}</time>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-base font-medium">{experience.company}</span>
                      <span className="mx-2 text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{experience.location}</span>
                    </div>
                    
                    <ul className="space-y-3 text-muted-foreground">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="relative pl-6">
                          <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
