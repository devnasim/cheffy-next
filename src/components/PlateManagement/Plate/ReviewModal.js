import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';

import Modal from '../../../lib/Modal';
import RatingInput from '../../../lib/RatingInput';

const ReviewModal = ({ isActive, onCloseModal }) => {
  return (
    <Modal isActive={isActive} onCloseModal={onCloseModal}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <AiFillEdit size={25} />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Write a review
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Tap to rate your experience</p>
            </div>
            <div className="pb-3">
              <RatingInput size={45} />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-1 ">
            <textarea
              id="about"
              name="about"
              rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md h-48"
              placeholder="Add review"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Write anything you loved or want to improve about the plate.
          </p>
        </div>
      </div>
    </Modal>
  );
};

ReviewModal.defaultProps = {
  onCloseModal: () => {},
};

ReviewModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func,
};

export default ReviewModal;
