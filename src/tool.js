import React from 'react';
import './tool.css';
import testimg from './testimg.jpg';
//import {demoTools} from './testdata.js';

export default function Tool(props) {
    return (
        <div className="tool">
          <img className="toolImageUrl" src={testimg} alt="tool-thumbnail" />
          <div className='toolName'>{props.toolName}</div>
          <div className='toolQuality'>{props.toolQuality}</div>
          <div className='toolPrice'>{props.toolPrice}</div>
          <div className='toolPriceUnit'>{props.toolPriceUnit}</div>
          <div className='toolDescription'>{props.toolDescription}</div>
        </div>
    );
};

Tool.defaultProps = {
    toolName: '',
    toolQuality: '',
    toolPrice: '',
    toolPriceUnit: '',
    toolDescription: '',
    toolImgUrl: '',    
};