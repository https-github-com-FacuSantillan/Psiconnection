import React from "react";
import style from "./nosotros.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Nosotros = () => {
    return (
        <div className={style.container}>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <img
                    className={style.introImage}
                    src="https://static.vecteezy.com/system/resources/previews/003/676/319/non_2x/people-teamwork-cartoon-vector.jpg"
                    alt="Grupo de estudiantes de Henry"
                />
                    <h1 className="display-4">Nuestro equipo</h1>
                    <p className="lead">
Somos un equipo de estudiantes de Henry y este es nuestro proyecto final. Creamos esta aplicación con el objetivo de facilitar el acceso a buenos psicólogos y mejorar la salud mental de las personas. Nuestra plataforma ofrece una experiencia segura y confiable para conectar a individuos con profesionales calificados. Estamos comprometidos a brindar un apoyo efectivo y accesible en la búsqueda del bienestar emocional.</p>
                </div>
            </div>
          
            <div className={style.teamSection}>
                <h2>NOSOTROS</h2>
                <div className={style.teamMembers}>
                    <div className={style.teamMember}>
                        <img className={style.imagen}
                            src="https://i.pinimg.com/280x280_RS/0a/cb/2b/0acb2b50bae8e3b817c0678489d0bffe.jpg"
                            alt="Nombre del estudiante 1"
                        />
                        <a
                            href="url_del_perfil_de_LinkedIn_del_estudiante_1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={style.linkedinLogo}
                                src="..."
                                alt="LinkedIn"
                            />
                        </a>
                    </div>
                    {/* Repetir los siguientes divs para cada miembro del equipo */}
                </div>
            </div>
        </div>
    );
};

export default Nosotros;