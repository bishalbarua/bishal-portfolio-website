import { ArrowRight, Mail, ExternalLink } from 'lucide-react';
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Hello, I'm{' '}
                  <span className="text-blue-600">Bishal Barua</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-slate-700 font-medium">
                  Project Manager | AI-Driven Marketing Expert
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  AI-Driven Project and Digital Marketing Manager with extensive experience 
                  building, maintaining, and running successful dev projects and marketing campaigns.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="w-full sm:w-auto">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:flex justify-center hidden">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-slate-900">Bishal Barua</h3>
                    <p className="text-slate-600">Marketing Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-slate-600">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">150%</div>
                <div className="text-slate-600">Lead Generation Increase</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-slate-600">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What I Do</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized in AI-driven marketing strategies and project management 
              that deliver measurable results for businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Project Management</h3>
                <p className="text-slate-600">
                  Leading cross-functional teams to deliver complex projects on time and under budget.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Digital Marketing</h3>
                <p className="text-slate-600">
                  Creating comprehensive digital marketing strategies across multiple platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">AI Marketing</h3>
                <p className="text-slate-600">
                  Leveraging AI tools and strategies to optimize marketing campaigns and ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how I can help grow your business with data-driven marketing strategies.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
