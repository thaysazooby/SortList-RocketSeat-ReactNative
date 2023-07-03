import { Text, View } from "react-native";

import { styles } from './styles';

export function Header() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>
             Categorias
        </Text>

        <Text style={styles.subtitle}>
            Define a sequencia de asssuntos que vocÊ mais gosta no topo da lista
        </Text>
        </View>
    );
}