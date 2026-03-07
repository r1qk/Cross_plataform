import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Riquelme Santos",
    bio: "Melhor fracassar do que nem tentar 😼👍",
    curso: "Ciência da Computação",
    turma: "CCPH2",
    semestre: "3° Semestre",
    avatar: "https://us-tuna-sounds-images.voicemod.net/2df13b63-ecca-4ed8-b5d2-7c82f38c3b13-1713223398188.png",
    linkedin: "https://www.linkedin.com/in/riquelme-santos-fiap/",
    github: "https://github.com/r1qk"

  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}> {usuario.curso}</Text>
        <Text style={styles.stat}> {usuario.turma}</Text>
        <Text style={styles.stat}> {usuario.semestre}</Text>
      </View>
      {/* Links */}
      <View style={styles.links}>
        <Text style={styles.texto}> Linkedin</Text>
        <Text style={styles.link}> {usuario.linkedin}</Text>
        <Text style={styles.texto}> Github</Text>
        <Text style={styles.link}> {usuario.github}</Text>
      </View>
    </View>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#660000',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#C11B17',
    marginBottom: 16,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 18,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 16
  },
  stat: {
    color: '#C11B17',
    fontSize: 18,
    textAlign: 'center'
  },
  links: {
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20
  },
  link: {
    color: '#C11B17',
    textAlign: 'center',
    fontSize: 14
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
    fontsize: 20
  }

});
