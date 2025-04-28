// import React from "react";
// import SearchBox from "./searchBox";

// const SearchBox = ({ value, onChange }) => {
//   return (
//     <input
//       type="text"
//       name="query"
//       className="form-control my-3"
//       placeholder="Search..."
//       value={value}
//       onChange={e => onChange(e.currentTarget.value)}
//     />
//   );
// };

// export default SearchBox;

import React from 'react';
const SearchBox = ({ value, onChange }) => {
    return (
        <input
                type="text"
                style={{width:'500px',
                border:'2px solidgray ',
                backgroundColor:'#f0ffff',
                color:'blue',}}
                name="query"
                className="form-control my-3"
                placeholder="Search..."zz
                value={value}
                onChange={e => onChange(e.currentTarget.value)}
             />
      );
}
 
export default SearchBox;