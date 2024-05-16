import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export function SingleMessage({ message = "" }) {
  return (
    <Card style={styles.singleMessageBox}>
      <Text>{message}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
    singleMessageBox: {
        backgroundColor: '#f0f0f0',
        marginBottom: 16,
        padding: 16,
    },
});