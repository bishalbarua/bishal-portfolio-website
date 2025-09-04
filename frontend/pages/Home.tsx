import { ArrowRight, Mail, Code, Monitor, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    'HTML5',
    'CSS',
    'JavaScript',
    'Node.js',
    'React',
    'Git',
    'GitHub'
  ];

  const services = [
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Leading cross-functional teams to deliver complex projects on time and under budget.'
    },
    {
      icon: Code,
      title: 'Digital Marketing',
      description: 'Creating comprehensive digital marketing strategies across multiple platforms.'
    },
    {
      icon: Server,
      title: 'AI Marketing',
      description: 'Leveraging AI tools and strategies to optimize marketing campaigns and ROI.'
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
                   AI-Driven Marketing Expert | Project Manager
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
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900">
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
                <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-72 h-72 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700">
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
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">About me</h2>
            <p className="text-slate-300 max-w-3xl leading-relaxed">
              I started my software journey from photography. Through that, I learned to 
              love the process of creating from scratch. Since then, this has led me to 
              software development as it fulfills my love for learning and building things.
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
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto"></div>
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
