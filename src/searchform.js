import React from 'react';
import './searchform.css';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projectType: [
      'Plumbing',
      'Auto',
      'Landscaping'
      ],
      toolType: [
        'Electric Saws',
        'Yard Machinary',
        'Diesel Tools'
      ],
      location: [
        'Boise, ID'
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="location">
          Location:
          <select className="projectType-select">
              <option>{this.state.location[0]}</option>
          </select>
        </label>
        <label className="projectType">
          Project Type:
          <select className="projectType-select">
              <option>{this.state.projectType[0]}</option>
              <option>{this.state.projectType[1]}</option>
              <option>{this.state.projectType[2]}</option>
          </select>
        </label>
        <label className="toolType">
          Tool Type:
          <select className="toolType-select">
              <option>{this.state.toolType[0]}</option>
              <option>{this.state.toolType[1]}</option>
              <option>{this.state.toolType[2]}</option>
          </select>
        </label>
        <button type="submit" value="Search">Search</button>
      </form>
    );
  }
}