import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, Modal, TouchableOpacity } from 'react-native';

export default function ProductCard({ id, nome, imagem, preco }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [productName, setProductName] = useState('');

  const handleBuy = (name) => {
    setProductName(name);
    setModalVisible(true);
  };

  return (
    <View key={id} style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <View style={styles.container_content}>
        <Text style={styles.title}>
          {nome}
        </Text>
        <Text style={styles.price}>
          R${preco.toFixed(2)} {/* Corrigindo para formatar o preço com duas casas decimais */}
        </Text>
      </View>
          <TouchableOpacity 
        style={styles.buyButton} 
        onPress={() => handleBuy(nome)}
      >
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>

      {/* Modal para exibir a mensagem */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Produto {productName} comprado!</Text>
             <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: 'center',
    width: "100%",
    paddingHorizontal:10
  },
  imagem: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  container_content: {
    textAlign:"left"
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
 
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: 'green',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparência para o fundo
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: 'green', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    marginTop: 10,
    alignItems: 'center',
  },
    buyButtonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#fff', 
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#9a9a9a"
  },
  closeButtonText: {
    color: '#454545', 
    fontSize: 16,
  },
});
