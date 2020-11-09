
import React from 'react';

/*
 * React component for displaying the request header info.
 */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerInfo: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // button 'onClick' handler
  handleClick() {
    // fetch data from the API
    fetch('api/whoami').then(res => res.json())
      .then(json => this.setState({
        headerInfo: json
      }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h3>Demo:</h3>
        <button onClick={this.handleClick}>Get Header Info</button>
        {
          this.state.headerInfo &&
          <p className="code-block">
            <code>
              {'{'}<br/>
              &nbsp;&nbsp;"ipaddress": "{this.state.headerInfo.ipaddress}",<br/>
              &nbsp;&nbsp;"language": "{this.state.headerInfo.language}",<br/>
              &nbsp;&nbsp;"software": "{this.state.headerInfo.software}"<br/>
              {'}'}
            </code>
          </p>
        }
      </div>
    );
  }
}
