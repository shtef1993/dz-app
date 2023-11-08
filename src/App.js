import React from 'react';
import _ from 'lodash';

function App() {
  const string1 = 'Prvi string';
  const string2 = 'Drugi string';

  const textElement = <p>Ovo je neki tekst na ekranu.</p>;

  const textWithVariable = <p>Ovo je tekst s varijablom: {string1}</p>;

  const textWithBothVariables = (
    <p>
      Varijabla 1: {string1}, Varijabla 2: {string2}
    </p>
  );

  return (
    <div className="App">
      {textElement}
      {textWithVariable}
      {textWithBothVariables}
    </div>
  );
}

export default App;
