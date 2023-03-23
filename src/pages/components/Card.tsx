import Image from 'next/image';
import Link from 'next/link';
import { PokeAPI } from 'pokeapi-types';

import styles from "@/styles/Card.module.css"

interface pokemon {
    pokemon: PokeAPI.Pokemon
}

export default function Card({ pokemon }: pokemon) {
    return (
        <div className={styles.card} key={pokemon.id}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={120}
                height={120}
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link
                href={`/pokemon/${pokemon.id}`}
                className={styles.btn}
            >
                Detalhes
            </Link>
        </div>
    )
}