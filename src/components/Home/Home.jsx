import React, { Component } from 'react'

import { PageHeader } from 'react-bootstrap'
import Autocomplete from '../UI/Autocomplete'

export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          Home <small>component</small>
        </PageHeader>
        <Autocomplete name="destinations" />
      </div>
    )
  }
}
