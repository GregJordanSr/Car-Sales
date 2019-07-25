import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { ADD_FEATURE } from "./rootReducer";

import { useSelector, useDispatch } from 'react-redux';



const App = () => {
  
  const state = useSelector ((state) => state);
  const dispatch = useDispatch();

  console.log('My state', state)

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const addFeature = item => {
    // dipsatch  an action here to add an item.
    dispatch({ type: ADD_FEATURE, item })
    console.log(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header 
          car={state.car} 
        />

        <AddedFeatures  
          car={state.car} 
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
          store={state.store}
          addFeature={addFeature} 
        />

        <Total 
          car={state.car} 
          additionalPrice={state.additionalPrice} 
        />
      </div>
    </div>
  );
};

export default App;
