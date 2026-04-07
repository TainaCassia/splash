import { Image } from 'expo-image';
import { Platform, StyleSheet, View,Text, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
   return (
<SafeAreaView style={styles.container}>
<Text style={styles.title}>Welcome back!</Text>
<Text style={styles.subtitle}>Explore our latest pet matches.</Text>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#FFF' },
title: { fontSize: 28, fontWeight: '800', color: '#1B1716' },
subtitle: { fontSize: 16, color: '#7D7672', marginTop: 8 },
});
