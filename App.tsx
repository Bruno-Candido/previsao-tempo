import { StatusBar, NativeBaseProvider } from 'native-base'

import { WeatherForecast } from './src/screens/WeatherForecast';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar/>
      <WeatherForecast/>
    </NativeBaseProvider>
  );
}

