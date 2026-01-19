
import { useState } from 'react';
import './Inputs.css';
import Button from './Button';
import Input from './Input';
import { Link } from "react-router-dom";


function Inputs() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleSubmit = () => {

    if(userName && password) {
        
        setCount(prev => prev + 1)
        setMessage('წარმატებული ავტორიზაცია')
        setMessageType('success')
      } 
     else {
        setUserName('');
        setPassword('');
        setCount(0);
        setMessage('შეავსეთ ორივე ველი!');
        setMessageType('error');
     }


    if(count + 1 > 3) {
         setMessage('ზედმეტად ბევრი მცდელობა, სცადეთ თავიდან');
         setMessageType('error');
         setCount(0);
         setUserName('');
         setPassword('');

    }
}


    return (
    <div className='div1'>
        <h2 className='satauri'>გაიარე ავტორიზაცია</h2>
       <Input
        type="text"
         placeholder='ნომერი ან სახელი'
         value={userName} 
         onChange={e => setUserName(e.target.value)}/>
       <Input 
       type="password" 
       placeholder='პაროლი' 
       value={password}
       onChange={e => setPassword(e.target.value)}/>


       <Button text='ავტორიზაცია' onClick={handleSubmit} />
       {message && (
        <p className={messageType === 'success' ? 'success-msg' : 'error-msg'}>
            {message}
        </p>
       )}
       <p>არ გაქვს ექაუნთი? <Link className='reg' to={'./Registrer.jsx'}> გაიარე რეგისტრაცია </Link></p>
       <p>მცდელობების რაოდენობა: {count}</p>
    </div>  
    );
    
}



export default Inputs;