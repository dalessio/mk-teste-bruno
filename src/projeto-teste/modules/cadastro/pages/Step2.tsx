import React from 'react';
import { Provider } from "react-redux";
import store from "../../../data/store";
import { IStep2 } from "../../../data/step2";
import Step2Form from "./Step2Form";

import { Container } from 'react-bootstrap';

  function Step2() {
  
    const stepModel = (step: IStep2) => alert(`Dados ${step.digito1} `);
  
    return (   
      <Provider store={store}>
          <Step2Form onSubmit={stepModel} />
      </Provider>
    );
  }


export default Step2;
