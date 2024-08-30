import { useSelector } from "react-redux";

const Banned = () => {
    const isp = useSelector((store) => store.config.isp);
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg')] w-full h-screen bg-cover bg-center bg-no-repeat">
        <div className="flex h-screen justify-center items-center z-10">
            <div className="bg-black opacity-80 text-white p-4 max-w-96 w-96 font-semibold">
                <div>Due to restrictions from your Internet Service Provider ({isp}), certain features of this app are temporarily unavailable/banned by the ISP. We apologize for the inconvenience and recommend trying a different network or contacting your ISP for further assistance.</div>
            </div>
        </div>
    </div>
  );
};

export default Banned;
