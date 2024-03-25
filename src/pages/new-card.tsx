import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';

interface NoteForm {
    title: string,
    description: string
}

export default function NewCard(){
    const insets = useSafeAreaInsets();
    const { control, handleSubmit, formState: { errors } } = useForm();

    function handleSaveNote(data: any): void{
        console.log(data);
    }

    return (
        <View style={{ paddingTop: insets.top, flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TextInput
                style={styles.titleInput}
            />
            <TextInput
                style={styles.description}
            />

            <TouchableOpacity style={styles.saveNoteButton} onPress={handleSubmit(handleSaveNote)}>
                <Text>Salvar Nota</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    },
    titleInput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200, 
        borderRadius: 10
    },
    description: {
        height: 350,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 10
    },
    saveNoteButtonText:{

    },
    saveNoteButton:{
        backgroundColor: "#4ade80",
        width: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10
    }
});