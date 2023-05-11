"use client"
import React from 'react';
import Carousel, { consts} from 'react-elastic-carousel';
import styles from "../styles-components/comite_ruleta.module.css"
import Image from 'next/image';
import danaImage from "../assets/comite_img/IMG-0950.JPG"
import samImage from "../assets/comite_img/IMG-7714.JPG"
import camilaImage from "../assets/comite_img/IMG-0935.JPG"
import andresImage from "../assets/comite_img/IMG-0937.JPG"
import claudiaImage from "../assets/comite_img/E6CFC975-6F8D-43A5-B523-97296BA34975.JPG"
import nelvinImage from "../assets/comite_img/203AE573-2434-446A-87F7-E1DD0FFACE4B.JPG"
import ronnyImage from "../assets/comite_img/IMG-7715.JPG"
import profesoraImage from "../assets/comite_img/IMG-7716.JPG"
import { IconName, FaInstagram} from "react-icons/fa";

import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

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

const Comite_ruleta = () => {
    return (
        <section className={styles.contenedor}>
        <Carousel className={styles.carousel} itemsToShow={1}>
        {comite.map(mienbro=>{
            return(
                <div className={styles.card} key={mienbro.name}>
                    <Image height={200} width={200} src={mienbro.image} alt="" />
                    <div>
                    <p>{mienbro.name}</p>
                    <p>{mienbro.cargo}</p>
                    <FaInstagram style={{fontSize:"1.5rem"}}/>
                    </div>
                </div>
            )
        })}
     </Carousel>
        </section>
    );
};

export default Comite_ruleta;