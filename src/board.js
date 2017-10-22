import React from 'react';
import './board.css';
import Tool from './tool.js';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoTools : [{ 
        toolName: 'Example 1 Test',
        toolQuality: 'Fair',
        toolPrice: '100',
        toolPriceUnit: 'day',
        toolDescription: 'Lorum ipsum ipsum lorum ipsum lorum',
        toolImgUrl: 'testimg.jpg'
      }, {
        toolName: 'Example 2 Test',
        toolQuality: 'Fair',
        toolPrice: '100',
        toolPriceUnit: 'day',
        toolDescription: 'Lorum ipsum ipsum lorum ipsum lorum',
        toolImgUrl: 'testimg.jpg'
      }, {
        toolName: 'Example 3 Test',
        toolQuality: 'Fair',
        toolPrice: '100',
        toolPriceUnit: 'day',
        toolDescription: 'Lorum ipsum ipsum lorum ipsum lorum',
        toolImgUrl: 'testimg.jpg'
      }]
    };
  };

  render() {
    const demoTools = this.state.demoTools.map((demoTools, index) =>
      <Tool key={index} {...demoTools} />
    );
    return (
      <div className="tools">
        <h3>Here are the tools we found based on your search...</h3>
          {demoTools}
        </div>
      )
  };
};
/*
export default function Board() {
  const tools = [];
  for (let i=0; i=tools.length + 1; i++) {
    tools.push(<Tool />);
  }

  return (
    <div className="tools">
      <h3>{this.props.demoTools}</h3>
        {tools}
    </div>
  );
}

*/