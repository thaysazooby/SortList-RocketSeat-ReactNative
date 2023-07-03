import { StatusBar } from 'react-native';

import { List } from './src/screens/List';

//import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
    />

    <List />
    </>
  );
}
