import { useState } from "react";
import styled from "styled-components";
// import "./Home.css";
import Result from "./Result";
import SearchCity from "./SearchCity";

const WeatherWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  height: 100vh;
  flex: content;
`;

const Heading = styled.text`
  color: aliceblue;
  font-size: large;
`
const Home = () => {
    var [location, setLocation] = useState('Hyderabad');
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=93f26e3c57081a6210de53b8dcfdfea4";
    var [data, setData] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault()
        url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=93f26e3c57081a6210de53b8dcfdfea4";
        fetch(url).then(res => {
            return res.json();
        }).then((data1) => {
            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'Nocvember',
                'December',
            ];
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDate = new Date();
            const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
                }`;
            const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
            const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
            const weatherInfo = {
                city: data1.name,
                country: data1.sys.country,
                date,
                description: data1.weather[0].description,
                main: data1.weather[0].main,
                temp: data1.main.temp,
                highestTemp: data1.main.temp_max,
                lowestTemp: data1.main.temp_min,
                sunrise,
                sunset,
                // clouds: data1.clouds.all,
                humidity: data1.main.humidity,
                wind: data1.wind.speed,
            };
            setData(weatherInfo);
        });
    }
    return (
        <WeatherWrapper className="Home" style={{ backgroundColor: "#774FC1" }}>
            <Heading>Weather-App</Heading>
            <SearchCity
                value={location}
                showResult={data}
                change={(e) => setLocation(e.target.value)}
                submit={handleSubmit}
            />
            {data && <Result city={data.city}
                country={data.country}
                date={data.date}
                description={data.description}
                main={data.main}
                temp={data.temp}
                sunset={data.sunset}
                sunrise={data.sunrise}
                humidity={data.humidity}
                wind={data.wind}
                highestTemp={data.highestTemp}
                lowestTemp={data.lowestTemp} />}
        </WeatherWrapper>
    );
}

export default Home;