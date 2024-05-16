import { ScrollView } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { StyleSheet, Text } from 'react-native';

import { SingleMessage } from "../components/SingleMessage";

export default function Chat() {
    return (
        <>
            <ScrollView>
                <SingleMessage message="Olá, tudo bem?" />
            </ScrollView>
            
            <Card style={styles.messageBox}>
                <TextInput 
                    placeholder="Mensagem..." 
                    style={styles.messageBoxInput} 
                />
                <Button mode="contained">
                    Enviar
                </Button>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    messageBox: {
        padding: 16,
    },
    messageBoxInput: {
        marginBottom: 16,
    },
});