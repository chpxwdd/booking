import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import AutocompleteRow from './AutocompleteRow'

export default class AutocompleteResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: null,
    }
  }

  render() {
    return (
      <div>
        <ListGroup as="ul">
          {this.props.list.map((item, key) => {
            return (
              <AutocompleteRow
                key={key}
                code={item.airportId}
                context={item.label}
              />
            )
          })}
        </ListGroup>
      </div>
    )
  }
}
