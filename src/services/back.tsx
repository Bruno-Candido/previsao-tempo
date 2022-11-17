import { VStack, HStack, Heading, Text, Box, Image } from 'native-base'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Line } from '../components/Line'


const apiKey = 'c8c7bd018f4b8eca69b3d7595cf50b0b'

export function WeatherForecast(){
    const [cityName, setCityName] = useState()
    const [wind, setWind] = useState()
    const [icon, setIcon] = useState()
    const [temperature, setTemperature] = useState()
    const [humidity, setHumidity] = useState()
    const [sunRise, setSunRise] = useState()
    const [sunSet, setSunSet] = useState()
    const [dataWeather, setDataWeather] = useState()
    const [hora, setHora] = useState()

    const [weatherData, setWeatherData] = useState('')
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        (async () => {
            
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }) ();
    }, []); 

    async function coordinates(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=${apiKey}&lang=pt_br`)
        const data = await response.json()
        setCityName(data.name)
        setTemperature(data.main.temp)
        setDataWeather(data.weather[0].description)
        setIcon(data.weather[0].icon)
        setSunRise(data.sys.surize)
        setSunSet(data.sys.sunset)
        setHumidity(data.main.humidity)
        setWind(data.wind.speed)
    }

    async function handleApi(){
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${weatherData}&units=metric&appid=${apiKey}&lang=pt_br`)
       
        const data = await response.json()
  
        setCityName(data.name)
        setTemperature(data.main.temp)
        setDataWeather(data.weather[0].description)
        setIcon(data.weather[0].icon)
        setSunRise(data.sys.surize)
        setSunSet(data.sys.sunset)
        setHumidity(data.main.humidity)
        setWind(data.wind.speed)
         

   }

    return(
        <VStack flex={1} bg='primary.900'>
            <HStack space={3} justifyContent='center' shadow={3}>
            <Input placeholder='Digite uma cidade' onChangeText={setWeatherData} mt={5}/>
            <Button title='Buscar' onPress={handleApi} mt={5}/>
            </HStack>
            
            <Box alignItems='center' mt={5}>
                <Heading color='primary.100' ml={2} mt={4}>
                    {cityName}
                </Heading>
                <Line/>
               <Text color='primary.100' fontSize='xl' fontFamily='heading'>
                    {parseInt(temperature)} °C
               </Text>
               <Line/>
               <Text color='primary.100' fontSize='xl' fontFamily='heading'>
                    <Image source={{uri:`https://openweathermap.org/img/wn/${icon}.png`}}  alt="claud" size="xs"/>{dataWeather}
               </Text>
               <Line/>
               <Text color='primary.100' fontSize='xl' fontFamily='heading'>
               <MaterialCommunityIcons name="weather-rainy" size={24} color='primary.100' />  {humidity} %
               </Text>
               <Line/>
                    <Text color='primary.100' fontSize='xl' fontFamily='heading'>
                        <Feather name="wind" size={24} color='primary.100' />  {wind} km/h
               </Text>
            </Box>
            {/* <Box>
            <Image source={{uri:`https://countryflagsapi.com/png/${country}`}}  alt="Flag" size='xl'/>
            </Box> */}
        </VStack>
    )
}