import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LeftMenu from './components/LeftMenu/LeftMenu'
import routes from './router';

class App extends React.Component {
  render(){
    return (
		<Fragment>
		<Switch>
      		{routes.map((route, i) => (
          	<Route key={i} path={route.path} component={route.component} exact />
      		))}
  		</Switch>
		  </Fragment>
  );
  }
}

export default withRouter(App);