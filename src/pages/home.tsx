import { View, StyleSheet, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home(){
    const insets = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: insets.top }}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    },
    card:{

    }
});