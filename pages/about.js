import Image from 'next/image'
import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from "react-redux";
import { iconAction } from "../store/icon-slice";
import sun24 from "../icons/sun-24.png";
import moon30 from "../icons/moon-30.png";
import Link from 'next/link'


export default function Home() {

    const dispatcher = useDispatch()

    let icon = useSelector(state => state.icon)

    function changeIcon() {

        icon.icon === "moon" ? dispatcher(iconAction.iconSun()) : dispatcher(iconAction.iconMoon())

    }

    return (
        <div style={{ backgroundColor: icon.icon === "moon" ? "white" : "#000000b5" }} className={styles.container}>

            <main className={styles.main}>
                <div className='NavBar'>
                    <Link href="/">
                        <a className='item'>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className='item'>About</a>
                    </Link>
                </div>

                <div onClick={changeIcon} className='iconBox'>
                    <Image
                        width={30}
                        height={30}
                        objectFit="cover"
                        src={icon.icon === 'moon' ? moon30 : sun24}
                        alt="image"
                    />
                </div>
                <h2>What is Lorem Ipsum?</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

            </main>

        </div>
    )
}
