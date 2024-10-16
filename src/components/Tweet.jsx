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
    <div className="relative w-full max-w-[500px] mx-auto">
      <a
        className="twitter-timeline"
        data-width="100%" // Use 100% width to make it responsive
        data-height="500" // Keep the height fixed, you can adjust this
        href="https://twitter.com/DiegoEliasCosta?ref_src=twsrc%5Etfw"
      >
        Tweets by Diego Elias Costa Damasceno
      </a>
    </div>
  );
};

export default TwitterTimeline;
