import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [cuenta, setCount] = useState(0);

  const sumar = () => setCount(cuenta + 1);
  const restar = () => setCount(cuenta - 1);

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.titulo}>Contador</Text>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <TouchableOpacity style={styles.btn} onPress={restar}>
            <Text style={styles.textBoton}>-</Text>
          </TouchableOpacity>
          <View style={styles.cuentaContainer}>
            <Text style={styles.textCuenta}>{cuenta}</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={sumar}>
            <Text style={styles.textBoton}>+</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('./Kanade-sekai-firstlive.webp')} style={styles.image} />
        <Text style={styles.description}>
          ¡Bienvenido al hermoso mundo de la música! Aumenta o disminuye la armonía con los botones + y -.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#B2DFDB', // pastel teal
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#3949AB', // pastel indigo
  },
  container: {
    backgroundColor: '#E1BEE7', // pastel yellow
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#FFCCBC', // pastel orange
    padding: 30,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  textBoton: {
    fontSize: 32,
    color: '#BF360C', // deep orange
  },
  cuentaContainer: {
    backgroundColor: '#C5E1A5', // pastel green
    padding: 30,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  textCuenta: {
    fontSize: 32,
    color: '#689F38', // light green
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    color: '#D81B60', // pastel pink
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '600', // semi-bold
  },
});
