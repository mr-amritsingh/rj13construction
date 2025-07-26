import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      location: 'Langley, BC',
      project: 'Custom Home Build',
      rating: 5,
      text: 'RJ 13 Construction exceeded our expectations in every way. From the initial consultation to the final walkthrough, their professionalism and attention to detail were outstanding. Our dream home became a reality thanks to their expert craftsmanship and transparent communication throughout the entire process.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      id: 2,
      name: 'Mike D.',
      location: 'Surrey, BC',
      project: 'Home Addition',
      rating: 5,
      text: 'Outstanding framing work on our second-story addition. The team was punctual, clean, and incredibly skilled. They managed to complete the structural work with minimal disruption to our daily lives. The quality of their workmanship is evident in every beam and joint. Highly recommend!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      id: 3,
      name: 'Jennifer & Tom K.',
      location: 'White Rock, BC',
      project: 'New Home Construction',
      rating: 5,
      text: 'We couldn\'t be happier with our new home! RJ 13 Construction delivered exactly what they promised - on time, on budget, and with exceptional quality. Their project management was flawless, and they kept us informed every step of the way. This is our forever home, built perfectly.',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      id: 4,
      name: 'Robert L.',
      location: 'Langley, BC',
      project: 'Basement Finishing',
      rating: 5,
      text: 'The basement finishing project transformed our unused space into a beautiful family room and home office. The team handled all the technical challenges - moisture control, proper insulation, and code compliance - while creating a space that feels like an integral part of our home.',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      id: 5,
      name: 'Lisa P.',
      location: 'Fraser Valley, BC',
      project: 'Home Renovation',
      rating: 5,
      text: 'Our 1960s home needed major structural updates, and RJ 13 Construction handled the complex renovation beautifully. They preserved the character we loved while bringing everything up to modern standards. Their expertise with older homes really showed throughout the project.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      id: 6,
      name: 'David & Karen R.',
      location: 'Langley, BC',
      project: 'Custom Framing',
      rating: 5,
      text: 'The precision and craftsmanship in the framing of our custom home was remarkable. Every angle was perfect, every beam properly placed. Their structural expertise gave us complete confidence in our home\'s foundation. Professional, reliable, and highly skilled.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    }
  ];

  const stats = [
    { number: '50+', label: 'Completed Projects' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '5 Star', label: 'Average Rating' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">What Our Clients Say</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from satisfied homeowners who have experienced 
              the RJ 13 Construction difference firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Client Experiences</h2>
            <p className="text-xl text-gray-600">
              Real feedback from real clients who trusted us with their most important investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 relative hover:shadow-xl transition-shadow">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                      <div className="text-blue-600 text-sm font-medium">{testimonial.project}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Built on Trust & Excellence</h2>
          <p className="text-xl text-gray-300 mb-12">
            Our reputation is built on consistent delivery of quality workmanship, 
            reliable service, and exceptional client relationships.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5-Star Service</h3>
              <p className="text-gray-300">Consistently rated 5 stars for quality, communication, and professionalism.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Referrals</h3>
              <p className="text-gray-300">Over 80% of our business comes from client referrals and repeat customers.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white font-bold text-lg">BC</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-300">Fully licensed and insured for your complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the RJ 13 Construction difference for yourself. Contact us today to discuss 
            your residential construction project and discover why our clients recommend us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+17783206219"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call (778) 320-6219
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;