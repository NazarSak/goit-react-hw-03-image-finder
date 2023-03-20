import React, { Component } from 'react';
import { ModalBack, ModalCon } from './modal.styled';

export class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.keyClose);
    // window.addEventListener("click",this.clickClose)
  }

clickClose = () => {
    console.log("object");
    // this.props.onClose() 
}

  keyClose = e => {
    if (e.code === 'Escape') {
      console.log('object');
      this.props.onClose() 
    }
  };

  render() {
    return (
      <ModalBack>
        <ModalCon>{this.props.children}</ModalCon>
      </ModalBack>
    );
  }
}
