"use client"

import { useEffect, useState } from "react";


export default function WeatherApp() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  
  return (
    <div className="flex items-center justify-center h-[calc(100%+1rem)] w-full xl:w-[1280px] mx-auto">
        <iframe
          className="rounded-xl"
          src="weather-app.html"
          title="Embedded Page"
          width="100%"
          height={windowHeight}
        />
    </div>
  )
}
