import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
            <Image src="/victor.png" priority width="600" height="600" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-lg">
                    <h1 className="mb-12 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-6">Hola! soy , <br />
                        <TypeAnimation
                            sequence={[
                                'Desarrollador de software',
                                1000,
                                'Desarrollador Full Stack',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold  bg-gradient-to-r from-green-500 via to-blue-700 bg-clip-text text-transparent"
                        />
                    </h1>

                    <p className="mx-auto mb-14 text-base md:text-xl md:mx-0 md:mb-6">
                    Creo aplicaciones web completas, manejando frontend, backend, bases de datos y despliegue para soluciones rápidas y efectivas.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 text-sm">
                        <a href="/projects" className="hidden sm:block px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-green-500">   
                        Proyectos
                        </a>
                        <a href="/contact"
                            className="hidden sm:block px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-green-500 border-green-500 rounded-xl hover:shadow-xl hover:shadow-green-500" >
                            Mi CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;