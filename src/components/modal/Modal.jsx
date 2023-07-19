import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ hideModal, picture }) => {
  let overlay = null;

  const handleKeyDown = evt => {
    if (evt.keyCode === 27) {
      hideModal();
    }
  };

  useEffect(() => {
    overlay.focus();
  }, []);

  return (
    <div
      ref={input => {
        overlay = input;
      }}
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
