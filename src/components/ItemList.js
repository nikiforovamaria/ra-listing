import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function ItemList(props) {
  const { item } = props;
  const title = item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;
  const currency = {
    USD: '$',
    EUR: '€',
  };
  let classQuantity = 'level-high';

  if (item.quantity <= 10) {
    classQuantity = 'level-low';
  } else if (item.quantity <= 20) {
    classQuantity = 'level-medium';
  }

  const className = classnames('item-quantity', classQuantity);

  return (
      <>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{currency[item.currency_code] ? currency[item.currency_code] : item.currency_code} {item.price}</p>
          <p className={className}>{item.quantity} left</p>
        </div>
      </>
  );
}

ItemList.propTypes = {
  item: PropTypes.object,
};
