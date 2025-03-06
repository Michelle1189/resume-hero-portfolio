
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Research on Top 100 Private Universities Graduation Rates",
      period: "April 2023 - June 2023",
      description: "Conducted predictive analysis on graduation rates for top private universities using regression techniques.",
      achievements: [
        "Enhanced model performance and validation by leading hypothesis development and identifying key variables impacting graduation rates through OLS regression analysis.",
        "Utilized multiple variable linear regression to build predictive models and applied A/B testing to validate model accuracy.",
        "Accomplished project success with a score of 60/60 by conducting regression analysis in Excel, utilizing data visualization techniques to interpret results and present insights, and authoring data-driven conclusions."
      ],
      tags: ["Regression Analysis", "Excel", "Data Visualization", "A/B Testing"]
    },
    {
      title: "Yelp Business Success Prediction",
      period: "September 2024 - December 2024",
      description: "Applied data mining techniques to predict business success based on Yelp data.",
      achievements: [
        "Improved data usability by down sampling a 150,000-row dataset and engineering features, as measured by the successful one-hot encoding of 600+ business categories using Python.",
        "Achieved a 67.6% overall model accuracy by applying classification trees (CART) and SMOTE by adjusting class imbalance.",
        "Predicted Yelp ratings and identified key success drivers like business categories and review volume, using logistic regression.",
        "Proposed future improvements for prediction accuracy, by advanced sentiment analysis and ensemble modeling techniques."
      ],
      tags: ["Data Mining", "Python", "Classification Trees", "SMOTE", "Logistic Regression"]
    },
    {
      title: "FIRST Robotics Competition",
      period: "January 2017 - January 2020",
      description: "Served as Strategist and Lead Scout for a competitive robotics team participating in global competitions.",
      achievements: [
        "Achieved data-driven competition strategies through dynamic data analysis by developing and managing an Excel database for 300+ global FRC teams, leveraging Tableau to create real-time visual dashboards that provided actionable insights.",
        "Boosted data entry efficiency by 400% by implementing scantron sheets and scanning tools, streamlining data collection for over 270 matches per competition.",
        "Led the team to qualify for the World Championship as a core team member and participated in 5 global FRC and FTC (FIRST Tech Challenge) robotics competitions over 3 consecutive years."
      ],
      tags: ["Excel", "Tableau", "Data Collection", "Team Leadership"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
            Projects
          </span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Showcasing my analytical capabilities through real-world applications
          </p>

          <div className="mt-12 space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative group bg-white rounded-xl border border-muted p-6 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-left group-hover:scale-y-110 transition-transform"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-muted-foreground mt-2 sm:mt-0">{project.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="relative pl-6 text-sm text-muted-foreground">
                      <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap mt-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
