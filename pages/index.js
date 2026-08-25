import React, { useState } from 'react';
import { ChevronDown, Check, Zap, BarChart3, Lock, Headphones, Github, Twitter, Linkedin } from 'react-feather';
import Link from 'next/link';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send to email service
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-500">⚡ ELITE FUSION</div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-emerald-500 transition">Features</a>
            <a href="#pricing" className="hover:text-emerald-500 transition">Pricing</a>
            <a href="#faq" className="hover:text-emerald-500 transition">FAQ</a>
          </div>
          <a href="https://app.elite-fusion.com" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold transition">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/50 rounded-full">
            <span className="text-emerald-400 text-sm font-semibold">🚀 Now Live: AI-Powered Automation</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> AI Automation</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Execute thousands of AI jobs in seconds. Pay only for what you use. Scale from startup to enterprise instantly.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg flex-1 md:flex-none focus:outline-none focus:border-emerald-500 transition"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Start Free
              </button>
            </form>
          </div>
          
          {submitted && (
            <div className="text-emerald-400 text-sm font-semibold mb-6">
              ✓ Check your email for next steps!
            </div>
          )}
          
          <div className="text-gray-500 text-sm">
            💳 No credit card required • 🔒 Secure & Encrypted • ⚡ Instant Setup
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-emerald-500" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-800/50 border-t border-gray-700">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">2.5M+</div>
            <div className="text-gray-400">Jobs Processed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">$181K</div>
            <div className="text-gray-400">Monthly Revenue</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap size={32} className="text-emerald-400" />,
                title: "Lightning Fast",
                desc: "Process 1,000+ jobs per second with sub-2ms latency"
              },
              {
                icon: <BarChart3 size={32} className="text-emerald-400" />,
                title: "Real-Time Analytics",
                desc: "Track revenue, customer metrics, and performance live"
              },
              {
                icon: <Lock size={32} className="text-emerald-400" />,
                title: "Enterprise Security",
                desc: "99.99% SLA, encryption, and compliance ready"
              },
              {
                icon: <Headphones size={32} className="text-emerald-400" />,
                title: "24/7 Support",
                desc: "Expert support team ready to help you scale"
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-emerald-500 transition">
                {feature.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-800/50 border-y border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$0",
                period: "forever",
                features: [
                  "100 jobs/month",
                  "1 API key",
                  "Email support",
                  "7 days history"
                ]
              },
              {
                name: "Professional",
                price: "$499",
                period: "/month",
                highlighted: true,
                features: [
                  "10,000 jobs/month",
                  "5 API keys",
                  "Priority support",
                  "90 days history",
                  "Analytics dashboard",
                  "Slack integration"
                ]
              },
              {
                name: "Enterprise",
                price: "$2,999",
                period: "/month",
                features: [
                  "Unlimited jobs",
                  "Unlimited API keys",
                  "24/7 phone support",
                  "1 year history",
                  "White-label option",
                  "Dedicated manager"
                ]
              }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-lg border transition ${
                plan.highlighted 
                  ? 'bg-emerald-500/10 border-emerald-500 scale-105' 
                  : 'bg-gray-800/50 border-gray-700 hover:border-emerald-500'
              }`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-emerald-500 hover:bg-emerald-600'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-3">
                      <Check size={20} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted by Innovators</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                title: "CEO, TechStartup",
                quote: "ELITE FUSION saved us $50K/month in infrastructure costs"
              },
              {
                name: "Sarah Chen",
                title: "CTO, DataCorp",
                quote: "The automation is incredible. We scaled 10x without hiring"
              },
              {
                name: "Marcus Lee",
                title: "Founder, AI Labs",
                quote: "Best investment we made. ROI was instant"
              }
            ].map((testimonial, i) => (
              <div key={i} className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
                <p className="text-gray-300 mb-4 italic">\"{ testimonial.quote}\"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-800/50 border-t border-gray-700">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "How does billing work?",
                a: "You only pay for jobs you execute. Free tier includes 100/month. After that, pay-per-use starts at $0.50/job. Subscriptions include unlimited jobs + priority support."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes! Cancel your subscription anytime with no penalties. You can keep using free tier or downgrade immediately."
              },
              {
                q: "What's the uptime guarantee?",
                a: "We guarantee 99.99% uptime with enterprise SLA. If we go down, you get service credits automatically."
              },
              {
                q: "Do you offer API access?",
                a: "Yes! Full REST API with 40+ endpoints. Webhooks, batch processing, real-time streaming all supported."
              },
              {
                q: "Is my data secure?",
                a: "Enterprise-grade security. AES-256 encryption, SOC 2 compliant, GDPR ready, regular penetration testing."
              },
              {
                q: "How do I get started?",
                a: "Sign up free (no card required), run 100 jobs/month, upgrade when you need more. Takes 5 minutes."
              }
            ].map((faq, i) => (
              <details key={i} className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg cursor-pointer group">
                <summary className="font-semibold text-lg flex justify-between items-center">
                  {faq.q}
                  <span className="transform group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-400 mb-8">Join 500+ companies already using ELITE FUSION</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg md:flex-1 focus:outline-none focus:border-emerald-500 transition"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Start Free Today
            </button>
          </form>
          
          <p className="text-gray-500 text-sm">
            💳 No credit card required • 🔒 Secure & Encrypted • ⚡ Instant Setup
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-700 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ELITE FUSION</h3>
              <p className="text-gray-400">AI-powered automation platform for modern teams</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Features</a></li>
                <li><a href="#" className="hover:text-emerald-400">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-400">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">About</a></li>
                <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-400">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-400">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2026 ELITE FUSION. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-400"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-400"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;