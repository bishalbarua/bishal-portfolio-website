import { ExternalLink, Github, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const projects = [
    {
      title: 'Disque Foundation Website Development',
      company: 'Disque Foundation | Save a Life by NHCPS',
      period: '2023',
      type: 'Project Management',
      description: 'Led a cross-functional team of 6 to deliver a complex website development project for a healthcare foundation.',
      achievements: [
        'Delivered project 3 weeks ahead of schedule',
        'Achieved 12% budget savings',
        'Enhanced customer satisfaction by 25%',
        'Improved project delivery efficiency'
      ],
      technologies: ['Project Management', 'Team Leadership', 'Web Development', 'Healthcare'],
      metrics: {
        'Time Saved': '3 weeks',
        'Budget Savings': '12%',
        'Team Size': '6 members',
        'Satisfaction Increase': '25%'
      }
    },
    {
      title: 'Cellbunq Digital Marketing Strategy',
      company: 'Cellbunq, Inc. | ExpoNovum',
      period: '2022-2024',
      type: 'Digital Marketing',
      description: 'Engineered a comprehensive digital marketing strategy across social media, SEO, and email campaigns.',
      achievements: [
        'Increased online lead generation by 150%',
        'Improved page speed by 60%',
        'Increased monthly organic traffic by 21%',
        'Automated KPI reporting saving 6 hours weekly'
      ],
      technologies: ['SEO', 'Social Media', 'Email Marketing', 'Google Analytics', 'Marketing Automation'],
      metrics: {
        'Lead Generation': '+150%',
        'Page Speed': '+60%',
        'Organic Traffic': '+21%',
        'Time Saved': '6 hrs/week'
      }
    },
    {
      title: 'Global Softel PPC Campaign Management',
      company: 'Global Softel, Inc.',
      period: '2020-2022',
      type: 'PPC Marketing',
      description: 'Strategized and managed paid digital marketing campaigns across multiple platforms with significant ROI.',
      achievements: [
        'Generated $25,000 monthly revenue from $10,000 budget',
        'Improved conversion rate by 145%',
        'Enhanced email retention by 19%',
        'Created comprehensive reporting systems'
      ],
      technologies: ['Google AdWords', 'Facebook Ads', 'Instagram Ads', 'Email Marketing', 'Analytics'],
      metrics: {
        'Monthly Revenue': '$25,000',
        'ROI': '250%',
        'Conversion Rate': '+145%',
        'Retention': '+19%'
      }
    },
    {
      title: 'E-commerce Growth Strategy',
      company: 'Fiverr Client Portfolio',
      period: '2019-Present',
      type: 'E-commerce Marketing',
      description: 'Developed and executed growth strategies for multiple e-commerce businesses across various platforms.',
      achievements: [
        'Completed 80+ successful projects',
        'Grew multiple e-commerce businesses',
        'Optimized YouTube channels and blogs',
        'Fixed technical social media issues'
      ],
      technologies: ['Facebook Marketing', 'Instagram Marketing', 'YouTube SEO', 'E-commerce', 'Social Media'],
      metrics: {
        'Projects Completed': '80+',
        'Platform Coverage': 'Multi-platform',
        'Client Satisfaction': '95%+',
        'Years Active': '5+'
      }
    },
    {
      title: 'B2B PPC Campaign Optimization',
      company: 'Upwork Client Portfolio',
      period: '2019-Present',
      type: 'B2B Marketing',
      description: 'Created engaging PPC campaigns for B2B and B2C industries with focus on lead generation and conversion.',
      achievements: [
        'Completed 45+ projects successfully',
        'Improved SERP rankings for multiple clients',
        'Designed custom e-commerce websites',
        'Optimized conversion funnels'
      ],
      technologies: ['PPC Advertising', 'SEO', 'Web Design', 'B2B Marketing', 'Conversion Optimization'],
      metrics: {
        'Projects Completed': '45+',
        'Industries Served': 'B2B & B2C',
        'Website Designs': '15+',
        'SERP Improvements': 'Top Rankings'
      }
    },
    {
      title: 'Marketing Analytics Automation',
      company: 'Multiple Clients',
      period: '2020-Present',
      type: 'Marketing Automation',
      description: 'Automated marketing KPI reporting and analytics across various platforms to improve efficiency.',
      achievements: [
        'Automated reporting systems',
        'Reduced manual work by 6 hours weekly',
        'Improved data accuracy',
        'Enhanced decision-making processes'
      ],
      technologies: ['Google Analytics', 'Google Sheets', 'Marketing Automation', 'Data Analysis', 'Reporting'],
      metrics: {
        'Time Saved': '6 hrs/week',
        'Accuracy Improvement': '95%+',
        'Automation Coverage': 'Full KPIs',
        'Client Satisfaction': '100%'
      }
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Projects</h1>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of successful digital marketing campaigns, project management initiatives, 
            and growth strategies that have delivered measurable results for clients across various industries.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">125+</div>
              <div className="text-slate-300 text-sm">Total Projects</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">150%</div>
              <div className="text-slate-300 text-sm">Avg Lead Increase</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">250%</div>
              <div className="text-slate-300 text-sm">Best ROI Achieved</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">95%+</div>
              <div className="text-slate-300 text-sm">Client Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                    <p className="text-orange-400 font-medium mb-2">{project.company}</p>
                    <p className="text-slate-300 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit border-orange-400 text-orange-400">
                      <Calendar className="mr-1 h-3 w-3" />
                      {project.period}
                    </Badge>
                    <Badge variant="secondary" className="w-fit bg-slate-700 text-slate-300">
                      {project.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-orange-400" />
                    Key Achievements
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-slate-300">
                        <span className="mr-2 text-orange-400">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Metrics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center p-3 bg-slate-700 rounded-lg">
                        <div className="font-bold text-orange-400">{value}</div>
                        <div className="text-sm text-slate-400">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in Similar Results?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve exceptional growth and efficiency 
            in your digital marketing and project management initiatives.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
            <a href="/contact">
              Start Your Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
