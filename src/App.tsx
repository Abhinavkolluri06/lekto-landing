/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Glimpse from './components/Glimpse';
import TechTicker from './components/TechTicker';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Architecture from './components/Architecture';
import Metrics from './components/Metrics';
import Roadmap from './components/Roadmap';
import Faq from './components/Faq';
import WaitlistCta from './components/WaitlistCta';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-rose-100 selection:text-rose-900 bg-white">
      <Toast />
      <Header />
      <main className="flex-grow">
        <Hero />
        <TechTicker />
        <Glimpse />
        <Metrics />
        <Features />
        <Comparison />
        <Architecture />
        <Roadmap />
        <Faq />
        <WaitlistCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


