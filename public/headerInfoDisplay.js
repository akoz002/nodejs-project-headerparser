'use strict';
/*
 * React component for displaying the request header info.
 */

class HeaderInfoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerInfo: null
    };
    this.handleClick = this.handleClick.bind(this);
  } // button 'onClick' handler


  handleClick() {
    // fetch data from the API
    fetch('api/whoami').then(res => res.json()).then(json => this.setState({
      headerInfo: json
    })).catch(err => console.error(err));
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Demo:"), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleClick
    }, "Get Header Info"), this.state.headerInfo && /*#__PURE__*/React.createElement("p", {
      className: "code-block"
    }, /*#__PURE__*/React.createElement("code", null, '{', /*#__PURE__*/React.createElement("br", null), "\xA0\xA0\"ipaddress\": \"", this.state.headerInfo.ipaddress, "\",", /*#__PURE__*/React.createElement("br", null), "\xA0\xA0\"language\": \"", this.state.headerInfo.language, "\",", /*#__PURE__*/React.createElement("br", null), "\xA0\xA0\"software\": \"", this.state.headerInfo.software, "\"", /*#__PURE__*/React.createElement("br", null), '}')));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(HeaderInfoDisplay, null), document.querySelector('#header-info-display'));