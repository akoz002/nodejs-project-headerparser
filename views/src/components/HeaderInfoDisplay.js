
import React from 'react';

/*
 * React component for displaying the request header info.
 */

export default class HeaderInfoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      headerInfo: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // button 'onClick' handler
  handleClick() {
    this.setState({
      fetching: true,
      headerInfo: null
    });

    // fetch data from the API
    fetch('api/whoami')
      .then(res => res.json())
      .then(json => this.setState({
        fetching: false,
        headerInfo: json
      }))
      .catch(err => console.error(err));
  }

  // formats output value with quotes and/or comma
  formatValue(key, index, length) {
    const value = this.state.headerInfo[key];
    const result = typeof value === "string" ? `"${value}"` : `${value}`;
    return index < length - 1 ? result + ',' : result;
  }

  render() {
    let headerResult = null;
    if (this.state.fetching) {
      headerResult = (
        <p className='code-block'>
          <code>Fetching header info...</code>
        </p>
      );
    }
    else if (this.state.headerInfo) {
      headerResult = (
        <ul className='code-block'>
          <code>
            <li>{'{'}</li>
            <ul>
              {Object.keys(this.state.headerInfo).map((key, index, array) =>
                <li key={key}>
                  "{key}": {this.formatValue(key, index, array.length)}
                </li>
              )}
            </ul>
            <li>{'}'}</li>
          </code>
        </ul>
      );
    }

    return (
      <div>
        <button onClick={this.handleClick}>Get Header Info</button>
        {headerResult}
      </div>
    );
  }
}
