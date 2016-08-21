import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import Todolist from './TodoList';
import TodoHeader from './TodoHeader';
import TodoTools from './TodoTools'

export class TodoApp extends React.Component {
    countActiveItems() {
        if (this.props.todos) {
            const activeItems = this.props.todos.filter(
                (item) => item.get('status') === 'active'
            );
            return activeItems.size;
        }
        return 0;
    }

    render() {
        return (
            <div>
                <section className="todoapp">
                    <TodoHeader addItem={this.props.addItem}
                                input={this.props.input}
                                updateInput={this.props.updateInput}
                    />
                    <Todolist {...this.props} />
                    <TodoTools  changeFilter={this.props.changeFilter}
                                filter={this.props.filter}
                                countActiveItems={this.countActiveItems()}
                                clearCompleted={this.props.clearCompleted}/>
                </section>
            </div>
        )
    }
};

function mapStateToProps(state) {

    return {
        todos: state.get('todos'),
        filter: state.get('filter'),
        input: state.get('input')
    };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);