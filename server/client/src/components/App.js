import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './Landing';

const App = () => {
  return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />

          </div>

        </BrowserRouter>

      </div>
  );


};

export default App;
