import * as React from "react";

import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { IStep2 } from "../../../data/step2";

//import { OTPInput } from "../../components/Inputs/pages/OTPInput";

import '../css/Step1.css';

class Step2Form extends React.Component<InjectedFormProps<IStep2>> {

    render() {

    const { pristine, submitting, reset, handleSubmit } = this.props;

    return (   
      <Container className="p-2">

      <h1 className="header Layout-titulo p-2">Validacao da Conta</h1>
      <h6 className='Layout-texto p-2'>
        Enviamos uma mensagem SMS com o codigo de confirmacao,<br/>
        para o celular abaixo.
      </h6>
  
      <h6 className='Layout-sub-titulo p-3'>
        (21) 99999-9999
      </h6>
  
      <Form className='Layout-texto p-2' onSubmit={handleSubmit}>

        <Row className="p-2">
          <Col>
            <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">            
              <Field className='m-2 text-center form-control rounded' name="digito1" component="input" type="text" maxLength={1} />
              <Field className='m-2 text-center form-control rounded' name="digito2" component="input" type="text" maxLength={1} />
              <Field className='m-2 text-center form-control rounded' name="digito3" component="input" type="text" maxLength={1} />
              <Field className='m-2 text-center form-control rounded' name="digito4" component="input" type="text" maxLength={1} />
              <Field className='m-2 text-center form-control rounded' name="digito5" component="input" type="text" maxLength={1} />
              <Field className='m-2 text-center form-control rounded' name="digito6" component="input" type="text" maxLength={1} />           
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <button className="btn btn-success px-4 validate">Confirmar</button>
        </div>

      </Form>
    </Container>    
    );
  }
}

export default reduxForm<IStep2>({
  form: 'Step2Form',
})(Step2Form);