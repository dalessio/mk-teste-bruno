import React from 'react';
import '../css/Step3.css';

import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Step3() {
  return (   
    <Container className="p-2">

    <h1 className="header Layout-titulo p-2">Cadastre sua Empresa</h1>
    <h6 className='Layout-texto p-2'>
      Enviamos uma mensagem SMS com o codigo de confirmacao,<br/>
      para o celular abaixo.
    </h6>

    <h6 className='Layout-sub-titulo p-3'>
      (21) 99999-9999
    </h6>

  </Container>    
  );
}

export default Step3;
