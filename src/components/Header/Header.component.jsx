import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import SearchBox from '../SearchBox/SearchBox.component'
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser} from '../../redux/user/user.selectors'
import './Header.styles.scss'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          searchField: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
      }
      onSubmit=()=>{
        this.props.history.push(`/search/${this.state.searchField}`)
      }
    render(){
        const { currentUser } = this.props
        return(
            <nav className='bg-black-70 fixed w-100 top-0 z-1 h3 items-center same-height justify-between flex-row' >
                <Link className='yellow f2 courier' to={'/'}><i className="fa fa-video-camera" aria-hidden="true"></i> Movie App</Link>
                <SearchBox searchChange={this.onSearchChange} onSubmit={this.state.searchField.length>0?this.onSubmit:()=>{}}/>
                {currentUser?<div className='pointer' onClick={()=> auth.signOut()}> SIGN OUT</div>:<Link className='yellow' to='/signin'> SIGN IN </Link>}
            </nav>
        )
    }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(Header))