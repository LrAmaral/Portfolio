import { Tech}  from './Tech'

export const Main = () => {
  return (
    <div className="text-white not-italic flex flex-col justify-center h-[65vh] xs:w-full lg:w-5/6 mx-auto">
      <div className='flex flex-col gap-24 xs:px-6 lg:px-0'>
        <h1 className="text-2xl leading-[20px] font-extrabold">
          ☕ Hello World!
        </h1>
        <p className="lg:w-1/4 xs:w-full font-normal leading-6 xs:text-base lg:text-xl">
          Bem-vindo ao meu website, aqui você vai conhecer um pouco das minhas skills que tenho para oferecer e agregar ao mercado.
        </p>
      </div>
    </div>
  );
}
