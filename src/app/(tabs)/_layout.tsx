import { Tabs } from "expo-router";
import Octicons from '@expo/vector-icons/Octicons'

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home", tabBarInactiveTintColor: '#bdbdbd', tabBarIcon: ({ color }) => <Octicons size={24} name="home" color={color} />, headerShown: false}}/>
            <Tabs.Screen name="profile" options={{ title: "Perfil", tabBarInactiveTintColor: '#bdbdbd', tabBarIcon: ({ color }) => <Octicons size={24} name="person" color={color} />, headerShown: false}}/>
        </Tabs>
    )
} 