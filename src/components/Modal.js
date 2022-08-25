import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>remove all items from your shopping card</h4>
        <div className='btn-container'>
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            type='button'
            className='btn confirm-btn'
          >
            Confirm
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            type='button'
            className='btn clear-btn'
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
