import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "73ba90d03efa549a14eb1b0c9963c916";


    let getWheatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let loc = jsonResponse.main;
            let result={
                city:city,
                city_temp:loc.temp,
                humidity:loc.humidity,
                temp_max:loc.temp_max,
                temp_min:loc.temp_min,
                feels_like:loc.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            return result;
        }catch(err){
            throw err;
        }
        
    }

    let handleInput = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity('');
            let newInfo = await getWheatherInfo();
            setError(false);
            console.log(newInfo);
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" value={city} onChange={handleInput} variant="outlined" required/>
                <br></br>
                <br></br>
                <Button variant="contained" type='Submit' >
                    Send
                </Button>
                {error && <p style={{color:"red"}}>City not found</p>}
            </form>

        </div>
    )
}