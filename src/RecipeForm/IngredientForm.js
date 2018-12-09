import React, { Component } from "react";

class IngredientForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      amount: "",
      type: ""
    };

    this.changeState = this.changeState.bind(this);
    this.submitState = this.submitState.bind(this);
  }

  changeState(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  }
  submitState(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="IngredientForm">
        <div className="IngredientForm-label">
          {this.state.name} {this.state.amount} {this.state.type}
        </div>
        <div className="IngredientForm-form">
          <form>
            <input name="name" onChange={this.changeState} />
            <input name="amount" type="number" onChange={this.changeState} />
            <select name="type" onChange={this.changeState}>
              <option value="">Unselected</option>
              <option value="teaspoon">teaspoon</option>
              <option value="tablespoon">tablespoon</option>
              <option value="fluid">fluid</option>
              <option value="gill">gill</option>
              <option value="cup">cup</option>
              <option value="pint">pint</option>
              <option value="quart">quart</option>
              <option value="gallon">gallon</option>
              <option value="ml">ml</option>
              <option value="l">l</option>
              <option value="dl">dl</option>
              <option value="pound">pound</option>
              <option value="ounce">ounce</option>
              <option value="mg">mg</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
              <option value="inch">inch</option>
            </select>
            <button onClick={this.submitState}>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default IngredientForm;
