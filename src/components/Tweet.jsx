import React, { useEffect } from 'react';

const TwitterTimeline = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="twitter-timeline"
      data-width="500" 
      data-height="500" 
      href="https://twitter.com/DiegoEliasCosta?ref_src=twsrc%5Etfw"
    >
      Tweets by Diego Elias Costa Damasceno
    </a>
  );
};

export default TwitterTimeline;
