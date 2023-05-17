import * as React from "react";
import { Provider } from "react-redux";
import store from "../../../data/store";
import { IStep1 } from "../../../data/step1";
import Step1Form from "./Step1Form";

function Step1() {
  
  const step1Model = (step1: IStep1) => alert(`Dados ${step1.nome} `);

  return (   
    <Provider store={store}>
        <Step1Form onSubmit={step1Model} />
    </Provider>
  );
}

export default Step1;
