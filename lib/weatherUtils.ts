import { wd, months } from "../app/weather-app/lib/data";

export const titleCase = (str: string) => {
  return str
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
};

export const forUnitSymbol = (units: boolean) => {
  return units ? "°F" : "°C";
};

export const forUnitValue = (units: boolean) => {
  return units ? "imperial" : "metric";
};

const formatTime = (h: number, m: number) => {
  const min = m < 10 ? "0" + m.toString() : m;
  const hour12 = h < 12 ? "AM" : "PM";
  let hours = h < 0 ? 24 + h : h;
  hours = hours == 0 ? 12 : hours > 12 ? hours - 12 : hours;
  return `${hours}:${min} ${hour12}`;
};

export const getLocation = async () => {
  {
    console.log(process.env.LOCATION_API_KEY);
  }
  const res = await fetch(
    `https://api.geoapify.com/v1/ipinfo?&apiKey=${process.env.LOCATION_API_KEY}&`
  );
  const data = await res.json();
  return `${data.city.name}, ${data.state.name}, ${data.country.name}`;
};

export const getCurrentWeather = async (
  searchString: string,
  units: boolean
) => {
  let resCurrent;
  let resForecast;
  if (!searchString) {
    searchString = await getLocation();
  }
  {
    console.log(process.env.LOCATION_API_KEY);
  }
  if (Number(searchString)) {
    resCurrent = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${searchString}&appid=${
        process.env.WEATHER_API_KEY
      }&units=${forUnitValue(units)}`
    );
    resForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${searchString}&appid=${
        process.env.WEATHER_API_KEY
      }&units=${forUnitValue(units)}`
    );
  } else {
    resCurrent = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=${
        process.env.WEATHER_API_KEY
      }&units=${forUnitValue(units)}`
    );
    resForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchString}&appid=${
        process.env.WEATHER_API_KEY
      }&units=${forUnitValue(units)}`
    );
  }
  if (resCurrent.ok && resForecast.ok) {
    const dataCurrent: CurrentWeatherData = await resCurrent.json();
    const dataForecast: ForecastWeatherData = await resForecast.json();
    return { dataCurrent, dataForecast };
  } else {
    console.log("Bad Response");
    return null;
  }
};

const backgroundImage = (num: number) => {
  console.log(num);
  if (321 >= num && num >= 300) {
    return "/images/bgs/drizzle.jpg";
  } else if (531 >= num && num >= 500) {
    return "/images/bgs/rain.jpg";
  } else if (622 >= num && num >= 600) {
    return "/images/bgs/snow.jpg";
  } else if (num === 741) {
    return "/images/bgs/fog.jpg";
  } else if (781 >= num && num >= 700) {
    return "/images/bgs/atmosphere.webp";
  } else if (num === 800) {
    return "/images/bgs/clear.jpg";
  } else if (802 >= num && num >= 801) {
    return "/images/bgs/scattered.jpg";
  } else if (num === 803) {
    return "/images/bgs/mostlyCloudy.jpg";
  } else if (num === 804) {
    return "/images/bgs/overcast.jpg";
  } else if (num === 802) {
    return "/images/bgs/cloudy.jpg";
  } else if (232 >= num && num >= 212) {
    return "/images/bgs/ThunderStorm2.jpg";
  } else if (211 >= num && num >= 200) {
    return "/images/bgs/ThunderStorm1.jpg";
  } else {
    return "/images/bgs/clear.jpg";
  }
};

export const formatData = (
  { dataCurrent, dataForecast }: DataProps,
  units: boolean
) => {
  const d = new Date();
  const currentDate = new Date(
    d.getTime() + d.getTimezoneOffset() * 60000 + dataCurrent.timezone * 1000
  );
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const dayWeek = currentDate.getDay();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  //current day sunrise and sunset time adjusted for location
  const rise = new Date(dataCurrent.sys.sunrise * 1000);
  const set = new Date(dataCurrent.sys.sunset * 1000);
  const sunriseDate = new Date(
    rise.getTime() +
      rise.getTimezoneOffset() * 60000 +
      dataCurrent.timezone * 1000
  );
  const sunsetDate = new Date(
    set.getTime() +
      set.getTimezoneOffset() * 60000 +
      dataCurrent.timezone * 1000
  );
  const sunrise = formatTime(sunriseDate.getHours(), sunriseDate.getMinutes());
  const sunset = formatTime(sunsetDate.getHours(), sunsetDate.getMinutes());

  const cityName = titleCase(dataCurrent.name);

  const currentWeather = titleCase(dataCurrent.weather[0].description);

  const currentTemp = Math.round(dataCurrent.main.temp);
  const currentTempMax = Math.round(dataCurrent.main.temp_max);
  const currentTempMin = Math.round(dataCurrent.main.temp_min);
  const currentTempFeels = Math.round(dataCurrent.main.feels_like);

  const currentWindDeg = dataCurrent.wind.deg;
  const currentWindAvg = dataCurrent.wind.speed
    ? Math.round(dataCurrent.wind.speed)
    : "0";
  const currentWindGust = dataCurrent.wind.gust
    ? Math.round(dataCurrent.wind.gust)
    : Math.round(dataCurrent.wind.speed);

  let dailyWeatherData: DailyWeather[] = [];
  for (
    let i = 7 - Math.floor(hours / 3);
    i < 32 + (7 - Math.floor(hours / 3));
    i += 8
  ) {
    const dailyDate = new Date(
      dataForecast.list[i].dt * 1000 +
        d.getTimezoneOffset() * 60000 +
        dataCurrent.timezone * 1000
    );
    const dailyIcon = dataForecast.list[i].weather[0].icon;
    const dailyDay = `${wd[dailyDate.getDay()]}, ${
      months[dailyDate.getMonth()]
    } ${dailyDate.getDate()}`;
    const dailyWeather = titleCase(dataForecast.list[i].weather[0].description);

    let H = -50000;
    let L = 50000;
    for (let a = i; a < i + 8 && a < 32 + (7 - Math.floor(hours / 3)); a++) {
      H =
        dataForecast.list[a].main.temp_max > H
          ? dataForecast.list[a].main.temp_max
          : H;
      L =
        dataForecast.list[a].main.temp_min < L
          ? dataForecast.list[a].main.temp_min
          : L;
    }
    const dailyTempMax = Math.round(H);
    const dailyTempMin = Math.round(L);
    dailyWeatherData.push({
      icon: dailyIcon,
      day: dailyDay,
      weather: dailyWeather,
      highTemp: `${dailyTempMax}${forUnitSymbol(units)}`,
      lowTemp: `${dailyTempMin}${forUnitSymbol(units)}`,
    });
  }

  let hourlyWeatherData: HourlyWeather[] = [];
  for (let i = 0; i < 9; i++) {
    const hourlyDate = new Date(
      dataForecast.list[i].dt * 1000 +
        d.getTimezoneOffset() * 60000 +
        dataCurrent.timezone * 1000
    );
    const hourlyTime = formatTime(
      hourlyDate.getHours(),
      hourlyDate.getMinutes()
    );
    const hourlyIcon = dataForecast.list[i].weather[0].icon;
    const hourlyTemp = Math.round(dataForecast.list[i].main.temp);
    hourlyWeatherData.push({
      icon: hourlyIcon,
      time: hourlyTime,
      temp: `${hourlyTemp}${forUnitSymbol(units)}`,
    });
  }
  //data we need to return
  const weatherData: WeatherData = {
    dateHeader: `${wd[dayWeek]}, ${months[month]} ${day} ${year} ${formatTime(
      hours,
      minutes
    )}`,
    nameCity: `${cityName}`,
    weatherCurrent: `${currentWeather}`,
    sunriseTime: `${sunrise}`,
    sunsetTime: `${sunset}`,
    curTemp: `${currentTemp}${forUnitSymbol(units)}`,
    curTempHigh: `${currentTempMax}${forUnitSymbol(units)}`,
    curTempLow: `${currentTempMin}${forUnitSymbol(units)}`,
    curTempFeels: `${currentTempFeels}${forUnitSymbol(units)}`,
    windDeg: `${currentWindDeg}°`,
    windArrowDeg: `${currentWindDeg}deg`,
    windSpeed: `${currentWindAvg}`,
    windGust: `${currentWindGust}`,
    bgImg: backgroundImage(dataCurrent.weather[0].id),
    dayByDay: dailyWeatherData,
    hourByHour: hourlyWeatherData,
  };
  return weatherData;
};
