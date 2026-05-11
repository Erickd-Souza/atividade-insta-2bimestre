import { View, Text, TouchableOpacity,Image, StyleSheet,TextInput } from 'react-native';
import { router } from 'expo-router';

export default function ConfiguracaoPerfil() {
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
        
            <View>
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Image style={styles.fotoPerfil} source={{uri: "https://picsum.photos/200",}}/>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity>
                            <Text style={styles.nomeUsuario}>Editar foto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', paddingHorizontal: 20, marginTop: 20}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 8}}>Nome</Text>
                <TextInput
                    style={styles.input}
							placeholder="Joao da Silva"/>

                <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 8, marginTop: 20}}>Nome de Usuário</Text>
                <TextInput
                    style={styles.input}
							placeholder="joao_silva"/>
                 <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 8, marginTop: 20}}>Bio</Text>
                
                <TextInput
                    style={styles.input}
							placeholder="Exelente pescador"/>
            </View>

            <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    fotoPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    nomeUsuario: {
        fontSize: 16,
        fontWeight: 500,
        marginTop: 8,
       
    },
     input:{
        height:45,
        borderWidth:1,
        borderRadius:6,
        paddingHorizontal:10,
        color: "#666",
        fontSize:16,
        borderColor:"#66666677"
   },
   botao:{
		paddingVertical: 12,
        paddingHorizontal: 18,
        backgroundColor: '#d6d7d9',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        marginTop: 30,
	},
});