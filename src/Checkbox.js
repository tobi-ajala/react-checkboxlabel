import React, { Component, PropTypes } from 'react';

class Checkbox extends Component { //stateful component
  state = { //to set initial state of the checkbox component
    isChecked: false, //isCheck property default set to false because we initially want every checkbox to render as unchecked
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox" //setting the type of input as checkbox
            value={label} //value input name passing as a property from a parent
            checked={isChecked} //value coming from the components state property isChecked
            onChange={this.toggleCheckboxChange} //onChange event handler calling on the toggleCheckboxChange function when checkbox is check/unchecked
          />
          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
