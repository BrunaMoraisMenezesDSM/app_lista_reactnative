import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List } from 'react-native-paper';
import { useState } from 'react';

// var listaProdutos = [
//   { "nome": "Ifone", "preco": 7999.99, "descricao": "Celular Maçã" },
//   { "nome": "SanSuga", "preco": 6999.99, "descricao": "S49" },
//   { "nome": "Xingling", "preco": 1999.99, "descricao": "Mi xing" },
//   { "nome": "Motorola", "preco": 999.99, "descricao": "Tijolo" },
//   { "nome": "LJ", "preco": 7999.99, "descricao": "Casas Bahia" },
//   { "nome": "Iphone X", "preco": 16999.99, "descricao": "Celular Maçã" },
//   { "nome": "Iphone EX Plus", "preco": 17999.99, "descricao": "Celular Maçã" },
// ]

export default function App() {
  const [ listaProdutos, setListaProdutos ] = useState([]); // Declarando uma variável para definir o estado

  async function carregaProdutos(){
    var lista = await fetch('https://web-wfiwe9krz76p.up-de-fra1-1.apps.run-on-seenode.com/api/produtos', 
    { method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setListaProdutos(await lista.json());
  }

  return (
    <View style={styles.container}>
      <List.Section>
      <List.Subheader> Produtos </List.Subheader>
        {listaProdutos.map((produto) => {
          return (
            <List.Item title={produto.nome} left={() => <List.Icon icon='cellphone' />} right={() => <Text> {produto.preco} </Text> }/>
        )
        })}
      </List.Section>
      <Button onPress={() => {carregaProdutos()}} mode='elevated'> Carregar </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
