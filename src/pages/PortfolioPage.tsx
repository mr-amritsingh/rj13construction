import React, { useState } from 'react';
import { Filter, ExternalLink, MapPin } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'New Builds', 'Custom Homes', 'Framing', 'Renovations', 'Additions'];

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      location: 'Langley, BC',
      category: 'New Builds',
      description: 'Complete new home construction featuring open-concept living, vaulted ceilings, and premium finishes throughout.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['2,400 sq ft', '4 bedrooms', '3 bathrooms', 'Double garage'],
      completedYear: '2024'
    },
    {
      id: 2,
      title: 'Custom Timber Frame Home',
      location: 'Fraser Valley, BC',
      category: 'Custom Homes',
      description: 'Luxury custom build incorporating traditional timber framing with modern amenities and energy-efficient systems.',
      image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['3,200 sq ft', 'Exposed beams', 'Radiant heating', 'Smart home features'],
      completedYear: '2024'
    },
    {
      id: 3,
      title: 'Residential Framing Project',
      location: 'Langley, BC',
      category: 'Framing',
      description: 'Precision wood framing for a two-story family home, showcasing our structural expertise and attention to detail.',
      image: 'https://images.pexels.com/photos/209293/pexels-photo-209293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['Engineered lumber', 'Complex roof lines', 'Load-bearing modifications'],
      completedYear: '2023'
    },
    {
      id: 4,
      title: 'Heritage Home Renovation',
      location: 'Langley, BC',
      category: 'Renovations',
      description: 'Comprehensive renovation of a 1950s home, preserving character while adding modern functionality.',
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['Kitchen expansion', 'Bathroom upgrades', 'Structural reinforcement'],
      completedYear: '2023'
    },
    {
      id: 5,
      title: 'Second Story Addition',
      location: 'Surrey, BC',
      category: 'Additions',
      description: 'Complete second-story addition doubling the living space while maintaining the home\'s original character.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['Foundation reinforcement', '3 new bedrooms', 'Updated electrical'],
      completedYear: '2023'
    },
    {
      id: 6,
      title: 'Contemporary Custom Build',
      location: 'White Rock, BC',
      category: 'Custom Homes',
      description: 'Striking contemporary home with clean lines, floor-to-ceiling windows, and sustainable building materials.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['2,800 sq ft', 'Sustainable materials', 'Energy Star certified'],
      completedYear: '2024'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our completed projects showcasing quality craftsmanship, innovative design, 
              and successful collaborations with homeowners throughout BC.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {project.completedYear}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1 group-hover:translate-x-2 transition-transform"
                  >
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedProject.location}
                </div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {selectedProject.category}
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{selectedProject.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Project Features</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mr-4"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Discuss Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Inspired by Our Work?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Every project starts with a conversation. Let's discuss how we can bring your vision to life 
            with the same quality and attention to detail you see in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="tel:+17783206219"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call for Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;