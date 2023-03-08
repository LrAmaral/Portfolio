import ScrollReveal from "scrollreveal";

export const Project = () => {

  // ScrollReveal({reset: true}).reveal('#project', {
  //   delay: 400,
  //   rotate:{
  //     y:100,
  //   }
  // });

  return (
    <div className="bg-gradient-to-tl from-zinc-800 via-red-600 to-stone-800">
      <section className="xs:h-auto xs:py-52 lg:py-0 lg:h-screen flex justify-center items-center">
        <div
          id="project"
          className=" text-white flex xs:flex-col lg:flex-row justify-evenly xs:gap-14 lg:gap-0 align-center xs:w-full lg:w-5/6 xs:px-6 lg:px-0 mx-auto"
        >
          <button className="bg-gradient-to-b from-blue-700 via-zinc-800 to-zinc-800 rounded-2xl xs:py-16 xs:px-0 lg:px-24 lg:py-32 hover:scale-105 hover:opacity-95 transition-all font-bold">
            <a href="" target="_blank"></a>🌊 - Wave <br /> working in progress...
          </button>
          <button className="bg-gradient-to-b from-blue-700 via-zinc-800 to-zinc-800 rounded-2xl xs:py-16 xs:px-0 lg:px-24 lg:py-32 hover:scale-105 hover:opacity-95 transition-all font-bold">
            👨🏽‍💻 coming soon
          </button>
          <button className="bg-gradient-to-b from-blue-700 via-zinc-800 to-zinc-800 rounded-2xl xs:py-16 xs:px-0 lg:px-24 lg:py-32 hover:scale-105 hover:opacity-95 transition-all font-bold">
            👨🏽‍💻 coming soon
          </button>
        </div>
      </section>
      
    </div>
  );
};
