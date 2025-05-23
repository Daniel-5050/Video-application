import React from 'react';


 
const ListGroup = (props) => {

        const {
          items,
          textProperty,
          valuePropert,
          onItemSelect,
          selectedItem
           } = props;

    return <ul className="list-group">
    
    
    { items.map(item =><li  onClick={ () => onItemSelect(item) }
     key={item[valuePropert]} 
    className={ item === selectedItem ? "list-group-item active" :'list-group-item'}>{item[textProperty]}</li>)}
    
  </ul>;
};


ListGroup.defaultProps ={
  textProperty:'name',
  valuePropert:"_id"
}
 
export default ListGroup;