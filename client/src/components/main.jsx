import React from "react"
import { bannerImage, container, subBanner } from "./main.module.css"
import mountain from "../../assets/mountain-bg.jpg"
import mountainbw from "../../assets/mountain-bw.jpg"

export default function Main() {
    return (
        <main>
            <div className={bannerImage}>
            
                {/* <img src={mountainbw}/> */}
            </div>
            <div className={container}>
                <div className={subBanner}>
                    <h2>Kiyoi</h2>
                    <div className="subBanner">

                    <h3>One vision. One passion</h3>
                    <p>Since inception, Kiyoi has worked vigorously to pioneer the art of Kombucha. The creation and innovation unique to Kiyoi Kombucha is revered among patrons worldwide.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}