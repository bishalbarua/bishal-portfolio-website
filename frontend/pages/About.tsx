import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const experiences = [
    {
      title: 'Project Manager',
      company: 'Disque Foundation | Save a Life by NHCPS',
      location: 'Texas, USA',
      period: '2023 - Present',
      type: 'Remote',
      achievements: [
        'Spearheaded a cross-functional team of 6, successfully delivering a complex website development project 3 weeks ahead of schedule',
        'Achieved a budget saving of 12% and enhanced customer satisfaction by 25%',
        'Oversaw and directed the completion of 48 Marketing and Analytics projects on-time',
        'Enhanced business credibility leading to a 15% increase in profits'
      ]
    },
    {
      title: 'Marketing Manager',
      company: 'Cellbunq, Inc. | Sister Company of ExpoNovum',
      location: 'Sweden',
      period: '2022 - 2024 (2.5 years)',
      type: 'Remote',
      achievements: [
        'Engineered a comprehensive digital marketing strategy across social media, SEO, and email campaigns',
        'Increased online lead generation by 150% within the first year',
        'Improved on-page SEO performance, resulting in page speed improvement of 60%',
        'Increased monthly organic traffic by 21%',
        'Automated marketing KPI reporting using Google Analytics and Google Sheets, saving 6 hours weekly'
      ]
    },
    {
      title: 'Digital Marketing Manager',
      company: 'Global Softel, Inc. | Sister Company of Credit Master, LLC',
      location: 'USA',
      period: '2020 - 2022 (2.5 years)',
      type: 'Remote',
      achievements: [
        'Strategized, developed, and managed paid digital marketing across AdWords, Instagram, and Facebook',
        'Managed monthly budget of $10,000, resulting in about $25,000 in monthly revenue',
        'Created reporting around paid marketing funnels',
        'Incrementally improved conversion rate by 145%',
        'Developed robust conditional email campaigns that improved retention by 19%'
      ]
    }
  ];

  const skills = [
    { category: 'Core Skills', items: ['AI Marketing', 'Project Management', 'Digital Marketing Management', 'Strategic Planning'] },
    { category: 'Technical Skills', items: ['Research Capabilities', 'Analytical Abilities', 'Marketing Automation', 'Google Analytics'] },
    { category: 'Soft Skills', items: ['Leadership Skills', 'Problem Solving', 'Communication Skills', 'Critical Thinking'] },
    { category: 'AI Tools', items: ['ChatGPT', 'Gemini', 'ClaudAI'] }
  ];

  const expertise = [
    'AI Marketing', 'Search Engine Optimisation', 'PPC Marketing', 'Social Media Marketing',
    'Quality Management', 'Risk Management', 'Content Marketing', 'Web Copywriting',
    'YouTube Marketing', 'Email Marketing', 'eCommerce Marketing'
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Me</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              AI-Driven Project and Digital Marketing Manager with extensive experience building, 
              maintaining, and running successful dev projects and marketing campaigns. Bringing forth 
              broad marketing knowledge, coupled with focused campaign experience. Adept at creating 
              and implementing client-centered, successful campaigns, aimed at improving brand awareness and presence.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Calendar className="mr-3 h-8 w-8 text-orange-400" />
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                      <p className="text-lg text-orange-400 font-medium">{exp.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-slate-400">
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {exp.location}
                        </span>
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">{exp.type}</Badge>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Badge variant="outline" className="text-sm border-orange-400 text-orange-400">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <TrendingUp className="mr-2 h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="mr-3 h-8 w-8 text-orange-400" />
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-700 text-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg text-white">Areas of Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item, index) => (
                  <Badge key={index} variant="outline" className="text-sm border-orange-400 text-orange-400">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Freelancing Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Freelancing Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-orange-400">Fiverr</CardTitle>
                <p className="text-slate-400">2019 - Present (5+ years)</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-white">80+ Projects Completed</div>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Created Engaging Ads Campaigns for Realtors & Lenders</li>
                    <li>• Helped grow e-Commerce businesses on Facebook & Instagram</li>
                    <li>• Optimized YouTube Channels & Blogging Websites</li>
                    <li>• Fixed technical issues on Social Media & Websites</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-orange-400">Upwork & Others</CardTitle>
                <p className="text-slate-400">2019 - Present (5+ years)</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-white">45+ Projects Completed</div>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Created Engaging PPC Ads Campaigns for B2B & B2C Industries</li>
                    <li>• Optimized websites & helped ranking top on SERP</li>
                    <li>• Designed & customized Clients eCommerce & Org Websites</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
