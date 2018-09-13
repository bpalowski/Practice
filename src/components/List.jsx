import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function List(props){
  return (
    <div>
      <hr/>
      {props.list.map((item, index) =>
        <Item names={item.names}
          location={item.location}
          issue={item.issue}
          key={index}/>
      )}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.array
};

export default List;
