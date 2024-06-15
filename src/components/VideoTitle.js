const VideoTitle = ({ title, desc }) => {
  return (
    <div className="mx-4 w-1/2   md:mx-20 md:w-1/3 absolute top-1/3 flex flex-col gap-4">
      <div className="hidden sm:block md:block font-bold sm:text-2xl md:text-3xl text-white">{title}</div>
      <div className="text-white text-container">{desc}</div>
      <div className="flex gap-4">
        <button className="hidden md:flex bg-white py-1  font-bold px-4 md:py-3 rounded-sm md:w-1/5 justify-center gap-2 hover:bg-opacity-80">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/24/play--v1.png"
            alt="play--v1"
          />
          <p>Play</p>
        </button>
        <button className="hidden sm:hidden md:flex bg-[#6D6D6E] px-4 py-3 rounded-sm md:w-2/5 text-white font-bold justify-center gap-2 hover:bg-opacity-80">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios/24/FFFFFF/info--v1.png"
            alt="info--v1"
          />
          <p>More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
