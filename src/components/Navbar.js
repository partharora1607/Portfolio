import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl">PR.</h1>
      </div>
      <div className="mr-28">
        <ul className="m-8 flex items-center justify-center gap-9 text-3xl ">
          <li className="hover:text-white">
            <FaLinkedin />
          </li>
          <li className="hover:text-red-500">
            <FaGithub />
          </li>
          <li className="hover:text-purple-500">
            <FaInstagram />
          </li>
          <li className="hover:text-blue-500">
            <FaTwitter />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
