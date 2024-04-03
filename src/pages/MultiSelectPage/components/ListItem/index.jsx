import { useState } from 'react';

export const ListItem = ({ item, oznaceni }) => {
  const [selected, setSelected] = useState(false);
  
  const toggleSelected = () => {
    setSelected(!selected);
    oznaceni(selected)
  };



  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={toggleSelected}
    >
      {item.name}
    </div>
  );
};
