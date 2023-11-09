import Image from "next/image";

interface HourlyCardProps { 
  icon : string,
  time : string,
  temp : string,
}

function HourlyCard({icon, time, temp} : HourlyCardProps) {
  return (
    <div className="text-center">
      <p className="mx-1 my-2 font-semibold">{time}</p>
      <div className="my-1 hourly-icon">
        <Image
          className="mx-auto"
          quality={95}
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
          width={70}
          height={70}
          />
      </div>
      <p className="mb-2 font-semibold">{temp}</p>
    </div>
  )
}

export default HourlyCard