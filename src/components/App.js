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

const App = () => {
    return (
        <>
            <Router history={history}>
                <TabNavigation>
                    {[
                        { to: '/', text: 'Dashboard', icon: 'home' },
                        {
                            to: '/statistics',
                            text: 'Statistics',
                            icon: 'equalizer'
                        }
                    ]}
                </TabNavigation>
                <Container>
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                    </Switch>
                </Container>
            </Router>
        </>
    );
};

export default App;
