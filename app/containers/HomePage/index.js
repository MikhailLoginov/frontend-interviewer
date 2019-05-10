/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import history from '../../utils/history';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <button type="button" onClick={this.startInterview}>
          Start interview
        </button>
      </>
    );
  }

  startInterview = () => {
    history.push('/interview');
  };
}
