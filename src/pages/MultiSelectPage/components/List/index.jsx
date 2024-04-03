import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = ({zmenaOznacenychPolozek}) => {
  const [items, setItems] = useState(null);
  const [cislo, setCislo] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const data = await response.json();
      setItems(data.result);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <p>Loading...</p>;
  }
  
  const pocitat = (jeOznaceny) => {
    const cisloPricteni = jeOznaceny ? - 1 : + 1 
    setCislo(cislo + cisloPricteni)
    zmenaOznacenychPolozek(cislo + cisloPricteni)
  };

  return (
    <div className="list">
      {items.map((item) => (
        
        <ListItem key={item.id} item={item} oznaceni={pocitat} />
    
      ))}
    </div>
  );
};
