
import { useState } from 'react';
import './Inputs.css';
import Button from './Button';


function Inputs() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0)

    const handleSubmit = () => {

    if(userName && password) {
        alert('წარმატებული ავტორიზაცია')
        setCount(prev => prev + 1)

    } else {
        alert('შეავსეთ ორივე ველი!');
        setUserName('');
        setPassword('');
        setCount(0)
    }


}


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


       <Button text='ავტორიზაცია' onClick={handleSubmit} />
       <p>მცდელობების რაოდენობა: {count}</p>
    </div>  
    );
}

export default Inputs;