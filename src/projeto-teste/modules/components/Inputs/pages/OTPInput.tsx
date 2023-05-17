import { Field } from 'redux-form';
import '../css/OTPInput.css';

function OTPInput() {
 

  
  return (
    <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">            
      <Field className='m-2 text-center form-control rounded' name="digito1" component="input" type="text" maxLength={1} />
      <Field className='m-2 text-center form-control rounded' name="digito2" component="input" type="text" maxLength={1} />
      <Field className='m-2 text-center form-control rounded' name="digito3" component="input" type="text" maxLength={1} />
      <Field className='m-2 text-center form-control rounded' name="digito4" component="input" type="text" maxLength={1} />
      <Field className='m-2 text-center form-control rounded' name="digito5" component="input" type="text" maxLength={1} />
      <Field className='m-2 text-center form-control rounded' name="digito6" component="input" type="text" maxLength={1} />           
    </div>
  );
}

export default OTPInput;