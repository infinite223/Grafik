import React,{useState} from 'react';
import './StartNew.css'
import {submitStyle,Field} from '../../loginViewStyle.js';
import {MdImageSearch, MdOutlineRestaurantMenu} from 'react-icons/md'
import Axios from 'axios';

const StartNew = (props)=> {
    const [error, setError] = useState(""); 
    const [goodData, setGoodData] = useState(""); 
     
    const formStyle = {
        margin: 'auto',
        padding: '0px',
        background: "black",
        width: '245px', 
        display: 'block',
        color:"white"
    };
    const Form = ({onSubmit}) => {
     
        const usernameRef = React.useRef();
        const passwordRef = React.useRef();
        const password2Ref = React.useRef();
        const crateTable = e => {
            e.preventDefault();
            const data = {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
                password2: password2Ref.current.value
            };
            onSubmit(data);
        };
        return (
          <form style={formStyle}  onSubmit={crateTable} >    
           <div className={error?"errors":"goodData"}>{error}{goodData}</div>              
            <Field ref={usernameRef} label="Nazwa grupy:" type="text" />
            <Field ref={passwordRef} label="Hasło do grafiku:" type="password" /> 
            <Field ref={password2Ref} label="Powtórz hasło:" type="password" />          
            <div>
              <button style={submitStyle} type="submit">Utwórz</button>
            </div>
          </form>
        );
    };
    const crateTable = data =>{
      setError("");
      setGoodData("");
        Axios.get('http://localhost:3001/api/exist').then(results => {        
            return results.data;       
           }).then(res => {
            let arr = res;
            let test = [];
              arr.map((item)=> {
                  test.push(item);
              });
              var out = true;
              for(var i in test){
                console.log(test[i])
                if(test[i].nameGroup===data.username || data.username===""){
                  setError("istnieje już taka grupa z taką nazwą")
                    console.log("istnieje już taka grupa z taką nazwą")
                    out =false;
                }  
                if(data.password!==data.password2){
                  setError("dane nie są prawdziwe!")
                  console.log("dane nie są prawdziwe!")
                  out =false;
                }                          
              }  
              if(out===true){
                setGoodData("grupa została utworzona pomyślnie!");
                Axios.post('http://localhost:3001/api/createTable',{
                  nameGroup:data.username,         
                  password:data.password
                  }).then(()=>{
                });   
              }                                  
            });
        };
  
  return (
    <div className='app__start-new'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>props.toggleNew(false)}/>
        <div className='app__start-new-inputs'>                                    
             <Form onSubmit={crateTable}/>
        </div>
        <div className='app__start-new-text'>
            <h3>Uzupełnij dane by stworzyć swój grafik...</h3>
            <hr style={{height:"3px",color:"var( --color-base)",border:"0px",backgroundColor:"var( --color-base)"}}/>
            Pierwsze zalogowanie do grafiku utworzy nowego użytkownika 
        </div>
    </div>
  )
}

export default StartNew;
