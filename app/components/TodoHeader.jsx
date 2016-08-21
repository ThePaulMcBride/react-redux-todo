import React from 'react';

export default React.createClass({
    _handleKeyPress: function(e) {
        if (e.key === 'Enter' && this.refs.addTodoInput.value !== '') {
            return this.props.addItem(
                this.refs.addTodoInput.value
            );

            this.refs.addTodoInput.reset();
        }
    },

    updateInput(e) {
        this.props.updateInput(e.target.value);
    },

    render() {
        return <header className="header">
            <h1>todos</h1>
            <input className="new-todo"
                   ref="addTodoInput"
                   autoComplete="off"
                   value={this.props.input}
                   onChange={this.updateInput}
                   placeholder="What needs to be done?"
                   onKeyPress = {this._handleKeyPress}
            />
        </header>
    }
});