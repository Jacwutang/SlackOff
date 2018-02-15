import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './landing';

const App = () => {
  return(
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />

          </div>

        </BrowserRouter>

      </div>
  );


};

export default App;
