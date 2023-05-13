import React from 'react';
import logo from '../logo.svg';
import Hero from '../sections/Hero';
import Codepens from '../sections/Codepens';

type Props = {}

function Home({}: Props) {
  return (
    <>
      <div className="App">
        <Hero
          profileImageSrc="/images/ashley-saleem-west.webp"
          backgroundImageSrc="path/to/background/image.jpg"
          title="Welcome to My Website"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Codepens/>
      </div>
    </>
  )
}

export default Home