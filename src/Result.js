import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import device from './Device';
import ResultFadeIn from './ResultFadeIn';
import BigLabel from './BigLabel';
import SmallLabel from './SmallLabel.js';
import Text from './Text';


const Results = styled.div`
    display: flex;
    flex-basis: auto;
    flex-wrap: wrap;
    /* flex-direction: row; */
    /* justify-content: space-between; */
    justify-content: center;
    padding: 40px 0;
    opacity: 0;
    visibility: hidden;
    position: relative;
    top: 20px;
    animation: ${ResultFadeIn} 0.5s 0.4s forwards;
`;

const LocationWrapper = styled.div`
    flex-basis: 100%;
    justify-content: center;
    padding: 10px auto;
    display: flex;
`;

const WeatherWrapper = styled.div`
    flex-basis:     auto;
    display: grid;
    justify-content: center;
    grid-template-columns: auto 1fr;
    margin: 20px 0;
    grid-gap: 30px;
    @media ${device.mobileL} {
    flex-basis: 100%;
    /* padding-right: 10px; */
    }
    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
        padding-right: 20px;
    }
`;

const Temperature = styled.h3`
    display: block;
    font-size: 50px;
    font-weight: 400;
    color: #ffffff;
    @media ${device.tablet} {
        font-size: 70px;
    }
    @media ${device.laptop} {
        font-size: 90px;
    }
    @media ${device.laptopL} {
        font-size: 110px;
  }  
`;


const WeatherDetailsWrapper = styled.div`
    flex-basis: 100%;
    display: flex;
    flex: content;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    margin: 20px 20px 20px ;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    justify-content: center;
`;

const WeatherDetail = styled.div`
    flex-basis: calc(100%/4);
    padding: 10px;
`;
const WeatherIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 70px;
  color: #ffffff;
  align-self: center;
  @media ${device.tablet} {
    font-size: 100px;
    justify-content: flex-end;
  }
  @media ${device.laptop} {
    font-size: 120px;
  }
  @media ${device.laptopL} {
    font-size: 140px;
  }
`;

const TemperatureWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const WorkAroundWrapper = styled.div`
    display: flex;
    /* flex-wrap: wrap-reverse; */
    justify-content: space-around;
    /* flex-direction: row; */
    align-items: center;
    /* flex-basis: auto; */
    /* flex-grow: inherit; */
    align-content: space-around;
`
const Result = ({ city,
    country,
    date,
    description,
    main,
    temp,
    sunset,
    sunrise,
    humidity,
    wind,
    highestTemp,
    lowestTemp, }) => {

    let weatherIcon = null;

    if (main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} color="white" />;
    } else if (main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} color="white"/>;
    } else if (main === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} color={"white"}/>;
    } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }
    return (
        <Results>
            <LocationWrapper>
                <BigLabel>
                    {city}, {country}
                </BigLabel>
                <SmallLabel weight="400">{date}</SmallLabel>
            </LocationWrapper>
            <WeatherWrapper>
                <WorkAroundWrapper>
                <WeatherIcon>{weatherIcon}</WeatherIcon>
                </WorkAroundWrapper>
                <WorkAroundWrapper>
                <TemperatureWrapper>
                    <Temperature>{Math.floor(temp) - 272}&#176;</Temperature>
                    <SmallLabel weight="400" firstToUpperCase>
                        {description}
                    </SmallLabel>
                </TemperatureWrapper>
                </WorkAroundWrapper>
            </WeatherWrapper>
            <WeatherDetailsWrapper>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {Math.floor(highestTemp) - 272}&#176;
                    </SmallLabel>
                    <Text align="center">High   </Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {Math.floor(lowestTemp) - 272}&#176;
                    </SmallLabel>
                    <Text align="center">Low</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {sunrise}
                    </SmallLabel>
                    <Text align="center">Sunrise</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {sunset}
                    </SmallLabel>
                    <Text align="center">Sunset</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {wind}mph
                    </SmallLabel>
                    <Text align="center">Wind</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {humidity}%
                    </SmallLabel>
                    <Text align="center">Rain</Text>
                </WeatherDetail>
            </WeatherDetailsWrapper>
        </Results>
    )
};

export default Result;