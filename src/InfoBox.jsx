import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({weatherInfo}) {

    let COLD_URL="https://images.unsplash.com/photo-1640955289647-5bd70aab9b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
  
  
    return (
        <div className="InfoBox">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={weatherInfo.humidity>80?RAIN_URL:weatherInfo.city_temp>20?HOT_URL:COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherInfo.city}&nbsp;{weatherInfo.humidity>80?<ThunderstormIcon/>:weatherInfo.city_temp>20?<LightModeIcon/>:<AcUnitIcon/>}
                            
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>Temperature = {weatherInfo.city_temp}&deg;C</div>
                            <div>Humidity = {weatherInfo.humidity}</div>
                            <div>Temperature max = {weatherInfo.temp_max}&deg;C</div>
                            <div>Temperature min = {weatherInfo.temp_min}&deg;C</div>
                            <div>Feels like at {weatherInfo.city} is  {weatherInfo.feels_like}&deg;C and {weatherInfo.weather}</div>

                        </Typography>
                    </CardContent>

                </Card>
            </div>
    );
}