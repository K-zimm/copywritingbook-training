import React from 'react';

class WistiaVideo extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/embed/medias/3nuflfy2bb.jsonp';
    script.async = true;
    document.body.appendChild(script);

    const scriptTwo = document.createElement('script');
    scriptTwo.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    scriptTwo.async = true;
    document.body.appendChild(scriptTwo);
  }

  render() {
    return (
      <div
        className='wistia_responsive_padding'
        style={{
          position: 'relative',
          width: '90%',
          maxWidth: 700,
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          marginBottom: 30,
        }}
      >
        <div
          className='wistia_responsive_wrapper'
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          <div
            className='wistia_embed wistia_async_3nuflfy2bb seo=false videoFoam=true'
            style={{ height: '100%', position: 'relative', width: '100%' }}
          >
            <div
              className='wistia_swatch'
              style={{
                height: '100%',
                left: 0,
                opacity: 0,
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                transition: 'opacity 200ms',
                width: '100%',
              }}
            >
              <img
                src='https://fast.wistia.com/embed/medias/3nuflfy2bb/swatch'
                style={{
                  filter: 'blur(5px)',
                  height: '100%',
                  objectFit: 'contain',
                  width: '100%',
                }}
                alt=''
                aria-hidden='true'
                onload='this.parentNode.style.opacity=1;'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WistiaVideo;
