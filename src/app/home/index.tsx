import React from 'react';
import { View, StyleSheet, Dimensions, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();  // Usando o hook para navegação
  
  const openDrawer = () => {
    // Navegar para o drawer menu
    router.push('/drawerMenu');  // Certifique-se de que a rota está configurada corretamente
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir Menu" onPress={openDrawer} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052, // Coordenadas iniciais
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Exemplo de marcador */}
        <Marker
          coordinate={{ latitude: -23.55052, longitude: -46.633308 }}
          title="São Paulo"
          description="Esta é a localização inicial do mapa."
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default HomeScreen;
