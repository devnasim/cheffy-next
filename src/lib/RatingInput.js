/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

const RatingInput = ({ handleChange, initialValue, padding, iconSize }) => {
  const [rating, setRating] = React.useState(initialValue || 0);
  return (
    <>
      <div className="flex flex-row">
        <a
          onClick={() => {
            setRating(1);
            handleChange(1);
          }}
        >
          <span className={`${rating < 1 ? 'text-pink-100' : 'text-pink-500'} mr-2`}>
            <AiFillStar size={iconSize} type="button" id="rating_1" padding={padding} />
          </span>
        </a>
        <a
          onClick={() => {
            setRating(2);
            handleChange(2);
          }}
        >
          <span className={`${rating < 2 ? 'text-pink-100' : ' text-pink-500'} mr-2`}>
            <AiFillStar size={iconSize} type="button" id="rating_2" padding={padding} />
          </span>
        </a>
        <a
          onClick={() => {
            setRating(3);
            handleChange(3);
          }}
        >
          <span className={`${rating < 3 ? 'text-pink-100' : ' text-pink-500'} mr-2`}>
            <AiFillStar size={iconSize} type="button" id="rating_3" padding={padding} />
          </span>
        </a>
        <a
          onClick={() => {
            setRating(4);
            handleChange(4);
          }}
        >
          <span className={`${rating < 4 ? 'text-pink-100' : ' text-pink-500'} mr-2`}>
            <AiFillStar size={iconSize} type="button" id="rating_4" padding={padding} />
          </span>
        </a>
        <a
          onClick={() => {
            setRating(5);
            handleChange(5);
          }}
        >
          <span className={`${rating < 5 ? 'text-pink-100' : ' text-pink-500'} mr-2`}>
            <AiFillStar size={iconSize} type="button" id="rating_5" padding={padding} />
          </span>
        </a>
      </div>
    </>
  );
};

RatingInput.defaultProps = {
  padding: 4,
  iconSize: 60,
  handleChange: () => {},
  initialValue: 0,
};

RatingInput.propTypes = {
  padding: PropTypes.number,
  iconSize: PropTypes.number,
  handleChange: PropTypes.func,
  initialValue: PropTypes.number,
};

export default RatingInput;
