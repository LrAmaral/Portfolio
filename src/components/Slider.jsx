import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react'

import image1 from '../img/teste-1.jpg'
import image2 from '../img/teste-2.jpg'
import image3 from '../img/eu-animado.jpg'

const images = [image1, image2, image3] 

export const Slider = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div className="w-full max-w-4xl flex justify-center items-center min-h-screen m-auto">
        <motion.div ref={carousel} className="bg-zinc-800 cursor-grab overflow-hidden" whileTap={{cursor: "grabbing" }}>
            <motion.div 
            className="flex"
            drag="x" 
            dragConstraints={{right: 0, left: -width}}
            initial={{x: 100}}
            animate={{x: 0}}
            transition={{duration: 0.8}}
            >
                {images.map(image => (
                    <motion.div className="min-h-[200px] p-3 min-w-[400px]" key={image}>
                        <img className="w-full h-[50vh] rounded-xl pointer-events-none" src={image} alt="Slider" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
        </div>
    );
}