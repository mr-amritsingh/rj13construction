import React, { useState } from 'react';
import { Home, Wrench, Plus, RefreshCw, Building2, Layers } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: 'New Home Construction',
      shortDescription: 'Complete home building from foundation to finish with quality craftsmanship.',
      fullDescription: 'Our comprehensive new home construction service covers every aspect of building your dream home. From initial site preparation and foundation work to final finishing touches, we manage the entire process with meticulous attention to detail. We work with skilled subcontractors and use quality materials that meet or exceed BC building codes. Our experienced project managers ensure your build stays on schedule and within budget while maintaining the highest standards of craftsmanship.',
      features: [
        'Site preparation and excavation coordination',
        'Foundation and concrete work supervision',
        'Complete structural framing and roofing',
        'Coordination with electrical, plumbing, and HVAC trades',
        'Interior and exterior finishing',
        'Final inspection and warranty support'
      ],
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: 'Custom Home Builds',
      shortDescription: 'Personalized design-build approach for your unique vision and lifestyle.',
      fullDescription: 'Every family has unique needs, and every lot presents different opportunities. Our custom home building service combines architectural expertise with construction excellence to create homes that perfectly match your lifestyle and preferences. We work closely with architects, designers, and homeowners throughout the design-build process, offering guidance on layout optimization, material selection, and innovative building techniques that maximize both functionality and aesthetic appeal.',
      features: [
        'Collaborative design-build approach',
        'Architectural coordination and consulting',
        'Material selection and sourcing guidance',
        'Energy-efficient building techniques',
        'Custom millwork and finishing options',
        'Flexible timeline accommodation'
      ],
      image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      icon: <Layers className="h-12 w-12 text-blue-600" />,
      title: 'Residential Framing',
      shortDescription: 'Expert structural and wood framing for solid, lasting construction.',
      fullDescription: 'Framing is the backbone of any structure, and precision at this stage determines the quality and longevity of the entire build. Our experienced framing crew specializes in both traditional wood framing and modern engineered lumber systems. We ensure all structural elements are properly sized, positioned, and connected according to engineering specifications and building codes. Our attention to detail in framing creates the solid foundation for all subsequent construction phases.',
      features: [
        'Precision wood framing and structural work',
        'Engineered lumber and beam installation',
        'Floor, wall, and roof system construction',
        'Compliance with BC building codes',
        'Quality materials from trusted suppliers',
        'Detailed progress documentation'
      ],
      image: 'https://images.pexels.com/photos/209293/pexels-photo-209293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      icon: <Plus className="h-12 w-12 text-blue-600" />,
      title: 'Home Additions & Expansions',
      shortDescription: 'Seamlessly expand your living space with structural expertise.',
      fullDescription: 'Growing families need growing spaces. Our home addition and expansion service helps you maximize your property\'s potential without the hassle of moving. Whether you need a second story, expanded kitchen, or additional bedroom, we ensure new construction seamlessly integrates with existing structures. We handle all structural modifications, permit applications, and coordinate with trades to deliver functional, beautiful additions that feel like original parts of your home.',
      features: [
        'Structural analysis and modification',
        'Permit application and approval process',
        'Foundation extensions and connections',
        'Roofline integration and modifications',
        'Interior and exterior finish matching',
        'Minimal disruption construction methods'
      ],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-blue-600" />,
      title: 'Home Renovations',
      shortDescription: 'Transform existing spaces with structural modifications and updates.',
      fullDescription: 'Breathe new life into your existing home with our comprehensive renovation services. From removing walls to create open-concept living spaces to updating structural elements for modern functionality, we handle renovations of all scales. Our team understands the complexities of working within existing structures and can navigate the challenges of older homes while implementing modern building standards and energy efficiency improvements.',
      features: [
        'Load-bearing wall removal and modification',
        'Structural reinforcement and upgrades',
        'Layout reconfiguration and optimization',
        'Integration of modern building systems',
        'Heritage home restoration expertise',
        'Code compliance and safety upgrades'
      ],
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: 'Basement Finishing',
      shortDescription: 'Convert unfinished basements into beautiful, functional living spaces.',
      fullDescription: 'Your basement represents valuable square footage that can significantly enhance your home\'s functionality and value. Our basement finishing service transforms unused below-grade spaces into comfortable, code-compliant living areas. We address moisture control, insulation, lighting, and egress requirements while creating beautiful spaces perfect for recreation rooms, home offices, additional bedrooms, or rental suites.',
      features: [
        'Moisture control and waterproofing',
        'Proper insulation and vapor barriers',
        'Egress window installation',
        'Electrical and plumbing rough-in coordination',
        'Ceiling height optimization',
        'Rental suite conversion expertise'
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive residential construction and framing services designed to bring your vision to life 
              with quality craftsmanship, reliable timelines, and exceptional attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What We Do Best</h2>
            <p className="text-xl text-gray-600">
              Click on any service below to learn more about our expertise and approach.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                        
                        <button
                          onClick={() => setActiveService(activeService === index ? null : index)}
                          className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                        >
                          {activeService === index ? 'Show Less' : 'Learn More'}
                        </button>

                        {activeService === index && (
                          <div className="mt-6 space-y-4 border-t border-gray-200 pt-6">
                            <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
                            
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-3">What's Included:</h4>
                              <ul className="grid sm:grid-cols-2 gap-2">
                                {service.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start space-x-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-600">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Service Commitment</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Quality Materials</h3>
              <p className="text-gray-600">We source premium materials from trusted suppliers and ensure compliance with BC building codes.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">Our experienced team delivers precision workmanship with attention to every detail.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Reliable Timeline</h3>
              <p className="text-gray-600">Clear project schedules with consistent communication and milestone updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and detailed quote for your residential construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+17783206219"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call (778) 320-6219
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;