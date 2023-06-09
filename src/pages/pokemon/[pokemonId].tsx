import { GetStaticPropsContext } from "next"
import Image from 'next/image';

import { PokeAPI } from "pokeapi-types"

import styles from '@/styles/Pokemon.module.css'

import { useRouter } from "next/router";
import Loading from "../../../components/Loading";

interface pokemon {
    pokemon: PokeAPI.Pokemon
}

export const getStaticPaths = async () => {
    const maxPokemons = 251;
    const api = "https://pokeapi.co/api/v2/pokemon"

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    // params

    const paths = data.results.map((pokemon: PokeAPI.Pokemon, index: number) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {

    const id = context.params?.pokemonId
    const api = "https://pokeapi.co/api/v2/pokemon"

    const res = await fetch(`${api}/${id}`)
    
    if(res.status === 404){
        return {
            notFound: true
        }
    }

    const data = await res.json()

    return {
        props: { pokemon: data },
    }

}

export default function Pokemon({ pokemon }: pokemon) {

    const router = useRouter()

    if(router.isFallback){
        return <Loading />
    }

    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="200"
                height="200"
                alt={pokemon.name}
            />
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span
                            key={index}
                            className={`${styles.type} ${styles['type_' + item.type.name]}`}
                        >
                            {item.type.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}