import React, { Component } from 'react';
import gamejam from '../public/images/gamejam.png';
import './App.css';
var FontAwesome = require('react-fontawesome');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <a href="/"><h1>enjam</h1></a>
        </header>
        <div className="main">
            <div className="row">
                <h1>HVAD ER ENJAM</h1>
                <p>Lorem ipsum dolor sit amet, cu propriae forensibus disputationi mea. Sed ut vidit omnesque laboramus, assum nostrum est no. Paulo nihil volumus vis at, sed an autem meliore dissentiet. Et mea nibh mazim, sea putent erroribus at, te vim dicant mentitum. Et eum animal nostrud, eos ei unum dictas minimum, ut minimum eloquentiam eum.</p>
            </div>
            <div className="row">
                <h1>NÆSTE EVENT</h1>
                <a href="https://www.facebook.com/Enjam-372621173107851/"><img src={gamejam} className="event-image"/></a>
                <a href="https://www.facebook.com/Enjam-372621173107851/"><h1 id="event-header">Gamejam</h1></a>
                <h2>23.-25. marts</h2>
                <p>Lorem ipsum dolor sit amet, cu propriae forensibus disputationi mea. Sed ut vidit omnesque laboramus, assum nostrum est no. Paulo nihil volumus vis at, sed an autem meliore dissentiet. Et mea nibh mazim, sea putent erroribus at, te vim dicant mentitum. Et eum animal nostrud, eos ei unum dictas minimum, ut minimum eloquentiam eum.</p>
                <a href="https://www.facebook.com/Enjam-372621173107851/" className="button">TILMELD</a>
            </div>
            <div className="row">
                <h1>FØLG OS PÅ FACEBOOK</h1>
                <a href="https://www.facebook.com/Enjam-372621173107851/"><FontAwesome name='facebook-square' size='3x' className='fb-button' /></a>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
