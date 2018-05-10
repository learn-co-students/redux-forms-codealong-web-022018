import React, { Component } from 'react'

class CreateTodo extends Component {

  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_TODO",
      todo: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add text</label>
            <input type="text" onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form >
        {this.state.todo}
      </div>
    );
  }
}

export default CreateTodo;
