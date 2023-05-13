import React from 'react';

interface BannerProps {
  profileImageSrc: string;
  backgroundImageSrc: string;
  title: string;
  subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ profileImageSrc, backgroundImageSrc, title, subtitle }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: 'rgb(10,10,10)'
      }}
    >
      {/* <img
        src={profileImageSrc}
        alt="Profile"
        style={{ width: '100px', borderRadius: '50%', marginBottom: '20px' }}
      /> */}
      <h1 style={{ color: '#fff', fontSize: '40px', marginBottom: '10px' }}>{title}</h1>
      <p style={{ color: '#fff', fontSize: '20px' }}>{subtitle}</p>
      <button className="button button--primary">Button</button>
      <button className="button button--secondary">Button 2</button>
    </div>
  );
};

export default Banner;
