import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Clock, Users, Star, Phone } from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      title: 'New Home Construction',
      description: 'Complete home building from foundation to finish with quality craftsmanship.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Custom Home Builds',
      description: 'Personalized design-build approach for your dream home.',
      image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Residential Framing',
      description: 'Expert structural framing and wood framing services.',
      image: 'https://images.pexels.com/photos/209293/pexels-photo-209293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Quality Craftsmanship',
      description: 'Meticulous attention to detail in every project we undertake.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'On-Time Delivery',
      description: 'Reliable project timelines with consistent communication.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Experienced Team',
      description: 'Skilled professionals with years of construction expertise.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'RJ 13 Construction exceeded our expectations. Their attention to detail and professionalism made our home building process smooth and stress-free.',
      rating: 5,
      project: 'Custom Home Build'
    },
    {
      name: 'Mike D.',
      text: 'Outstanding framing work on our addition. The team was punctual, clean, and delivered exactly what was promised. Highly recommend!',
      rating: 5,
      project: 'Home Addition'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)'
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building Your Future,<br />
            <span className="text-blue-400">One Frame at a Time</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Professional residential construction and framing services in Langley, BC. 
            Quality craftsmanship, reliable timelines, exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From new construction to custom builds and structural framing, 
              we deliver exceptional residential construction services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1 group-hover:translate-x-2 transition-transform"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose RJ 13 Construction?</h2>
            <p className="text-xl text-gray-600">
              We combine expertise, reliability, and quality to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from satisfied homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-600 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-300">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+17783206219"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;