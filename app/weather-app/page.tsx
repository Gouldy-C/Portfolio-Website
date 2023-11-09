"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { formatData, getCurrentWeather } from "./lib/utils";
import HourlyCard from "./components/HourlyCard";
import DailyCard from "./components/DailyCard";
import { PiMagnifyingGlassBold } from "react-icons/pi"
import { FaAngleDoubleUp } from "react-icons/fa"
import ClipLoader from "react-spinners/ClipLoader"
import { useTheme } from "@/context/theme-context"


const getWeatherData = async (searchString: string, units: boolean) => {
  const rawWeatherData = await getCurrentWeather(searchString, units);
  if (rawWeatherData) {
    return formatData(rawWeatherData, units);
  } else {
    console.log("Error: Could not format weather data");
    return null;
  }
}

function page() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [search, setSearch] = useState<string>("");
  const [unit, setUnit] = useState<boolean>(true);
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearchClick = async (e : React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (searchInput.current?.value) {
      setSearch(searchInput.current.value);
    }
  };
  
  
  useLayoutEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherData = await getWeatherData(search, unit);
        if (weatherData) {
          setWeather(weatherData);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false)
      }
    };
    
    fetchWeatherData()
    

    return () => {};
  }, [ search, unit ]);

  return (
    <main className="">
      {loading ? ( // Show loading animation while loading is true
        <div className="flex items-center justify-center my-56">
            <ClipLoader
              color={theme === 'light' ? "rgb(15 23 42)" :  "rgb(249 250 251)"}
              loading={loading}
              size={250}
              aria-label="Loading Spinner"
              data-testid="loader" />
        </div>
      ) : (
      <div className="flex mt-5 max-w-[1300px] mx-4 rounded-md shadow-lg drop-shadow-md xl:mx-auto"
        style={{
            backgroundImage: `url(${weather?.bgImg})`,
            backgroundSize: 'cover',
          }}>
        <div className="flex flex-col w-full border-gray-700 rounded-md border-1 dark:border-slate-300 sm:flex-row">
          <div className="p-2 sm:w-[65%] flex flex-col justify-between min-w-[330px] grow">
            <h5 className="self-end mx-2 font-bold drop-shadow-md text-slate-100">{weather?.dateHeader}</h5>
            <div className="flex flex-col mx-2 divide-y-2 hourly-div">
              <div className="flex justify-start drop-shadow-lg text-slate-100">
                <div className="divide-y-2">
                  <h1 className="my-2 text-6xl drop-shadow-md">{weather?.nameCity}</h1>
                  <h1 className="my-2 text-6xl drop-shadow-md">{weather?.weatherCurrent}</h1>
                </div>
              </div>
              <div className="flex flex-wrap mt-2 justify-evenly text-gray-950">
                {weather?.hourByHour && weather.hourByHour.map((hour, index) => (
                  <div className=" bg-white/80 min-w-[85px] my-2 mx-1 rounded-md" key={index}>
                    <HourlyCard 
                      icon={hour.icon}
                      time={hour.time}
                      temp={hour.temp} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-2 text-center backdrop-blur-sm bg-slate-100/80 border-1 min-w-[330px] grow text-gray-950 rounded-md text-lg divide-y divide-slate-700">
            <form action="" className="m-2">
              <div className="flex mb-2 border-2 rounded input-group border-slate-800/70">
                <input
                  ref={searchInput}
                  type="text"
                  className="border-none search-field w-[85%] p-2 text-lg outline-none"
                  placeholder="Zip Code"
                  aria-label="Zip Code"
                  aria-describedby="button-search"
                />
                <button
                  className="bg-slate-800 hover:bg-slate-800/70 border-none w-[18%] flex justify-center items-center text-gray-100 text-2xl "
                  id="button-search"
                  onClick={handleSearchClick}>
                    <span className="duration-150 ease-in-out active:scale-90 hover:scale-[115%]">
                      <PiMagnifyingGlassBold />
                    </span>
                </button>
              </div>
              <div className="flex justify-evenly">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="units"
                    id="unit-metric"
                    onClick={() => {
                      setUnit(false);
                    }}
                    checked={!unit}
                  />
                  <label className="form-check-label" htmlFor="unit-metric">
                    {" "}Metric
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="units"
                    id="unit-imperial"
                    onClick={() => {
                      setUnit(true);
                    }}
                    checked={unit}
                  />
                  <label className="form-check-label" htmlFor="unit-imperial">
                    {" "}Imperial
                  </label>
                </div>
              </div>
            </form>
            <div className="flex p-2 justify-evenly">
              <p className="">Sunrise: {weather?.sunriseTime}</p>
              <p className="">Sunset: {weather?.sunsetTime}</p>
            </div>
            <div className="flex items-center p-2 temperatures justify-evenly">
              <div className="text-center temp-actual">Current: {weather?.curTemp}</div>
              <div className="text-center temp-feels-div">Feels Like: {weather?.curTempFeels}</div>
            </div>
            <div className="flex items-center p-2 justify-evenly">
              <div className="wind-direction">{weather?.windDeg}</div>
              <div className="relative mx-4 text-center">
                <p className="text-red-500">N</p>
                <div className={`border border-slate-800 rounded-full w-[70px] h-[70px] flex justify-center items-center`}
                  style={{
                    rotate: `${weather?.windArrowDeg}`
                  }}>
                  {!(Number(weather?.windSpeed) == 0) && !(Number(weather?.windGust) == 0) && 
                  <FaAngleDoubleUp
                  className="h-[22px] animate-[bounce_2.5s_infinite]"/>}
                </div>
                <p className=" south">S</p>
                <p className="absolute top-[40%] left-[-24px]">
                  W
                </p>
                <p className="absolute top-[40%] right-[-18px]">
                  E
                </p>
              </div>
              <div className="divide-y divide-slate-700">
                <div className="wind-avg">Avg: {weather?.windSpeed} {unit ? 'mph' : 'm/s'}</div>
                <div className="wind-gust">Gust: {weather?.windGust}  {unit ? 'mph' : 'm/s'}</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="p-1 daily-header">
                <h4 className="text-3xl">4 Day Forecast</h4>
              </div>
              <div className="w-full divide-y divide-slate-700" >
                {weather?.dayByDay && weather.dayByDay.map((day, index) => (
                    <DailyCard 
                      key={index}
                      icon={day.icon}
                      day={day.day}
                      weather={day.weather}
                      highTemp={day.highTemp}
                      lowTemp={day.lowTemp}/>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </main>
  );
}

export default page;
