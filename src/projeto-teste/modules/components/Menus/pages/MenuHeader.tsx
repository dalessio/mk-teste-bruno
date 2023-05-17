import {Routes, Route, useNavigate} from 'react-router-dom';

import '../css/MenuHeader.css';

import { Container } from 'react-bootstrap'
import { Stack } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Step1 from '../../../cadastro/pages/Step1'
import Step2 from '../../../cadastro/pages/Step2'
import Step3 from '../../../cadastro/pages/Step3'
import Step4 from '../../../cadastro/pages/Step4'
import Step5 from '../../../cadastro/pages/Step5'

function MenuHeader() {

    const navigate = useNavigate();

    const navigateToStep1 = () => {
        navigate('/cadastro/Step1');
    };

    const navigateToStep2 = () => {
        navigate('/cadastro/Step2');
    };

    const navigateToStep3 = () => {
        navigate('/cadastro/Step3');
    };

    const navigateToStep4 = () => {
        navigate('/cadastro/Step4');
    };

    const navigateToStep5 = () => {
        navigate('/cadastro/Step5');
    };

    return (
        <Container>
            
            <Stack className='Menu-header' direction="horizontal" gap={0}>
                <Button variant="success" onClick={navigateToStep1} id='b1'>
                    <strong>1- Usuario</strong>
                </Button>
                <Button onClick={navigateToStep2} id='b2'>
                    <strong>2- Validacao</strong>
                </Button>
                <Button variant="default" onClick={navigateToStep3} id='b3'>
                    <strong>3- Empresa</strong>
                </Button>
                <Button variant="default" onClick={navigateToStep4} id='b4'>
                    <strong>4- Documentos</strong>
                </Button>
                <Button variant="default" onClick={navigateToStep5} id='b5'>
                    <strong>5- Confirmacao</strong>
                </Button>
            </Stack>
        
            <Routes>
                <Route path="/cadastro/Step1" element={<Step1 />} />
                <Route path="/cadastro/Step2" element={<Step2 />} />
                <Route path="/cadastro/Step3" element={<Step3 />} />
                <Route path="/cadastro/Step4" element={<Step4 />} />
                <Route path="/cadastro/Step5" element={<Step5 />} />
            </Routes>
        </Container>
    )
}

export default MenuHeader;