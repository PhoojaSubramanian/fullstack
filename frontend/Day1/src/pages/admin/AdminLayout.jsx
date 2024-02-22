import PropTypes from 'prop-types'
export const AdminLayout = ({children}) => {
  return (
    <div className="admin_container">
        <header>
            {/* sidebar */}
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
AdminLayout.propTypes ={
    children:PropTypes.node.isRequired
}

