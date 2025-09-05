import { ArrowRight, Mail, Code, Monitor, Server, ExternalLink, Calendar, ShoppingCart, Target, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const skills = [
    'AI Marketing',
    'Project Management',
    'Digital Marketing',
    'SEO Optimization',
    'PPC Marketing',
    'Social Media Marketing'
  ];

  const techStack = [
    'AI Automation',
		'PPC',
    'SEO',
    'SMM',
    'Content Marketing',
  ];

  const services = [
    {
      icon: Server,
      title: 'AI Marketing',
      description: 'Leveraging AI tools and strategies to optimize marketing campaigns and ROI.'
    },
    {
      icon: Code,
      title: 'Digital Marketing',
      description: 'Creating comprehensive digital marketing strategies across multiple platforms.'
    },
    {
      icon: Monitor,
      title: 'Project Management',
      description: 'Leading cross-functional teams to deliver complex projects on time and under budget.'
    }
  ];

  const featuredProjects = [
    {
      title: 'E-commerce Growth Campaign',
      description: 'AI-powered marketing strategy that increased conversion rates by 40% for a retail client.',
      category: 'Digital Marketing',
      date: '2024',
      icon: ShoppingCart
    },
    {
      title: 'SaaS Lead Generation',
      description: 'Comprehensive PPC and SEO campaign generating 300+ qualified leads monthly.',
      category: 'Lead Generation',
      date: '2024',
      icon: Target
    },
    {
      title: 'Brand Automation System',
      description: 'Implemented AI workflows reducing manual marketing tasks by 60%.',
      category: 'AI Automation',
      date: '2023',
      icon: Bot
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 text-orange-400/10 transform rotate-12">
          <div className="text-6xl font-bold">&lt;/&gt;</div>
        </div>
        <div className="absolute bottom-20 left-20 text-orange-400/10 transform -rotate-12">
          <div className="text-6xl font-bold">&lt;/&gt;</div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Hello<span className="text-orange-400">.</span>
                </h1>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h2 className="text-2xl lg:text-3xl text-white font-medium">
                    I'm Bishal
                  </h2>
                </div>
                <h3 className="text-3xl lg:text-5xl font-bold text-white">
                   AI Marketer | Project Manager
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  AI-Driven Project and Digital Marketing Manager with extensive experience 
                  building, maintaining, and running successful dev projects and marketing campaigns.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white border-orange-500">
                    Got a project?
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                    My resume
                  </Button>
                </Link>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-4 text-slate-400">
                {techStack.map((tech) => (
                  <span key={tech} className="text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:flex justify-center hidden">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl p-1">
                  <div className="w-full h-full bg-slate-800 rounded-full overflow-hidden">
                    <img 
                      src="https://pub-1277c2d77088423f8d767164d82bd4d6.r2.dev/Bishal-Linkedin.png?w=400&h=400&fit=crop&crop=face,top&auto=format&q=80" 
                      alt="Bishal Barua - AI Marketing Expert"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-slate-700 rounded-full hidden items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">BB</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Bishal Barua</h3>
                        <p className="text-slate-400">Marketing Expert</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">About me</h2>
            <p className="text-slate-300 max-w-3xl leading-relaxed">
              My journey in AI marketing and project management began with a passion for leveraging 
              cutting-edge technology to solve complex business challenges. Through years of hands-on 
              experience with AI tools like ChatGPT, Gemini, and ClaudeAI, I've discovered how artificial 
              intelligence can transform marketing strategies and drive unprecedented growth. This expertise, 
              combined with strong project management skills, allows me to deliver measurable results 
              that exceed client expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <div className="w-4 h-4 bg-orange-400 rounded-full absolute -left-2"></div>
                <div className="border-l-2 border-slate-600 pl-8 pb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-slate-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">120 <span className="text-orange-400">+</span></div>
                <div className="text-slate-300">Completed Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">95 <span className="text-orange-400">%</span></div>
                <div className="text-slate-300">Client satisfaction</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">5 <span className="text-orange-400">+</span></div>
                <div className="text-slate-300">Years of experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Here are some of my recent successful projects that showcase my expertise in AI marketing and project management.
            </p>
          </div>
          
          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Link key={index} to="/projects" className="group">
                <Card className="bg-slate-700 border-slate-600 hover:border-orange-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-400/20">
                  <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-700 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-16 h-16 bg-orange-400/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <project.icon className="h-8 w-8 text-orange-400" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-slate-800/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4 text-orange-400" />
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-orange-400 bg-orange-400/20 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center text-xs text-slate-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center text-orange-400 text-sm font-medium group-hover:underline">
                      View Details
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
