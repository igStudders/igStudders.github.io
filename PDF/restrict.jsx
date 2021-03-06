import React from 'react';
import ReactDOM from 'react-dom';

const Directories = ["/C3TR.pdf", "/Chapter-4-7-Quiz-C-LOTF.pdf", "/Character-Comparison-Venn-Diagram.pdf", "/Hitler-Youth-Speech.pdf", "/Holocaust-a-history-free.pdf", "/Night-Quiz1a.pdf", "/Night-Quiz2b.pdf", "/Oprah-Elie-Video.pdf.pdf", "/Section22.1-Earth's-Structure.pdf", "/CYU294.pdf", "/CYU156-157.pdf", "/CYU120.pdf", "/CYU112.pdf", "/CYU107.pdf", "/CYU82.pdf", "/CYU7-8.pdf", "/Chapter_22.ppt", "/Ch22S1.ppt", "/Webquest-ShermanAlexie.pdf", "/Symbolism-in-LOTF.pdf", "/CYU298.pdf", "/CYU301.pdf"];

const listDirectories = Directory.map(Directory => <li>{Directory}</li>);

class Redirect extends React.Component {
  render() {
  if (window.location.href = "igstudder.github.io/PDF" + Directory)) {
      ReactDOM.render(
        '<META http-equiv="refresh" content="0;URL=Index.html">',
        document.getElementById('app')
      );
    };
  };
};
