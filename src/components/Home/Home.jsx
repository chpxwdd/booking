import React, { Component } from 'react'

import { PageHeader } from 'react-bootstrap'
// import Autocomplete from '../UI/Autocomplete'
import UI from '../UI'

export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          Home <small>component</small>
        </PageHeader>
        <UI.Autocomplete name="destinations" url="" keyField="" valueField="" />
      </div>
    )
  }
}
