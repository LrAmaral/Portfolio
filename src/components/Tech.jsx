export const Tech = () => {
  return (
    <div className="bg-gradient-to-bl from-stone-800 via-red-600 to-stone-800">
    <div
      id="sobre"
      className="text-white h-screen items-center flex xs:flex-col lg:flex-row xs:w-full lg:w-5/6 xs:px-6 lg:px-0 mx-auto xs:justify-center lg:justify-between xs:gap-24 lg:gap-0"
    >
      <div className="flex flex-col gap-24">
        <p className="indent-6 lg:w-4/5 xs:w-full font-normal leading-6 xs:text-base lg:text-xl">
          Meus hobbies sempre foram com muito contato com a tecnologia, partindo de jogos, edições de vídeo, eu carregava (e carrego) 
          uma curiosidade imensa em aprender coisas novas... agora,
          com 21 anos me dedico aos estudos voltados para a área de front-end.
        </p>
        <p className="indent-6 lg:w-4/5 xs:w-full font-normal leading-6 xs:text-base lg:text-xl">
          Atualmente focando nos estudos com <code>React</code> e <code>Tailwind</code>, buscando desenvolver
          aplicações com interfaces modernas e com toques de simplicidade.
        </p>
      </div>
      <div>
        <div className="bg-zinc-700 border border-stone-500 flex flex-col p-8 rounded-md items-center justify-center gap-6">
          <p className="font-extrabold flex items-center text-xl">
            🌱 Learning
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
            <img
              className="rounded-xl  hover:scale-105"
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            />
            <img className="rounded-xl  hover:scale-105" 
            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
            <img
              className="border-zinc-600 border  rounded-xl hover:scale-105"
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            />
            <img
              className="rounded-xl hover:scale-105"
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
            />
            <img
              className="border-zinc-600 border rounded-xl  hover:scale-105"
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            />
            <img
              className="rounded-xl hover:scale-105"
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
            />
            <img
              className="rounded-xl hover:scale-105"
              src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
