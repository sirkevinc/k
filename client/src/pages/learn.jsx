import { Layout } from "../components/layout"
import React from "react";
import { container } from "./learn.module.css"

export default function Learn() {
    return (
        <Layout>
            <div className={container}>
                <h1>Learn More</h1>
                <section>
                    Explain Kombucha and all that good stuff here
                </section>
                <section>
                    <h2>Our Story</h2>
                    <p>Our story and whatnot here</p>
                </section>
            </div>
        </Layout>
    )
}