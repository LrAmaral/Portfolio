export const Nav = () => {
    return (
        <nav className="text-white flex justify-end">
            <ul className="flex justify-end space-x-10 p-6">
                <li><a href="#sobre" className=" hover:text-neutral-300 ">Sobre</a></li>
                <li><a href="#project" className=" hover:text-neutral-300">Projetos</a></li>
                <li><a href="../archive/cv.pdf" download className="hover:text-neutral-300">Currículo</a></li>
            </ul>
        </nav>
    )
}


