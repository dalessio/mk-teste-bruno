import * as React from "react";

import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { IStep1 } from "../../../data/step1";

import '../css/Step1.css';

class Step1Form extends React.Component<InjectedFormProps<IStep1>> {

    render() {

    const { pristine, submitting, reset, handleSubmit } = this.props;

    return (   
      <Container className="p-2">
  
      <h1 className="header Layout-titulo p-2">Cadastre sua Conta</h1>
      <h6 className='Layout-texto p-3'>
        Preencha seu email que utiliza profissionalmente,<br/>
        nome completo de pessoa fisica e seu numero de celular.
      </h6>
      <Form className='Layout-texto p-2' onSubmit={handleSubmit}>

        <Row className="p-2">
          <Col>
            <label>Email</label>
            <Field className='form-control Layout-texto' name="email" component="input" type="email" placeholder="Entre com seu email profissional"/>
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
            <label>Nome</label>
            <Field className='form-control Layout-texto' name="nome" component="input" type="text" placeholder="Entre com seu nome completo de pessoa fisica"/>
          </Col>
          <Col>
            <label>Celular</label>
            <Field className='form-control Layout-texto' name="celular" component="input" type="tel" placeholder="Entre com seu numero de celular com DDD"/>
          </Col>
        </Row>
  
        <Row className="p-2">
          <Col>  
            <div className='Layout-texto'><Field name="termo" component="input" type="checkbox"/> Eu li e concordo com o contrato de uso</div>
          </Col>
        </Row>

        <Row className="p-2">
          <Col>  
            <Button variant="success" type="submit" disabled={submitting}>
              Cadastrar
            </Button>
          </Col>
        </Row>
  
        </Form>
    </Container>    
    );
  }
}

export default reduxForm<IStep1>({
  form: 'Step1Form',
})(Step1Form);