const VideoTitle = ({ title, desc }) => {
  return (
    <div className="mx-20 w-1/3 absolute top-1/3 flex flex-col gap-4">
      <div className="font-bold text-3xl text-white">{title}</div>
      <div className=" text-white">{desc}</div>
      <div className="flex gap-4">
        <button className="bg-white font-bold px-4 py-3 rounded-sm w-1/5 flex justify-center gap-2 hover:bg-opacity-80">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/24/play--v1.png"
            alt="play--v1"
          />
          <p>Play</p>
        </button>
        <button className="bg-[#6D6D6E] px-4 py-3 rounded-sm w-2/5 text-white font-bold flex justify-center gap-2 hover:bg-opacity-80">
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
