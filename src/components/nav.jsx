import Organization from './organization'
import SearchBox from './searchBox'
import UtilityNav from './utilityNav'
import '../css/nav.css'

async function Nav(props) {

  const response = await fetch('http://localhost:5240/api/user/me' , {method : 'GET' ,
    headers: { 
      'Content-Type': 'application/json'
    },
    credentials: 'include'
    
  } );

  const data = await response.json();
  
    return (
      <nav>
        <Organization {...props.org}/>
        <SearchBox placeholder="Search..."/>
        <UtilityNav {...props.user}/>
      </nav>
    )
}
  
  export default Nav