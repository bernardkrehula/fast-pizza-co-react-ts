import './index.css'

const SearchBar = ({placeholder}) => {
    return(
        <input className='search-bar' type='text' placeholder={placeholder}/>
    )
}
export default SearchBar;