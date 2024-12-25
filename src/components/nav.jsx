import Organization from './organization'
import SearchBox from './searchBox'
import UtilityNav from './utilityNav'
import '../css/nav.css'

function Nav(props) {

    return (
      <nav>
        <Organization {...props.org}/>
        <SearchBox placeholder="Search..."/>
        <UtilityNav {...props.user}/>
      </nav>
    )
}
  
  export default Nav