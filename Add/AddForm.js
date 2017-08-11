import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    inputField: {
        flex: 7
    },
    addButton: {
        flex: 3
    }
});

const AddForm = ({text, onTextChange, onAddTodo}) =>  (
    <View style={styles.container}>
        <TextInput style={styles.inputField}
                   value={text}
                   onChangeText={onTextChange}/>
        <Button title="Add"
                style={styles.addButton}
                onPress={onAddTodo}/>
    </View>
);

export default AddForm;
