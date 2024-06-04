import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="">
      {/* logo */}
      <div>
        <img className="cursor-pointer" width="144" height="96" src={logo} alt="netflix" />
      </div>
    </div>
  );
};

export default Header;
