import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello world!
      </Text>
      <Text>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default App;
