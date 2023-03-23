import { PokeAPI } from 'pokeapi-types';

import styles from '@/styles/Home.module.css'
import Card from '../../components/Card';

import Image from 'next/image';

interface props {
  pokemons: PokeAPI.Pokemon[],
}


export async function getStaticProps() {

  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon"

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // Add pokemon index
  data.results.forEach((item: PokeAPI.Pokemon, index: number) => {
    item.id = index + 1;
  })
  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default function Home({ pokemons }: props) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          LFE_Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt='pokeNext'
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon}/>
        ))}
      </div>
    </>
  )
}
