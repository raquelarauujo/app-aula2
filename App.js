import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const Layout = () => {
  const openSpotify = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir link:", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gênero Musical</Text>

      <View style={styles.box2}>
        <Image
          source={{
            uri: 'https://i.discogs.com/upgJhd6ICD80rHL6sSTmcWc8FlyRVtOc2KjBgkCR1P0/rs:fit/g:sm/q:90/h:596/w:567/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg1ODk3/LTEzMTgxNjAzMzYu/anBlZw.jpeg',
          }}
          style={styles.image2}
        />
        <Text style={styles.artista}>Post-Punk</Text>
        <Text style={styles.genero}>
        Amplo gênero de rock que surgiu no final da década de 1970 na esteira do punk rock. Os músicos pós-punk afastaram-se dos elementos tradicionais e da simplicidade crua do punk, adotando uma abordagem mais ampla e experimental que englobava uma variedade de sensibilidades de vanguarda e influências fora do rock. Experimentaram estilos como eletrônica, jazz, disco e dance music, as técnicas de produção de dub e ideias de arte — incluindo teoria crítica, arte modernista, romantismo, cinema e literatura.
        </Text>
      </View>

      <Text style={styles.title}>Bandas</Text>

      {[
        { name: 'Joy Division', year: 'Reino Unido - 1976', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17jy0JZsiBcIlMju-b7ePb5d3uaFTmlYsHw&s', spotify: 'https://open.spotify.com/intl-pt/artist/432R46LaYsJZV2Gmc4jUV5' },
        { name: 'Bauhaus', year: 'Reino Unido - 1978', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Bauhaus-Signet.svg/2168px-Bauhaus-Signet.svg.png', spotify: 'https://open.spotify.com/intl-pt/artist/5N5tQ9Dx1h8Od7aRmGj7Fi' },
        { name: 'Siouxsie And The Banshees', year: 'Reino Unido - 1978', uri: 'https://www.studsandspikes.com/media/catalog/product/cache/ac0a2306909b95a5b7078e2821ec5639/9/p/9pts22siou04_design.jpg', spotify: 'https://open.spotify.com/intl-pt/artist/1n65zfwYIj5kKEtNgxUlWb' },
        { name: 'Echo & The Bunnyman', year: 'Reino Unido - 1978', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKY-O4WKDtCLWUZv-aJnGHtxUXi6Padm8fA&s', spotify: 'https://open.spotify.com/intl-pt/artist/0fgYKF9Avljex0L9Wt5b8Z' },
        { name: 'The Cure', year: 'Reino Unido - 1976', uri: 'https://m.media-amazon.com/images/I/51iMLO+s3RL._AC_UY1100_.jpg', spotify: 'https://open.spotify.com/intl-pt/artist/7bu3H8JO7d0UbMoVzbo70s' },
      ].map((band, index) => (
        <View key={index} style={styles.boxLista}>
          <Image source={{ uri: band.uri }} style={styles.imageLista} />
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => openSpotify(band.spotify)}>
              <Text style={styles.artista}>{band.name}</Text>
            </TouchableOpacity>
            <Text style={styles.genero}>{band.year}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.title}>Gênero Musical</Text>

      <View style={styles.box1}>
        <Image
          source={{
            uri: 'https://i0.wp.com/www.wikimetal.com.br/wp-content/uploads/2021/03/Sex-Pistols.jpg?fit=900%2C506&ssl=1',
          }}
          style={styles.image2}
        />
        <Text style={styles.artista}>Punk Rock</Text>
        <Text style={styles.genero}>
        Gênero musical que surgiu em meados da década de 1970. Enraizado no rock de garagem e proto-punk dos anos 1960, as bandas punk rejeitaram os excessos percebidos do rock mainstream dos anos 1970. Eles normalmente produziam canções curtas e rápidas com melodias e estilos de canto contundentes, instrumentação simplificada e muitas vezes gritavam letras políticas anti-sistema.
        </Text>
      </View>

      <Text style={styles.title}>Bandas</Text>

      {[
        { name: 'Sex Pistols', year: 'Reino Unido - 1975', uri: 'https://cdn.displate.com/artwork/270x380/2024-12-05/7e7dd7ed-430c-4515-8a03-42355eae6b58.jpg', spotify: 'https://open.spotify.com/intl-pt/artist/1u7kkVrr14iBvrpYnZILJR' },
        { name: 'Ramones', year: 'Estados Unidos - 1974', uri: 'https://www.deadrockers.net/cdn/shop/products/s6079_360x_1_2048x.webp?v=1647579053', spotify: 'https://open.spotify.com/intl-pt/artist/1co4F2pPNH8JjTutZkmgSm' },
        { name: 'Dead Kennedys', year: 'Estados Unidos - 1978', uri: 'https://i.pinimg.com/736x/4b/78/c5/4b78c58fe4b97dd72de8ada215ee468d.jpg', spotify: 'https://open.spotify.com/intl-pt/artist/30U8fYtiNpeA5KH6H87QUV' },
        { name: 'Misfits', year: 'Estados Unidos - 1977', uri: 'https://i.scdn.co/image/ab67616100005174030d67ff9576754ff230b2c0', spotify: 'https://open.spotify.com/intl-pt/artist/1cXi8ALPQCBHZbf0EgP4Ey' },
        { name: 'Descendents', year: 'Estados Unidos - 1978', uri: 'https://images.sk-static.com/images/media/profile_images/artists/277581/huge_avatar', spotify: 'https://open.spotify.com/intl-pt/artist/1FGH4Bh7g9W6V4fUcKZWp5' },
      ].map((band, index) => (
        <View key={index} style={styles.boxLista}>
          <Image source={{ uri: band.uri }} style={styles.imageLista} />
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => openSpotify(band.spotify)}>
              <Text style={styles.artista}>{band.name}</Text>
            </TouchableOpacity>
            <Text style={styles.genero}>{band.year}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.title}>Gênero Musical</Text>

      <View style={styles.box1}>
        <Image
          source={{
            uri: 'https://www.planocritico.com/wp-content/uploads/2017/09/21-Entenda-Melhor-Discos-MPB-1.jpg',
          }}
          style={styles.image2}
        />
        <Text style={styles.artista}>Musica Popular Brasileira</Text>
        <Text style={styles.genero}>
        Gênero musical surgido no Brasil em meados da década de 1960. A MPB surgiu a partir de 1966 na cidade do Rio de Janeiro com a segunda geração da bossa nova, mas com uma forte influência do folclore brasileiro que já vinha desde 1932. A sigla MPB anunciou uma fusão de dois movimentos musicais até então divergentes, a bossa nova e o engajamento folclórico dos Centros Populares de Cultura da União Nacional dos Estudantes.
        </Text>
      </View>

      <Text style={styles.title}>Artistas</Text>

      {[
        { name: 'Chico Buarque', year: '19 de Junho de 1944 - Rio de Janeiro', uri: 'https://i.scdn.co/image/ab67616d0000b273175c5e58d396b45c4f637deb', spotify: 'https://open.spotify.com/intl-pt/artist/6tOsSffQQIXmK8TqsDck8t' },
        { name: 'Jorge Ben Jor', year: '22 de Março de 1939 - Rio de Janeiro', uri: 'https://novabrasilfm.com.br/app/uploads/2024/03/jorge_ben_jor_-_divulgacao_a-768x715.webp', spotify: 'https://open.spotify.com/intl-pt/artist/5JYtpnUKxAzXfHEYpOeeit' },
        { name: 'Maria Bethânia', year: '18 de Junho de 1946 - Bahia', uri: 'https://akamai.sscdn.co/uploadfile/letras/fotos/f/d/f/7/fdf711ba6112c3dddd11dcbb4666e30a.jpg', spotify: 'https://open.spotify.com/intl-pt/artist/3f5VCwd57gZsqMad28jyLV' },
        { name: 'Gal Costa', year: '26 de Novembro de 1945 - Bahia', uri: 'https://fringe.com.br/wp-content/uploads/2025/01/galcosta.jpg', spotify: 'https://open.spotify.com/intl-pt/artist/1b8kpp4DUwt1hWaxTiWQhD' },
        { name: 'Rita Lee', year: '31 de Dezembro de 1947 - São Paulo', uri: 'https://images.squarespace-cdn.com/content/v1/5d30ccca1094830001b9fdb7/3003a851-1d20-4382-bca5-ea5f168fbe97/00-+Capa+Rita3.jpg', spotify: 'https://open.spotify.com/intl-pt/artist/7dnT2FUXhjirperXaH22IJ' },
      ].map((band, index) => (
        <View key={index} style={styles.boxLista}>
          <Image source={{ uri: band.uri }} style={styles.imageLista} />
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => openSpotify(band.spotify)}>
              <Text style={styles.artista}>{band.name}</Text>
            </TouchableOpacity>
            <Text style={styles.genero}>{band.year}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#9404d6',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e3cbf7',
    fontFamily: 'InterBlack',
  },
  
  artista: {
    color: '#e3cbf7',
    fontFamily: 'InterBlack',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'start',
  },
  genero: {
    color: '#e3cbf7',
    fontFamily: 'InterBlack',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  pais: {
    color: '#e3cbf7',
    fontFamily: 'InterBlack',
    fontSize: 16,
    textAlign: 'center',
  },


  box1: {
    width: 350,
    height: 450,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#170129',
    borderRadius: 15,
    backgroundColor: '#250136',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },


  image1: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 15,
  },


  boxLista: {
    width: 350,
    height: 100,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#170129',
    borderRadius: 15,
    backgroundColor: '#250136',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row', 
    alignItems: 'center', 
  },


  imageLista: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },


  textContainer: {
    justifyContent: 'center',
  },


  box2: {
    width: 350,
    height: 550,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#170129',
    borderRadius: 15,
    backgroundColor: '#250136',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },


  image2: {
    width: '100%',
    height: '45%',
    borderRadius: 10,
    marginBottom: 8,
  },
});


export default Layout;


