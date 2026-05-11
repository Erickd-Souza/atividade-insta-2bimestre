import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

	function entrar() {

		router.push({
			pathname: '/(tabs)/home',
			params: {
				user: 'John Doe',
			},
		})
	}
	return (
		 <SafeAreaView style={styles.container}>
			
			<View style={styles.containerTexto}>
				<View style={{gap:10}}>
					<View style={{alignItems:"center"}}>
						<Text style={styles.titulo}>Login</Text>
					</View>
					<View style={{gap:10}}>
						<Text style={styles.subtitulo}>Digite o Username</Text>
						<TextInput
							style={styles.input}
							placeholder="Insira o Username"
						/>
					</View>
						<View style={{gap:10}}>
						<Text style={styles.subtitulo}>Digite sua Senha</Text>
						<TextInput
							style={styles.input}
							placeholder="Insira o Senha"
						/>
					</View>
				</View>
			<View>
				<TouchableOpacity style={styles.botao} onPress={entrar}>
				<Text style={styles.textobotao} >ENTRAR</Text>
				</TouchableOpacity>
			</View>
			</View>
    </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#F3f3f3',
		alignItems:'center',
		justifyContent:'space-around',
		maxWidth:600,
		width: '100%',
		alignSelf:'center',
		paddingHorizontal:20,
  },
 
  containerTexto:{
	backgroundColor:'#FFFF',
    paddingHorizontal:20,
    gap:20,
	borderRadius:10,
	padding:50,
	width: '100%',
	
  },
  botao:{
    height:45,
    backgroundColor:"#086DFF",
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  textobotao:{
    color:'white',
    fontWeight:500
  },
  subtitulo:{
	fontWeight:400,
    color: "#000000",
    fontSize:16,
  },
  titulo:{
    fontWeight:600,
    fontSize:30,
  },
  input:{
	height:35,
	borderWidth:1,
	borderRadius:6,
	paddingHorizontal:10,
	color: "#666",
    fontSize:16,
	borderColor:"#66666677"
	
  }
});
