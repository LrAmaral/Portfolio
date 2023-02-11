export const Footer = () => {
  return (
    <footer className="text-white text-base bottom-0 fixed w-full text-center">
      <div className="pb-1.5 opacity-0 animate-[appear_0.9s_forwards]">
        <a
          href="https://www.linkedin.com/in/lucas-amaral-73650a1b0/"
          target="_blank"
          className="fa fa-linkedin hover:scale-125 transition-all px-4 pt-0 text-2xl"
        ></a>
        <a
          href="mailto: amaralrdev@gmail.com"
          target="_blank"
          className="fa fa-envelope  hover:scale-125 transition-all px-4 pt-0 text-2xl"
        ></a>
        <a
          href="https://github.com/LrAmaral"
          target="_blank"
          className="fa fa-github  hover:scale-125 transition-all px-4 pt-0 text-2xl"
        ></a>
        <a
          href="https://www.instagram.com/_ri3llo/"
          target="_blank"
          className="fa fa-instagram  hover:scale-125 transition-all px-4 pt-0 text-2xl text-orange-400"
        ></a>
      </div>
    </footer>
  );
}

