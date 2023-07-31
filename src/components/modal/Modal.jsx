import { useEffect, useRef } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ hideModal, picture }) => {
  const overlay = useRef();

  const handleKeyDown = evt => {
    if (evt.keyCode === 27) {
      hideModal();
    }
  };

  useEffect(() => {
    overlay.current.focus();
  }, []);

  return (
    <div
      ref={overlay}
      tabIndex={0}
      className={css.overlay}
      onClick={hideModal}
      onKeyDown={handleKeyDown}
    >
      <div className={css.modal} tabIndex={0} onKeyDown={handleKeyDown}>
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  hideModal: PropTypes.func,
  picture: PropTypes.string,
};
