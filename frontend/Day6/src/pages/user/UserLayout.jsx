import PropTypes from 'prop-types'
import Navbar from '../../components/ui/user/Navbar'
import Footer from '../../components/ui/user/Footer'
export const UserLayout = ({children}) => {
  return (
    <div className="user_container">
        <header>
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
UserLayout.propTypes ={
    children:PropTypes.node.isRequired
}

