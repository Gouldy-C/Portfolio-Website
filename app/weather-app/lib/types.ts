interface DataProps {
  dataCurrent: CurrentWeatherData;
  dataForecast: ForecastWeatherData;
}

interface CurrentWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: string;
}
interface ForecastWeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

interface WeatherData {
  dateHeader: string;
  nameCity: string;
  weatherCurrent: string;
  sunriseTime: string;
  sunsetTime: string;
  curTemp: string;
  curTempHigh: string;
  curTempLow: string;
  curTempFeels: string;
  windDeg: string;
  windArrowDeg: string;
  windSpeed: string;
  windGust: string;
  bgImg: string;
  dayByDay: DailyWeather[];
  hourByHour: HourlyWeather[];
}

interface DailyWeather {
  icon: string;
  day: string;
  weather: string;
  highTemp: string;
  lowTemp: string;
}
interface HourlyWeather {
  icon: string;
  time: string;
  temp: string;
}
