import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return (
        <nav>
            <div>
                <Image src="/images/pokeball.png" alt="pokedex" height={30} width={30} />
                <h1>LFE_PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}