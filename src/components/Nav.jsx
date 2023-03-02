export const Nav = () => {
    return (
        <nav className="text-white flex justify-end">
            <ul className="flex justify-end space-x-10 p-6">
                <li><a href="#sobre" className="rounded-xl hover:p-2 hover:border-r-2 hover:border-b-2 hover:border-r-blue-700 hover:border-b-blue-600">Sobre</a></li>
                <li><a href="#project" className="rounded-xl hover:p-2 hover:border-r-2 hover:border-b-2 hover:border-r-blue-700 hover:border-b-blue-600">Projetos</a></li>
                <li><a href="../archive/cv.pdf" download className="rounded-xl hover:p-2 hover:border-r-2 hover:border-b-2 hover:border-r-blue-700 hover:border-b-blue-600">Currículo</a></li>
            </ul>
        </nav>
    )
};


