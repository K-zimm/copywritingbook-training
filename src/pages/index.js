import * as React from 'react';

import Wistia from '../components/wistia-video';

import BackgroundImage from '../images/camp-fire.jpg';
import Logo from '../images/logo-light.png';

// styles
const pageStyles = {
  color: '#232129',
  margin: -8,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#efefef',
};
const headingStyles = {
  marginBottom: 30,
  color: '#000000',
  textTransform: 'uppercase',
  fontSize: 24,
  padding: '0 30px',
  textAlign: 'center',
};

const videoStyles = {
  width: '90%',
  maxWidth: 700,
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  marginBottom: 30,
};

const buttonStyles = {
  color: 'rgb(255, 255, 255)',
  fontWeight: 600,
  backgroundColor: 'rgb(33, 185, 11)',
  fontSize: 30,
  textDecoration: 'none',
  display: 'inline-block',
  boxShadow:
    'inset 0 2px 2px 0 rgb(255 255 255 / 22%), 0 233px 233px 0 rgb(255 255 255 / 12%) inset, 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  padding: '15px 25px',
  borderRadius: 10,
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Copywriting Book Training</title>
      <h1 style={headingStyles}>Copywritingbook.com Advanced Training</h1>
      <Wistia />
      {/* <video
        controls
        autoplay
        controlsList='nodownload'
        name='media'
        style={videoStyles}
      >
        <source
          src='https://embed-ssl.wistia.com/deliveries/f6c79f17ba7bf3e0a3917131ceb908ad.bin'
          type='video/mp4'
        />
      </video> */}
      <a
        href='https://sso.teachable.com/secure/652031/checkout/2054197/copywriting-mastery'
        style={buttonStyles}
      >
        Enroll Now
      </a>
    </main>
  );
};

export default IndexPage;
