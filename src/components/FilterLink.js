import React, { Component, PropTypes } from 'react';
import { setVisibilityFilter } from '../actions';
import Link from './Link';

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <Link
        active={state.visibilityFilter === props.filter}
        onClick={() =>
          store.dispatch(setVisibilityFilter(props.filter))
        }
      >{props.children}</Link>
    );
  }
}

FilterLink.contextTypes = {
  store: React.PropTypes.object,
};

export default FilterLink;
