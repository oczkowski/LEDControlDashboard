// React
import React from 'react';
import TabNavigation from './navigation/TabNavigation';
// React Router Dom
import { Router, Route, Switch } from 'react-router-dom';
import history from '../routerHistory';
// Material UI
import Container from '@material-ui/core/Container';
// Components
import Dashboard from './dashboard';
import Setup from './dashboard/setup';
import Control from './dashboard/control';
// Socket IO
import socket from '../socket.io';
const SocketContext = React.createContext(socket);

const App = () => {
    return (
        <SocketContext.Provider>
            <Router history={history}>
                <TabNavigation>
                    {[{ to: '/', text: 'Dashboard', icon: 'home' }]}
                </TabNavigation>
                <Container>
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route
                            path="/setup/:device_name"
                            exact
                            component={Setup}
                        />
                        <Route
                            path="/control/:device_name"
                            exact
                            component={Control}
                        />
                    </Switch>
                </Container>
            </Router>
        </SocketContext.Provider>
    );
};

export default App;
