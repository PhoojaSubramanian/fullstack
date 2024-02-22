import PropTypes from 'prop-types'
export const UserLayout = ({children}) => {
  return (
    <div className="user_container">
        <header>
            {/* navbar */}
        </header>
        <main>
            {children}
        </main>
        <footer>
            {/* footer */}
        </footer>
    </div>
  )
}
UserLayout.propTypes ={
    children:PropTypes.node.isRequired
}

