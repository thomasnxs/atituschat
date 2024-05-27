import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export function SingleMessage({ message = "", sender = {name: 'Anônimo'} }) {
  return (
    <Card style={styles.singleMessageBox}>
      <Text style={styles.senderName}>
        {sender.name}
      </Text>
      <Text>{message}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
    singleMessageBox: {
        backgroundColor: '#fff',
        marginBottom: 16,
        padding: 16,
    },
    senderName: {
      fontSize: 10,
    }
});