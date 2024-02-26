import "./../../assets/css/lazyload.css"
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import loadingGif from './../../assets/others/load.gif';

const LazyLayout = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback={<img src={loadingGif} alt="Loading" id ="load_ani"/>}>
      <Component {...rest} />
    </Suspense>
  );
};

LazyLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default LazyLayout;
