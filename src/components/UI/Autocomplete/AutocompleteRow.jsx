import React, { Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'

export default class AutocompleteRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      code: '',
      context: '',
    }
    // this.handleSelect.bind(this)
  }

  componentDidMount() {
    this.setState({
      code: this.props.code,
      context: this.props.context,
    })
  }

  componentDidUpdate() {}

  handleSelect(event) {
    this.setState(prevState => {
      return {
        active: !prevState.active,
      }
    })
  }

  render() {
    return (
      <ListGroupItem
        as="li"
        disabled
        onClick={this.handleSelect.bind(this)}

        // variant={this.state.active ? 'flush' : 'primary'}
      >
        {this.state.context}
      </ListGroupItem>
    )
  }
}
