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
      <div className="xs:h-auto xs:py-52 lg:py-0 lg:h-screen flex justify-center items-center">
        <div
          id="project"
          className="flex flex-row text-white xs:flex-col lg:flex-row justify-evenly xs:gap-14 lg:gap-24 align-center xs:w-full lg:w-5/6 xs:px-6 lg:px-0 mx-auto"
        >
          <a href="https://lramaral.github.io/NLW---Setup" target="_blank" className="mb-8 w-fit flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 via-zinc-800 to-zinc-800 rounded-3xl xs:py-6 xs:px-6 lg:px-24 lg:py-18 font-semibold">
          <p className="mb-6 hover:underline hover:underline-offset-4">NLW SETUP - Explorer </p><img src="./explorer-1.jpg" className="rounded-xl hover:scale-105" alt="explorer1"/>
          <p className="mt-6">Habit Tracker Explorer by NLW's Rocketseat.</p></a>

         <a href="" className="mb-8 flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 via-zinc-800 to-zinc-800 rounded-2xl xs:py-14 xs:px-0 lg:px-24 lg:py-32 font-bold">
          <p className="mb-6 hover:underline hover:underline-offset-4">🌊 - Wave </p> <p className="mt-6"> Working in progress...</p>
        </a>
        </div>
      </div>  
    </div>
  );
}
