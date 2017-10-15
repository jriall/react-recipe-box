import React from 'react';
import ListItem from '../components/ListItem';

const ListContainer = (props) => {
  const listItems = props.list.map((item, index) => <ListItem item={item} key={index} />);
  return <ul className="list-container">{listItems}</ul>;
};

export default ListContainer;
