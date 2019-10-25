import React from 'react';
import Chat from './Chat';
import Tabs from './Tabs';
require('./style.css');



function App() {
  return (
    <div>
      <h1>Barvida Demo</h1>
     <Tabs>
      <div  label="Start Seite">
       <div className="Tabstyle" > <div className="knockout">BΛRVIDΛ </div> </div>
      </div>
      <div  label="Chat">
        <Chat/>
      </div>
      <div label="Info">
      <div className="Tabstyle"><h1>Barvida GmbH</h1>

                  <h4>Gerhart-Hauptmannstr. 6<br />
                  33613 Bielefeld<br />
                  info@barvida.de</h4> </div>
      </div>
    </Tabs>
    </div>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
//render(<App />, container);

export default App;