import React, { Component } from 'react'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import AutocompleteResult from './AutocompleteResult'

const result = [
  {
    airportId: 33083,
    label: 'Санкт-Петербург, Россия - St Peterburg (LED)',
  },
  {
    airportId: 3494840,
    label: 'Санкт-Мориц, Швейцария - Samedan (SMV)',
  },
  {
    airportId: 3464381,
    label: 'Санкт-Петербург, Россия - Rzhevka (RVH)',
  },
  {
    airportId: 3464384,
    label: 'Санкт-Петербург, Россия - Saint Petersburg Railwa (ZLK)',
  },
]

export default class Autocomplete extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
      value: '',
      name: '',
    }
  }
  componentDidMount() {
    this.setState({ name: this.props.name, collapsed: this.props.collapsed })
  }

  handlerChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <Form>
        <FormGroup controlId="destination">
          <FormControl
            type="text"
            name={this.state.name}
            placeholder="type destination"
            onChange={this.handleChange}
          />
          <AutocompleteResult collapsed={this.state.collapsed} list={result} />
        </FormGroup>
      </Form>
    )
  }
}
