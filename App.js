import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AddForm from './Add/AddForm';
import TaskList from './TaskList/TaskList';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            tasks: ['hello', 'poop', 'poop','hello', 'poop','hello', 'poopp'],
            text: ''
        };
    }

    textChange = (text) => {
        this.setState({text})
    }

    addTodo = () => {
        const tasks = [this.state.text, ...this.state.tasks];
        this.setState({tasks});
    }

    completeTodo = (index) => {
        const tasks = this.state.tasks.filter((task, idx) => idx != index);
        this.setState({tasks});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Your Todos!</Text>
                <AddForm onTextChange={this.textChange}
                         onAddTodo={this.addTodo}/>
                <TaskList onComplete={this.completeTodo}
                          tasks={this.state.tasks}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
      container: {
          flex: 1,
          paddingVertical: 25,
          paddingHorizontal: 15,
          backgroundColor: '#fff'
      },
    header: {
        fontSize: 30,
        fontWeight: "300"
    }
});
