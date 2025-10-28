import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoIsThisFor from './components/WhoIsThisFor';
import Instructor from './components/Instructor';
import WhatYouGet from './components/WhatYouGet';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoIsThisFor />
        <Instructor />
        <WhatYouGet />
        <Testimonials />
        <FAQ />
        <EnrollmentForm />
      </main>
      <Footer />
    </>
  );
};

export default App;
