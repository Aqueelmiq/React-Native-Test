import React from 'react';
import { View, Text, Button } from 'react-native';

const style = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    padding: 10,
    margin: 5
};

const Task = ({name, onComplete}) =>  (
    <View style={style}>
        <Text> {name} </Text>
        <Text> {name} </Text>
        <Button
            title="Done"
            onPress={onComplete}
        />
    </View>
);

export default Task;
