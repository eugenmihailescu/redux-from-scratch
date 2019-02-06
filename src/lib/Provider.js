import * as PropTypes from "prop-types";
import { Component } from "react";

export default class Provider extends Component {
  getChildContext() {
    return { store: this.props.store };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};