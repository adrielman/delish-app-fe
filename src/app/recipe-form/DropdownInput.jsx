import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DropdownInput.scss";

class DropdownInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.select = React.createRef();
    this.FocusOnSelect = this.FocusOnSelect.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.props.onChange(name, value);
  }

  FocusOnSelect(event) {
    this.select.current.focus();
  }

  render() {
    return (
      <div className="DropdownInput">
        <select
          value={this.props.value}
          name={this.props.name}
          onChange={this.onChange}
          ref={this.select}
        >
          <option key={0} value={""}>
            {this.props.label}
          </option>
          {this.props.options.map((option, index) => (
            <option key={index + 1} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="DropdownInput-control">
          <FontAwesomeIcon
            icon="angle-down"
            className="decrease"
            onClick={this.FocusOnSelect}
          />
        </div>
      </div>
    );
  }
}

export default DropdownInput;
