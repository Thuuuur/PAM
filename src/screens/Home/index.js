import { StyleSheet, Text, View, FlatList } from 'react-native';
import CardMovies from '../../components/cardMovies';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import { useEffect, useState } from 'react';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a8f980bca4921bbc75ae4af44df2fb26&language=pt-BR&page=1');
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);
    }
    buscarFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />

      <View style={styles.filmes}>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardMovies
              titulo={item.title}
              imagem={item.poster_path}
              nota={item.vote_average}
              
            />
           
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },
  filmes: {
    width: '90%',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});