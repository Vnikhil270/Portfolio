import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-end gap-6 mt-2 sm:mt-10">
      <a
        href="https://github.com/Vnikhil270"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white hover:bg-black p-3 rounded-full transition-colors duration-300 shadow-lg"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/nikhil-verma-79b38b206/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-white hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 shadow-lg"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-white hover:bg-blue-400 p-3 rounded-full transition-colors duration-300 shadow-lg"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="mailto:uditvermaksp@gmail.com"
        className="text-red-500 hover:text-white hover:bg-red-500 p-3 rounded-full transition-colors duration-300 shadow-lg"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
}
