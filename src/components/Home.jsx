/* eslint-disable*/
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import axios, { Axios } from "axios";

const Home = (

) => {
    const [pokemon, setPokemon] = useState([]);
    
    const PokemonItem = ({ pokemon }) => {
        const teste = pokemon.results
        return (
            <View>
                <Text>Nome:{pokemon.name}</Text>
                {/* <Image source={{ uri:pokemon.data.front_default}}/> */}
                {console.log(pokemon.results)}

            </View>
        )
    }


    const getPokemons = async () => {

        try {
            let endpoints = [];
            for (let i = 1; i <= 20; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0/${i}/`);
            }

           axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((result) =>
            setPokemon(result))

            console.log(pokemon)

            console.log(pokemon);
            const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
          
        } catch (error) {
            
        }
    }
    
    useEffect(() => {
        getPokemons();
    }, []);
    

    return (
        <View>
            <Text>oi</Text>
            <FlatList data={pokemon} renderItem={({ item }) =>
                <PokemonItem pokemon={item} />} />
        </View>

    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 10,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",

    },
})

export default Home;