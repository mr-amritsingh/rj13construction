import React from 'react';
import { Award, Shield, Users, Target, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: 'Quality Craftsmanship',
      description: 'We take pride in every detail, ensuring each project meets the highest standards of construction excellence.'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Integrity & Trust',
      description: 'Honest communication, transparent pricing, and reliable service form the foundation of our client relationships.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Client Satisfaction',
      description: 'Your vision becomes our mission. We work closely with clients to exceed expectations at every stage.'
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: 'Precision & Safety',
      description: 'Adherence to BC building codes and safety standards ensures lasting quality and peace of mind.'
    }
  ];

  const achievements = [
    'Licensed and insured residential construction contractor',
    'Adherence to all BC building codes and regulations',
    'Commitment to sustainable building practices',
    'Strong local reputation in Langley and Fraser Valley',
    'Experienced team with decades of combined expertise',
    'Comprehensive project management from start to finish'
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About RJ 13 Construction</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Building dreams into reality with uncompromising quality, 
              professional expertise, and a commitment to excellence that spans every project.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  RJ 13 Construction was founded with a simple yet powerful vision: to deliver exceptional 
                  residential construction and framing services that exceed client expectations while 
                  maintaining the highest standards of craftsmanship and professionalism.
                </p>
                <p>
                  Based in Langley, British Columbia, we have built our reputation on the foundation of 
                  quality work, reliable timelines, and honest communication. Every home we frame, every 
                  project we complete, and every client relationship we build reflects our commitment to 
                  excellence in the construction industry.
                </p>
                <p>
                  Our experienced team brings together decades of combined expertise in residential 
                  construction, from traditional wood framing to modern custom home builds. We understand 
                  that your home is more than just a structure – it's where life happens, memories are 
                  made, and futures are built.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Construction site"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Expert</div>
                <div className="text-sm">Construction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            "To provide superior residential construction and framing services that combine traditional 
            craftsmanship with modern techniques, delivering projects on time, on budget, and beyond 
            expectations. We are committed to building lasting relationships with our clients through 
            integrity, quality, and exceptional service."
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Commitment to Excellence</h2>
              <p className="text-xl text-gray-300 mb-8">
                We maintain the highest professional standards and stay current with industry 
                best practices to ensure every project meets or exceeds regulatory requirements.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-lg">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/209293/pexels-photo-209293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Construction framing"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Serving Our Community</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            RJ 13 Construction is proud to be part of the Langley and Fraser Valley community. 
            We believe in supporting local businesses, sourcing quality materials from trusted 
            suppliers, and contributing to the growth and development of beautiful, sustainable 
            neighborhoods throughout British Columbia.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every project we complete strengthens our community, and every satisfied client 
            becomes part of our extended family. This local connection drives our commitment 
            to excellence and ensures that we're not just building structures – we're building 
            the foundation of our community's future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;