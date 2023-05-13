"use client"
import React, { useEffect,useState} from 'react';
import Carousel, { consts} from 'react-elastic-carousel';
import styles from "../styles-components/comite_ruleta.module.css"
import Image from 'next/image';
import danaImage from "../assets/comite_img/danaim.JPG"
import samImage from "../assets/comite_img/samim.JPG"
import camilaImage from "../assets/comite_img/camilaim.JPG"
import andresImage from "../assets/comite_img/andresim.JPG"
import claudiaImage from "../assets/comite_img/caludiaim.JPG"
import nelvinImage from "../assets/comite_img/nelvinim.JPG"
import ronnyImage from "../assets/comite_img/ronnyim.JPG"
import profesoraImage from "../assets/comite_img/profeim.JPG"
import { IconName, FaInstagram} from "react-icons/fa";

const comite=[
    {name:"Dana Al Aysamy",cargo:"Secretaria general",image:danaImage},
    {name:"Samantha Rangel",cargo:"Faculty Advisor",image:samImage},
    {name:"Camila Pirela",cargo:"Secretaria de Logistica",image:camilaImage},
    {name:"Andres Arcaya",cargo:"Secretario Academico",image:andresImage},
    {name:"Claudia Piña",cargo:"Secretaria de protocolo",image:claudiaImage},
    {name:"Nelvin Ramos",cargo:"Secretaria de Finanzas",image:nelvinImage},
    {name:"Ronnybeth Paris",cargo:"Secretaria de Comunicaciones",image:ronnyImage},
    {name:"Jesica Perez",cargo:"Coordinadora Docente",image:profesoraImage},
]
 

const Comite_ruleta = async () => {
    
    return (
        <section className={styles.contenedor}>
           <Carousel className={styles.carousel} itemsToShow={1}>
            {comite.map(mienbro=>{
                return(
                    <div className={styles.card} key={mienbro.name}>
                        <Image className={styles.card_image} src={mienbro.image} alt="" />
                        <div>
                        <p>{mienbro.name}</p>
                        <p>{mienbro.cargo}</p>
                        <FaInstagram style={{fontSize:"1.5rem",cursor:"pointer"}}/>
                        </div>
                    </div>
                )
            })}
         </Carousel>
        </section>
    );
};

export default Comite_ruleta;