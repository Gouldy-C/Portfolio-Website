import Image from "next/image";


interface DailyCardProps {
  icon: string,
  day: string,
  weather: string,
  highTemp: string,
  lowTemp: string
}

function DailyCard({icon, day, weather,  highTemp, lowTemp} : DailyCardProps) {
  return (
    <div
      className="flex justify-between w-full px-3 py-2">
      <div className="mx-1 day-weather-icon rounded-4">
        <Image
          className="rounded-xl"
          quality={95}
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
          width={60}
          height={60}
          />
      </div>
      <div className="">
        <p className="font-bold">{day}</p>
        <p className="">{weather}</p>
      </div>
      <div className="">
        <p className="">H {highTemp}</p>
        <hr className="my-1 text-light-700" />
        <p className="">L {lowTemp}</p>
      </div>
    </div>
  )
}

export default DailyCard