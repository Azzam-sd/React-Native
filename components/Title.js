import {Text, StyleSheet} from 'react-native';

import Colors from "../constants/colors";

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: Colors.primaryW1,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: Colors.primaryW1,
        padding: 12,
    },
});