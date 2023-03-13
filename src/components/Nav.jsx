export const Nav = () => {
    return (
        <nav className="text-white flex justify-end items-center flex-row">
            
                    <ul className="flex justify-end gap-6 p-4">
                        <li><a href="#about" className="rounded-xl hover:underline underline-offset-4">Sobre</a></li>
                        <li><a href="#project" className="rounded-xl hover:underline underline-offset-4">Projetos</a></li>
                        <li><a href="../archive/cv.pdf" download className="rounded-xl hover:underline underline-offset-4">Currículo</a></li>
                    </ul>  
        </nav>
    );
}


