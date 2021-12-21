const Footer = () => {
  return (
    <footer className="h-40 w-full bg-gray-800 mt-10 text-white flex items-center justify-center">
      <p>
        NJDMV Appointment Finder <span className="text-sm">&copy; </span>
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
