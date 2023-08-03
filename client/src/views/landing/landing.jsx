//importamos el logo
import logo from "../../Images/Screenshot_4.jpg"
import image1 from "../../Images/frases-carl-rogers-psicologia.jpg"
import image2 from "../../Images/frases-psicologia.jpg"
import image3 from "../../Images/psicologos-realmente-hacen-min-1024x576.jpg"
//utilizamos css pura para el carrusel 
import s from "../landing/landing.module.css"
///Este comentarioAAAAA

export default function Landing() {
    return (
        <div className="flex h-full w-full bg-[#fcfcfc]">
            <div className=" flex justify-center items-center h-screen w-3/6 bg-[#580EF6]">
                {/* aca utilizo css puro con comodidad */}
                <div className={s.carrusel}>
                    <div className={s.image_conteiner}>
                        <img  src={image1} alt="image1" />
                        <img  src={image2} alt="image2" />
                        <img  src={image3} alt="image3" />
                    </div>
                    <ul className={s.puntos}>
                        <li className={s.punto}></li>
                        <li className={s.punto}></li>
                    </ul>
                </div>



            </div>
            <div className=" flex items-start justify-center h-screen w-3/6 mt-7 bg-[#fcfcfc]"  >
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}