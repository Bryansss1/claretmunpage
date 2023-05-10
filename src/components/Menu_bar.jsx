"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu_icon from "../assets/icons/apps.svg"
import styles from "../styles-components/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Menu_bar = () => {

const [showBotton,setBotton]=useState(false)

    return (
        <article className={styles.contenedor}>
           
           {showBotton?
           <ul className={styles.seccion}>
            <FontAwesomeIcon onClick={()=>setBotton(!showBotton)} className={styles.quitbotton} icon={faXmark} />
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/protocolo"}>Protocolo y prensa</Link></li>
                <li><Link href={"/reglamento"}>Reglamento</Link></li>
                <li><Link href={"/comites"}>Comites</Link></li>
                <li><Link href={"/patrocinadores"}>Patrocinadores</Link></li>
            </ul>:
            <Image className={styles.menu_icon} onClick={()=>setBotton(!showBotton)} src={menu_icon} alt=''/>
            }
            
        </article>
    );
};

export default Menu_bar
