

function LandingHero() {
  return (
    <div id="home">
      <div className="relative flex align-center justify-end h-full w-11/12 m-auto max-w-5xl pt-[35px]">
        <div className="absolute z-10 h-full left-0 ml-8 flex flex-col justify-center">
          <div>
            <h1 className="font-bold text-7xl text-orange-600">Hello <br/> I’m <span className="underline">Christian<br/>Gouldy</span></h1>
          </div>
        </div>
        <div className="right-0 ml-48 mr-2">
          <img className="rounded-xl" src="https://demo.cocobasic.com/ukko-react/assets/photo-1-e5f340d3.jpg" alt="Hero Image" />
        </div>
      </div>
    </div>
  )
}

export default LandingHero