import React from 'react'
export default class CreateTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
     </div>
   )
  }
}
