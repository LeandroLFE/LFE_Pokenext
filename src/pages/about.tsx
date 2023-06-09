import Image from "next/image"

import styles from "@/styles/About.module.css"

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis porro veniam. Mollitia dignissimos, deleniti, ratione nam aliquam sit aspernatur nesciunt nostrum minus perspiciatis omnis placeat eius quis illo aut.</p>
            <Image src="/images/charizard.png"
                width={300}
                height={300}
                alt="charizard"
            />
        </div>
    )
}