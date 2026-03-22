import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Stethoscope, 
  Baby, 
  Activity, 
  FlaskConical, 
  ChevronRight, 
  CheckCircle2, 
  Star,
  MessageCircle,
  Menu,
  X,
  Navigation
} from 'lucide-react';
import clinicLogo  from './3d-logo.png';
// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Doctor {
  name: string;
  specialty: string;
  image: string;
  credentials: string[];
}

// --- Data ---
const SERVICES: Service[] = [
  {
    title: "Pediatric Care",
    description: "Specialized care for infants, children, and adolescents. Mula check-up hanggang bakuna.",
    icon: <Baby className="w-8 h-8 text-primary" />,
  },
  {
    title: "General Medicine",
    description: "Consultations for all ages. Gamutan para sa lagnat, ubo, at iba pang karamdaman.",
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
  },
  {
    title: "Laboratory Services",
    description: "Complete blood count (CBC), urinalysis, and more. Fast and accurate results.",
    icon: <FlaskConical className="w-8 h-8 text-primary" />,
  },
  {
    title: "X-Ray & ECG",
    description: "Modern diagnostic equipment for heart and lung health. Hindi na kailangang lumayo.",
    icon: <Activity className="w-8 h-8 text-primary" />,
  },
];

const DOCTORS: Doctor[] = [
  {
    name: "Dr. Maria Demano",
    specialty: "Pediatrician",
    image: "https://picsum.photos/seed/doctor1/400/400",
    credentials: ["Board Certified Pediatrician", "15+ Years Experience"],
  },
  {
    name: "Dr. Jose Demano",
    specialty: "General Physician",
    image: "https://picsum.photos/seed/doctor2/400/400",
    credentials: ["Family Medicine Expert", "Community Health Advocate"],
  },
];

const TESTIMONIALS = [
  {
    name: "Nanay Elena",
    text: "Napakabait ng mga doctor dito. Hindi matagal mag-antay at talagang inaalagaan ang mga bata. Highly recommended sa Ramon!",
    rating: 5,
  },
  {
    name: "Mang Ricardo",
    text: "Dito na kami nagpapa-X-ray. Mas mura kaysa sa bayan at mabilis makuha ang resulta. Salamat po!",
    rating: 5,
  },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl"> */}
              <img src={clinicLogo} width={100} height={100} alt="clinic logo" /> 
            {/* </div> */}
            <div>
              <h1 className="text-sm sm:text-lg font-bold leading-tight text-slate-900">DEMANO'S CLINIC</h1>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">Medical & Pediatric</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Services</a>
            <a href="#doctors" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Doctors</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Contact</a>
            <a href="tel:+639123456789" className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-sky-600 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl"
        >
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 py-2 border-b border-slate-50">Services</a>
          <a href="#doctors" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 py-2 border-b border-slate-50">Doctors</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-700 py-2 border-b border-slate-50">Contact</a>
          <div className="pt-2">
            <a href="tel:+639123456789" className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg">
              <Phone className="w-5 h-5" /> Tawag Na (Call Now)
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-sky-100 shadow-sm mb-6">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Open Now: 8AM - 5PM</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
          Expert Medical Care for Your <span className="text-primary italic">Whole Family</span> in Ramon.
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
          Kalingang pamilya, serbisyong subok na. Mula sa pediatric check-ups hanggang laboratory, nandito kami para sa inyo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-sky-200 hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Book Appointment <ChevronRight className="w-5 h-5" />
          </a>
          <a href="https://m.me/demanoclinic" target="_blank" rel="noopener" className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5 text-sky-500" /> Chat on Messenger
          </a>
        </div>
        
        <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Patient" />
            ))}
          </div>
          <p className="text-sm text-slate-500 font-medium">
            <span className="text-slate-900 font-bold">5,000+</span> Patients Trusted Us
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img src="https://picsum.photos/seed/clinic-hero/800/1000" alt="Clinic Interior" className="w-full h-[400px] sm:h-[500px] object-cover" />
        </div>
        {/* Floating Trust Badge */}
        <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[200px]">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">Accredited</p>
            <p className="text-sm font-bold text-slate-900 leading-tight">PhilHealth Provider</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const QuickStats = () => (
  <section className="py-12 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-sky-50 rounded-xl text-primary">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Our Location</h4>
          <p className="text-sm text-slate-500">Poblacion, Ramon, Isabela (Near Public Market)</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-emerald-50 rounded-xl text-secondary">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Clinic Hours</h4>
          <p className="text-sm text-slate-500">Mon - Sat: 8:00 AM - 5:00 PM</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-amber-50 rounded-xl text-accent">
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Emergency Contact</h4>
          <p className="text-sm text-slate-500">+63 912 345 6789</p>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">What We Offer</h3>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">Complete Healthcare Services</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Hindi mo na kailangang pumunta sa malayo. Lahat ng kailangan ng pamilya mo, nandito na sa Ramon.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
          >
            <div className="mb-6">{service.icon}</div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1">
        <img src="https://picsum.photos/seed/equipment/800/600" alt="Medical Equipment" className="rounded-3xl shadow-2xl" />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Bakit Kami?</h3>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-8">Modern Care with a Personal Touch</h2>
        
        <div className="space-y-6">
          {[
            { title: "Mabilis na Serbisyo", desc: "No long waiting times. Pinapahalagahan namin ang oras niyo." },
            { title: "Abot-kayang Presyo", desc: "Quality care that doesn't break the bank. PhilHealth accredited." },
            { title: "Modernong Kagamitan", desc: "High-quality X-ray and Lab equipment for accurate results." },
            { title: "Friendly Staff", desc: "Laging may ngiti at handang tumulong sa inyong pangangailangan." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Doctors = () => (
  <section id="doctors" className="py-20 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">Meet Our Doctors</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Expert and compassionate physicians dedicated to your health.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {DOCTORS.map((doc, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
            <div className="aspect-square overflow-hidden">
              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-1">{doc.name}</h4>
              <p className="text-primary font-bold mb-4">{doc.specialty}</p>
              <ul className="space-y-2">
                {doc.credentials.map((cred, i) => (
                  <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" /> {cred}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">Sabi ng Aming mga Pasyente</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-lg text-slate-700 italic mb-6">"{t.text}"</p>
            <p className="font-bold text-slate-900">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-8">Visit Us Today</h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Nandito kami sa Poblacion, Ramon, Isabela. Malapit lang sa Public Market. Madaling puntahan at may parking space para sa inyo.
        </p>
        
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-slate-400 uppercase font-bold tracking-widest">Phone</p>
              <p className="text-xl font-bold">+63 912 345 6789</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-slate-400 uppercase font-bold tracking-widest">Address</p>
              <p className="text-xl font-bold">Poblacion, Ramon, Isabela</p>
            </div>
          </div>
        </div>

        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=Ramon+Isabela+Philippines" 
          target="_blank" 
          rel="noopener"
          className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-slate-100 transition-all"
        >
          <Navigation className="w-6 h-6" /> Get Directions
        </a>
      </div>

      <div className="bg-white/5 p-8 sm:p-10 rounded-3xl border border-white/10">
        <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
          </div>
          <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-slate-400">
            <option>Select Service</option>
            <option>Pediatric Consultation</option>
            <option>General Check-up</option>
            <option>Laboratory / X-Ray</option>
          </select>
          <textarea placeholder="Message (Optional)" rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"></textarea>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-sky-600 transition-colors">
            Send Request
          </button>
          <p className="text-center text-xs text-slate-500 mt-4">
            We will call you back within 24 hours to confirm your schedule.
          </p>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-4 bg-slate-950 text-slate-500 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-sm">D</div>
        <p className="font-bold text-white">DEMANO'S CLINIC</p>
      </div>
      <div className="flex gap-8 text-sm">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
      <p className="text-xs">© 2026 Demano's Medical and Pediatric Clinic. All rights reserved.</p>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickStats />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex gap-3">
        <a href="tel:+639123456789" className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2 border-2 border-white/20">
          <Phone className="w-5 h-5" /> Call Now
        </a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Ramon+Isabela+Philippines" className="w-16 bg-white text-slate-900 rounded-2xl shadow-2xl flex items-center justify-center border-2 border-slate-100">
          <Navigation className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
