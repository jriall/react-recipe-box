import React from 'react';
import ListItem from '../components/ListItem';

const ListContainer = (props) => {
  const listItems = props.list.map(a => <ListItem item={a} />);
  return <ul className="list-container">{listItems}</ul>;
};

export default ListContainer;