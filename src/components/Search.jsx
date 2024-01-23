
import { MdSearch } from "react-icons/md"


const Search = ({handleSearchText}) => {


  return (
    <div className="search">
     <MdSearch className="search-icon" size='1.3em'/>
     <input 
          type="text"
          placeholder="type to search...." 
          onChange={(e) => handleSearchText(e.target.value)} 
           />
    </div>
  )
}

export default Search
