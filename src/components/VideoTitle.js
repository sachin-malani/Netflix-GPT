const VideoTitle = ({ title, desc }) => {
  return (
    <div className="w-1/3">
      <div className="font-bold text-3xl">{title}</div>
      <div>{desc}</div>
      <div className="flex gap-4">
        <button className="bg-gray-400 font-bold px-4 py-3 rounded-sm w-32 flex justify-center gap-2">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/24/play--v1.png"
            alt="play--v1"
          />
          <p>Play</p>
        </button>
        <button className="bg-gray-400 px-4 py-3 rounded-sm w-48 text-white font-bold flex justify-center gap-2">
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
