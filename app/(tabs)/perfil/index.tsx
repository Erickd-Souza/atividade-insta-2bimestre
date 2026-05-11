import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function TabTwoScreen() {
	return (
		<View style={{ flex: 1,maxWidth:600, alignSelf: 'center', backgroundColor: '#fff', width: '100%' }}>
			<View style={styles.containerNav}>
				<View>
					<Text style={styles.titulo}>Erione</Text>
				</View>
				<View style={styles.boxIcon}>
					<TouchableOpacity>
						<FontAwesome6 name="threads" size={24} color="black" />
					</TouchableOpacity>

					<TouchableOpacity>
						<FontAwesome name="plus-square-o" size={27} color="black" />
					</TouchableOpacity>

					<TouchableOpacity>
						<AntDesign name="menu" size={24} color="black" />
					</TouchableOpacity>
				</View>
			</View>
            <View style={styles.boxMetrics}>
				<View>
					<Image style={styles.fotoPerfil} source={{uri: "https://picsum.photos/200",}}/>
				</View>
				<View style={{ alignItems: 'center' }}>
					<Text style={[styles.subtitulo,{fontWeight: 600, color:"black", fontSize: 18}]}>75</Text>
					<Text style={styles.subtitulo}>Posts</Text>
				</View>
				<View style={{ alignItems: 'center' }}>
					<Text style={[styles.subtitulo,{fontWeight: 600, color:"black", fontSize: 18}]}>750</Text>
					<Text style={styles.subtitulo}>Seguidores</Text>
				</View>
				<View style={{ alignItems: 'center' }}>
					<Text style={[styles.subtitulo,{fontWeight: 600, color:"black", fontSize: 18}]}>240</Text>
					<Text style={styles.subtitulo}>Seguindo</Text>
				</View>
			</View>
			<View style={styles.boxBotao}>
				<TouchableOpacity style={styles.botao} onPress={() => router.push('/perfil/configuracaoPerfil')}>
					<Text style={styles.subtitulo}>Editar Perfil</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.botao}>
					<Text style={styles.subtitulo}>Compartilhar Perfil</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<MaterialIcons name="perm-contact-cal" size={29} color="black" />
				</TouchableOpacity>
			</View>	
			<View style={{alignItems: 'center'}}>
				<View style={[styles.boxIcon,{justifyContent: 'space-around', width:'100%'}]}>
						<TouchableOpacity>
							<FontAwesome name="table" size={27} color="black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<MaterialCommunityIcons name="play-box-outline" size={29} color="black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<MaterialIcons name="perm-contact-cal" size={29} color="black" />
						</TouchableOpacity>
				</View>			
			</View>
			<View style={styles.feed}>
				<Image style={styles.fotoFeed} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oNge7AAWjSPas_SU0PFZpaVIwuFXDguZ9Q&s",}}/>
				<Image style={styles.fotoFeed} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbq_mI5egnA08qlb5beoYkB5k0eyIk1gVDTg&s",}}/>
				<Image style={styles.fotoFeed} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpORocZ-UyfvfXOC-1mAAIq_YlWiLAoLMB1A&s",}}/>
				<Image style={styles.fotoFeed} source={{uri: "https://cdn.autopapo.com.br/box/uploads/2024/07/03171049/bugatti-chiron-paito-motors-brasil-732x488.jpg",}}/>	
				
			</View>
			<View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 16}}>
				<TouchableOpacity style={styles.botao} onPress={() => router.push('/')}>
					<Text style={{fontWeight: 600}}>Sair</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	titulo:{
		fontSize: 18,
		fontWeight: 600,
	},
	subtitulo:{
		fontSize: 16,
		fontWeight: 500,
		color: '#565656',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
	boxIcon: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
	containerNav: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	boxMetrics: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: 16,
	},
	fotoPerfil: {
		width: 80,
		height: 80,
		borderRadius: 200,
	},
	boxBotao: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: 16,
		backgroundColor: '#ffffff',
	},
	botao:{
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: '#d6d7d9',
		borderRadius: 4,
		alignItems: 'center',
		width: '40%',
	},
	feed:{
		width: '100%',
		marginTop: 16,
		borderRadius: 8,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		paddingHorizontal: 8,
	},
	fotoFeed: {
		width: '32%',
		aspectRatio: 1,
		borderRadius: 8,
		marginBottom: 8,
	},
});
