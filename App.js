import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, } from 'react-native';
import ProductCard from './components/ProductCard'; 
import products from './constants/products'; 
import Header from "./components/Header"


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((product) => (
          <View style={styles.container_Product} key={product.id}>
            <ProductCard {...product} />
            <View style={styles.barra} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    paddingTop: 40,
  },
  scrollContainer: {
    width: "100%",
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical:30,
    
  },
  container_Product: {
    flexDirection: 'column',
    gap: 18,
    marginBottom: 18,
    width: "100%",
  },
  barra: {
    width: '100%',
    height: 1,
    backgroundColor: '#dedede',
  },
});
