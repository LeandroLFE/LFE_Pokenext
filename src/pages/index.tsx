import { PokeAPI } from 'pokeapi-types';

import styles from '@/styles/Home.module.css'

interface props {
  pokemons: PokeAPI.Pokemon[],
}


export async function getStaticProps() {

  const maxPokemons = 151;
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
    <div>
      <h1>LFE_PokeNext</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}
