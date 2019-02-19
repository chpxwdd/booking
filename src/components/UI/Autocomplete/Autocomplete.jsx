import React, { Component } from 'react'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import AutocompleteResult from './AutocompleteResult'

const UI_AUTOCOMPLETE_MIN_CHARS = 3

export default class Autocomplete extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, isFetching: true, items: Array }
  }

  handleChange(event) {
    const term = event.target.value
    if (term.length < UI_AUTOCOMPLETE_MIN_CHARS) {
      return
    }

    fetch('https://m.sodis.ru/airportservlet2?term=' + term)
      .then(res => res.json())
      .then(res => {
        this.setState({ items: res, isFetching: false })
      })
      .catch(() => {
        this.setState({ items: res, isFetching: false, error: err })
      })
  }

  render() {
    const { items, isFetching, error } = this.state

    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this)} />
        {!isFetching && (
          <ul>
            {items.map((item, key) => {
              return (
                <li key={key} code={item.airportId}>
                  {item.label}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}
