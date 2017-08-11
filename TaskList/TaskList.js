import React from 'react';
import { ListView } from 'react-native';

import Task from './Task/Task';

export default class TaskList extends React.Component {

    constructor(props) {
        super();
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            items: this.ds.cloneWithRows(props.tasks)
        }
        this.onComplete = props.onComplete;
    }

    componentWillReceiveProps(newProps) {
        const items = this.state.items.cloneWithRows(newProps.tasks);
        this.setState({items});
    }

    render() {
        return (
            <ListView
                dataSource={this.state.items}
                renderRow={(task, sec, row) => <Task onComplete={() => this.onComplete(row)} name={task}/>}
            />
        );
    }

}
