// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';



function App() {
  const[city,setCity]=useState('');
  const[data,setData]=useState();
   
    const apiKey = "13eef8ef1ed7d58f050dd0f415b30a62"; 
   
    
  const fetchdata = async () => {
    
    
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setData(response.data);
      console.log(response.data)
    } catch (err) { 
      alert("please enter the city name correctly");
    }
  }
  
  
  return (
    <div className="App">
      <h1 className='tittle'>Weather app </h1>
     
      <div className='input_container'>
      <input 
      className='input'
      type='text'
      placeholder='Enter the city'
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />
      <button  onClick={()=>fetchdata()}>fetch</button>
      </div>
      
      <div>
        {data&&(<div className='container'>
          <h1 className='city-name'>{data.name},{data.sys.country}</h1>
          <div className='d'>
          <div className='weather_info'>
            <div className='temp'>{Math.round((data.main.temp)-273.15)}C</div>
          </div>
          <div className='latinfo'>
            <div>lat - {data.coord.lat}</div>
            <div>lon - {data.coord.lon}</div>
          </div>
          </div>
          

        </div>)}
      </div>
      
 
       
      

      
      
    </div>
  );
}

export default App;
