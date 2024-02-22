import PropTypes from 'prop-types'
import {Suspense } from 'react';
const LazyLayout = ({component: Component, ...rest}) => {
  return (
        <Suspense fallback="Loading.......">
            <Component {...rest}/>
        </Suspense>
  )
}
LazyLayout.propTypes = {
    component:PropTypes.elementType.isRequired
}
export default LazyLayout