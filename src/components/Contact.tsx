
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
            Contact
          </span>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Let's connect to discuss opportunities, collaborations, or just to chat
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-muted">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <a href="mailto:michelle.zhang1189@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      michelle.zhang1189@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                    <a href="tel:425-599-7547" className="text-foreground hover:text-primary transition-colors">
                      425-599-7547
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                    <p className="text-foreground">Seattle, Washington</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">LinkedIn</h4>
                    <a href="https://linkedin.com/in/" className="text-foreground hover:text-primary transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-muted">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
