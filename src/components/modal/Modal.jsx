import React, { Component } from 'react';
import { ModalBack, ModalCon } from './modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyClose);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.keyClose);
  }

  keyClose = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    return (
      <ModalBack onClick={this.handleBackDropClick}>
        <ModalCon>
          <img src={this.props.image} alt="" />
        </ModalCon>
      </ModalBack>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
