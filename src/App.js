import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import routes from './router';

class App extends React.Component {
  render(){
    return (
		<Switch>
      		{routes.map((route, i) => (
          	<Route key={i} path={route.path} component={route.component} exact />
      		))}
  		</Switch>
  );
  }
}

export default withRouter(App);