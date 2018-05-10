import React, { Component } from 'react'

class CreateTodo extends Component {

  state={
    todo: ""
  }

  handleChange=(e)=>{
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.store.dispatch({type: "ADD_TODO", todo: this.state})
  }

  render() {
    return(
      <div>

        <form onSubmit={this.handleSubmit}>
        <label> add todo </label>
        <input onChange={this.handleChange}/>

        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CreateTodo;
