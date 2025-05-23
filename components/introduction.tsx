import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 mt-20 md:mt-0">
            <div className="z-20 grid items-center md:h-full mt-4 p-5 py-20 md:py-0 md:grid-cols-2 sm:px-20">
                <div className="flex flex-col justify-center max-w-full md:mx-20">
                    <h1 className="mb-12 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-6">Hola! soy , <br />
                        <TypeAnimation
                            sequence={[
                                'Desarrollador de software',
                                1000,
                                'Desarrollador de software',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold bg-gradient-to-r from-green-500 via to-blue-700 bg-clip-text text-transparent"
                        />
                    </h1>
                    <p className="text-slate-400 mx-auto mt-0 md:text-xl md:mx-0 md:mb-4">
                        Desarrollador de software con amplia experiencia en la creación de sitios web modernos, funcionales y adaptados a distintas tecnologías. Desarrollo aplicaciones web completas,
                        desde el diseño del front-end hasta el back-end y las bases de datos

                    </p>

                </div>
                <div className="relative w-full h-auto overflow-visible">
                    <Image
                        className="mb-6 w-[350px] h-[350px] md:w-[500px] md:h-[500px] object-contain mx-auto"
                        src="/avatarVictor.png"
                        priority
                        width={500}
                        height={500}
                        alt="Avatar"
                        sizes="(max-width: 768px) 100vw, (min-width: 769px) 400px"
                    />
                </div>
            </div>
        </div>
    );
}

export default Introduction;