import { useState } from "react";

interface ListGroupProps{
    items: string[];
    heading: string;

    onSelectitem: (item: string) => void;
}

function ListGroup({items, heading, onSelectitem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);



  const getMessage = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} 
          onClick={ () => {setSelectedIndex(index);
          onSelectitem(item);}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
