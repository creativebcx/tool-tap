import React from 'react';
import './searchform.css';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projectType: [
      'Select Project Type',
      'Carpentry',
      'Concrete',
      'Welding',
      'Plumbing',
      'Auto',
      'Landscaping'
      ],
      location: [
        'Select Location',
        'Boise, ID',
        'Salt Lake City, UT'
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
          <select className="location-select">
            {this.state.location.map(
              location => <option key={location.id}>{location}</option>)}
          </select>
        </label>
        <label className="projectType">
          Project Type:
          <select className="projectType-select">
            {this.state.projectType.map(
              projectType => <option key={projectType.id}>{projectType}</option>)}
          </select>
        </label>
        <button type="submit" value="Search">Search</button>
      </form>
    );
  }
}

//tools = this.state.toolTypes.filter(item => item.projectType = this.state.projectType)

//[{'projectType': 'carpentry', 'toolType': 'hammer'}
//{'projectType': 'carpentry', 'toolType': 'drill'}
