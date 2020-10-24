// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './List.css';

export const List = ({ items }) => {
  return (
    <div className='list-container'>
      {items.map(item => {
        return (
          <div className='card' key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <div className='card-container'>
              <h4>
                <a href={item.url}>{item.name}</a>
              </h4>
              {item.location && item.location.display_address && (
                <p>
                  {item.location.display_address[0]}
                  <br />
                  {item.location.display_address[1]}
                </p>
              )}
              <p>{item.display_phone}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
