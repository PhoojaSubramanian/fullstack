import PropTypes from 'prop-types'
import AdminSidebar from './AdminSidebar'
import './../../assets/css/adminlayout.css'
export const AdminLayout = ({children}) => {
  return (
    <div className="admin_container">
        <header>
            <AdminSidebar/>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}
AdminLayout.propTypes ={
    children:PropTypes.node.isRequired
}

