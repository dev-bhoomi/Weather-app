import React, { useState } from "react"
import axios from "axios"
import './App.css';

function App() {
const apiKey="f9105e06090cb54dc3060d41a59de998"
const[inputCity,setInputCity] =useState("")
  const[data,setData] = useState({})

  const getWeatherDetails=(cityName)=>{
    if(!cityName) return
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey
    axios.get(apiURL).then((res)=>{
      console.log("response",res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }
const handleChangeInput=(e)=>{
  setInputCity(e.target.value)
}

  const handleSearch=()=>{
    getWeatherDetails(inputCity)
  }
  return (
    <>
      <div className="col-md-12">
        <div className="wetherBg">
          <h1 className="text-dark fw-bold">Weather App</h1>
          <div className="d-grid gap-3 col-4 mt-4">
            <input type="text" className="form-control"
            value={inputCity}
             onChange={handleChangeInput}/>
            <button className="btn btn-primary" type="button" onClick={handleSearch}>submit</button>
          </div>
        </div>
        {Object.keys(data).length>0 &&
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
            <img className="weatherIcon"
            src="images/icon.jpeg" alt=""/>
            <h5 className="weatherCity">{data?.name}</h5>
            <h5 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h5>
          </div>
        </div>
}
      </div>
    </>
  );
}

export default App;
