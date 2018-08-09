import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
class CircleBlink extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      weight: this.props.weight || '30',
      color: this.props.color || 'orange',
    }
  }
  render(){
       // Create the span tag with css
       let Blink = styled.span`
           background-color: ${this.state.color};
           width: ${this.state.weight}px;
           height: ${this.state.weight}px;
           display:inline-block;
           animation: blink 1s infinite;
           border-radius: 50%;
           @keyframes blink{
             0% {
                 transform: scale(1);
                 opacity: .25;
             }
             50%{
                 transform: scale(1);
                 opacity: 1;
             }
             100% {
                 transform: scale(1);
                 opacity: .25;
             }
           }
       `;
    return (
        <Blink/>
      )
    }
}

CircleBlink.propTypes = {
  weight: PropTypes.string,
  color: PropTypes.string
};
export default CircleBlink;
