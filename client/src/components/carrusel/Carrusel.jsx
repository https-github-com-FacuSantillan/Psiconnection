//imnportamos estilo
import s from "../carrusel/Carrusel.module.css"
//importamos las imagenenes
import image1 from "../../Images/frases-carl-rogers-psicologia.jpg"
import image2 from "../../Images/frases-psicologia.jpg"
import image3 from "../../Images/psicologos-realmente-hacen-min-1024x576.jpg"
//importamos hooks
import { useEffect, useRef, useState } from "react"


export default function Carrusul(){
    const myRef = useRef()
    //Estados locales 
    const [currentImg, setCurrentImg] = useState(0)
    //useEffect
    useEffect(()=>{
        const imageConteiner = myRef.current
        let operacion = currentImg * -33.3
        console.log(operacion);
        imageConteiner.style.transform =`translateX(${operacion}%)`

    },[currentImg])
    
    //Funciones 
    const changeImage = (index)=>{
        setCurrentImg(index)
    }
    return(
        <div className={s.carrusel}>
                    <div ref={myRef} className={s.image_conteiner}>
                        <img  src={image1} alt="1" />
                        <img  src={image2} alt="2" />
                        <img  src={image3} alt="3" />
                    </div>
                    <ul className={s.puntos}>
                        <li onClick={()=> changeImage(0)} className={currentImg === 0 ? s.puntoSelect : s.punto}></li>
                        <li onClick={()=> changeImage(1)} className={currentImg === 1 ? s.puntoSelect : s.punto}></li>
                        <li onClick={()=> changeImage(2)} className={currentImg === 2 ? s.puntoSelect : s.punto}></li>
                    </ul>
                </div>
    )
}