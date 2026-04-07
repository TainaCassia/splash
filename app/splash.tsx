import { useSession } from "@/src/contexts/SessionContexts";
import { Href, Redirect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const HERO_IMAGE = require("../assets/images/hero.png");

export default function SplashScreen() {
    const router = useRouter();
    const { completeSplash, hasSeenSplash, isAuthenticated } = useSession();

    if (isAuthenticated) return <Redirect href={"/(tabs)" as Href} />;
    if (hasSeenSplash) return <Redirect href={"/login" as Href} />;

    const handleNavigate = (target: Href) => {
        completeSplash();
        router.replace(target);
    };

    return (
        <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
            <StatusBar style="light" />

            <View style={styles.container}>
                <ImageBackground
                    source={HERO_IMAGE}
                    style={styles.hero}
                    imageStyle={styles.heroImage}
                >
                    <View style={styles.heroOverlay} />

                    <View style={styles.badge}>
                        <Text>Badge</Text>
                    </View>

                    <View style={styles.heroCopy}>
                        <Text style={styles.heroTitle}>
                            Welcome
                        </Text>
                    </View>
                </ImageBackground>

                <View style={styles.sheet}>
                    <View style={styles.handle} />

                    <Text style={styles.sheetTitle}>
                        Start now
                    </Text>

                    <Text style={styles.sheetSubtitle}>
                        Create your account or login
                    </Text>

                    <Pressable
                        onPress={() => handleNavigate('/login' as Href)}
                        style={styles.primaryButton}
                    >
                        <Text style={styles.primaryButtonText}>
                            Get Started
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => handleNavigate('/signup' as Href)}
                        style={styles.secondaryButton}
                    >
                        <Text style={styles.secondaryButtonText}>
                            Create Account
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
    },
    hero: {
        flex: 0.64,
        justifyContent: 'space-between',
        padding: 24,
    },
    heroImage: {
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
    },
    heroOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(20, 11, 4, 0.28)',
    },
    badge: {
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.92)',
    },
    heroCopy: {
        paddingBottom: 32,
    },
    heroTitle: {
        fontSize: 38,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    sheet: {
        flex: 0.44,
        marginTop: -28,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#FFF8F3',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
    },
    handle: {
        alignSelf: 'center',
        width: 72,
        height: 6,
        borderRadius: 999,
        backgroundColor: '#DFD5CF',
        marginBottom: 16,
    },
    sheetTitle: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 8,
    },
    sheetSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    primaryButton: {
        backgroundColor: '#000',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 10,
    },
    primaryButtonText: {
        color: '#FFF',
        fontWeight: '600',
    },
    secondaryButton: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: '#000',
        fontWeight: '600',
    },
});