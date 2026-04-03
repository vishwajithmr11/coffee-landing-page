/* src/components/AboutUs.tsx */
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            At Premium Coffee, we believe in the art of coffee. Our journey began with a passion for sourcing the finest beans from around the globe and roasting them to perfection. We are committed to ethical sourcing, sustainable practices, and delivering an unparalleled coffee experience to your cup.
          </p>
          <p>
            Every bean tells a story, and we're here to share those stories with you, one exquisite cup at a time. Discover the difference that dedication, quality, and passion can make.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1504631343701-f2ec1ac010d8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us Coffee" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
