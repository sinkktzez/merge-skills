import { StyleSheet, Text, View, Image } from "react-native"
import Button from "@/src/components/Button";
import { useRouter } from 'expo-router';
   
export default function ProfileScreen(){
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Perfil</Text>
            <Image source={{
                uri: 'https://github.com/sinkktzez.png'}} style={styles.profileImage}/>
            <View style={styles.profileInfo}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Nome:</Text>
                    <Text style={styles.infoValue}>José Vitor Ferro Teixeira</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Email:</Text>
                    <Text style={styles.infoValue}>sinkktzez@gmail.com</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Button title="Editar Perfil" onPress={() => router.replace('/onboarding')}/>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    gap: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24
  },
  footer: {
      width: '100%',
      gap:12,
      paddingBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileInfo: {
    width: '100%',
    marginBottom: 40,
  },
  infoItem: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
 
});