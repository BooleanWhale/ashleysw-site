import React from 'react';
import '../styles/hero.css';

interface HeroProps {
  profileImageSrc: string;
  backgroundImageSrc: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ profileImageSrc, backgroundImageSrc, title, subtitle }) => {
  return (
    <section className="section section--hero">
      <div className="hero__background"></div>
      <div className="hero__content page-width">
        <img
          className="hero__image center"
          src={profileImageSrc}
          alt="Ashley Saleem-West"/>
        <div className="hero__details">
          <span className="hero-details__emoji small-hide">👋</span>
          <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>{title}</h1>
          <p style={{ fontSize: '20px' }}>{subtitle}</p>
          <div className="hero__buttons">
            <button className="button button--primary">Button</button>
            <button className="button button--secondary">Button 2</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
