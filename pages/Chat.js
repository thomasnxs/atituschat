import { ScrollView } from "react-native";
import 'react-native-get-random-values';
import { Button, Card, TextInput } from "react-native-paper";
import { StyleSheet, Text } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { SingleMessage } from "../components/SingleMessage";
import { database} from "../config/firebase";
import { useEffect, useState } from "react";

export default function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const route = useRoute();
    const { name } = route.params;

    const user = {
        _id: uuidv4(),
        name: name,
    }

    const sendMessage = async () => {
        await addDoc(collection(database, 'chats'), {
            _id: uuidv4(),
            text: message,
            createdAt: new Date(),
            user: user,
        });
        
        setMessage('');
    }

    useEffect(() => {
        async function getMessages() {
            const values = query(
                collection(database, 'chats'),
                orderBy('createdAt', 'desc')
            );
            onSnapshot(values, (snapshot) => {
                setMessages(snapshot.docs.map((doc) => ({
                    _id: doc.data()._id,
                    text: doc.data().text,
                    user: doc.data().user
                })));
            });
        }
        getMessages();
    }, []);

    return (
        <>
            <ScrollView style={{padding: 16}}>
                {messages.map((msg) => <SingleMessage key={msg._id} message={msg.text} sender={msg.user} />)}
            </ScrollView>
            
            <Card style={styles.messageBox}>
                <TextInput 
                    placeholder="Mensagem..." 
                    style={styles.messageBoxInput} 
                    value={message}
                    onChangeText={setMessage}
                />
                <Button 
                mode="contained" 
                disabled={message.trim() === ''} 
                onPress={sendMessage}
                >
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