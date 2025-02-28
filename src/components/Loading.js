// Loading.js
import React from 'react';
import '../components/Loading.css' // Import CSS file for styling

const Loading = () => {
  return (
    <div className="wrapper">
      <div className="loader"></div>
      <div className="wording">
        <div className="letter">L</div>
        <div className="letter">o</div>
        <div className="letter">a</div>
        <div className="letter">d</div>
        <div className="letter">i</div>
        <div className="letter">n</div>
        <div className="letter">g</div>
        <div className="letter circle"></div>
        <div className="letter circle"></div>
        <div className="letter circle"></div>
      </div>
    </div>
  );
};

export default Loading;


