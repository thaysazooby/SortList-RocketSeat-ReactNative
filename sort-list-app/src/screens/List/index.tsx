import { ScrollView, View } from "react-native";

import { CARDS } from '../../data/cards';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function List() {

    return (
        <View style={styles.container}>

            <Header />

            <ScrollView
            style={styles.list}
            showsVerticalScrollIndicator={false}
            >
            
            {
                CARDS.map((item) => (
                    <Card 
                    key={item.id}
                    data={item}
                    />
                ))
            }

            </ScrollView>
        </View>
    );
}