import { Text } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { StyleSheet } from 'react-native';

export default function Login() {
    return (
        <Card style={styles.boxLogin}>
            <Text style={styles.boxLoginTitle}>
                Atitus Chat
            </Text>

            <TextInput 
                label="Informe seu nome" 
                style={styles.boxLoginInput} 
            />
            
            <Button mode="contained">
                Entrar
            </Button>
        </Card>
    )
}

const styles = StyleSheet.create({
    boxLogin: {
        margin: 16,
        padding: 16,
    },
    boxLoginTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    boxLoginInput: {
        marginBottom: 16,
    },
});