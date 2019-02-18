import React, { Component } from 'react'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import AutocompleteResult from './AutocompleteResult'
import axios from 'axios'

const UI_AUTOCOMPLETE_MIN_CHARS = 3
// const result = [
//   { airportId: 33083,label: 'Санкт-Петербург, Россия - St Peterburg (LED)'},
//   {airportId: 3494840,label: 'Санкт-Мориц, Швейцария - Samedan (SMV)'},
//   {airportId: 3464381,label: 'Санкт-Петербург, Россия - Rzhevka (RVH)'},
//   {airportId: 3464384,label: 'Санкт-Петербург, Россия - Saint Petersburg Railwa (ZLK)'}
// ]

export default class Autocomplete extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
      value: '',
      name: '',
      result: [],
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      collapsed: this.props.collapsed,
    })
  }

  handleChange(event) {
    const term = event.target.value
    if (term.length < UI_AUTOCOMPLETE_MIN_CHARS) {
      return
    }

    const _self = this
    axios
      .get('https://m.sodis.ru/airportservlet2', {
        params: { term: term },
      })
      .then(res => {
        console.log(res.data)
        _self.setState({ result: res.data })
        // this.props.setCurrent(decoded)
      })
      .catch(err => {
        // this.props.getErrors(err.response.data)
      })
    // this.setState({ value: event.target.value })
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState)
    console.log(nextProps)
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
          {this.state.result.length > 0 && (
            <AutocompleteResult list={this.state.result} />
          )}
        </FormGroup>
      </Form>
    )
  }
}
