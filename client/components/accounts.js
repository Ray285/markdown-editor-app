import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
     //Right after component has mounted
     // Render the Blaze accounts form then find the div
     // We just rendered in the 'render' method and place
     // the Blaze accounts form in that div
     this.view = Blaze.render(Template.loginButtons,
       ReactDOM.findDOMNode(this.refs.container));
  }

 componentWillUnmount() {
   //Just before component will be removed from DOM
   // Go find the forms we created and destroy them
   // We need to clean up those forms ourselves
   Blaze.remove(this.view);
 }

 render() {
   return (
     <div ref="container"></div>
   );
 }
}

export default Accounts;
