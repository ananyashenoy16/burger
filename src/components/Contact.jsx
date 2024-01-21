import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Dynamically create a script element
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div class="hero">
    <div className="visme_d" data-title="Contact Me Contact Form" data-url="rx8j6k38-contact-me-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="12771"></div>
    </div>
  );
};

export default Contact;
