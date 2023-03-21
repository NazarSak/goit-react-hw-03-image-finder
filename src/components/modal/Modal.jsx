import React, { Component } from 'react';
import { ModalBack, ModalCon } from './modal.styled';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.keyClose);
  }

  keyClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    return (
      <ModalBack>
        <ModalCon>
          <img 
          src={this.props.image} 
          alt={this.props.tag} 
          />
        </ModalCon>
      </ModalBack>
    );
  }
}
