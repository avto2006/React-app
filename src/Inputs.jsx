
import { useState } from 'react';
import './Inputs.css';

function Inputs() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    return (
    <div className='div1'>
        <h2 className='satauri'>გაიარე ავტორიზაცია</h2>
       <input
        type="text"
         placeholder='ნომერი ან სახელი'
         value={userName} 
         onChange={e => setUserName(e.target.value)}/>
       <input 
       type="password" 
       placeholder='პაროლი' 
       value={password}
       onChange={e => setPassword(e.target.value)}/>
    </div>  
    );
}

export default Inputs;