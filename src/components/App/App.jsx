import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../Home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Grid>
            <Row>
              <Col>
                <Route exact path="/" component={Home} />
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}
