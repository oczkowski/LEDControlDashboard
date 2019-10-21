// React
import React from 'react';
import TabNavigation from './navigation/TabNavigation';
// React Router Dom
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from '../routerHistory';
// Drawer
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// Icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
// Material UI
import Container from '@material-ui/core/Container';
// Components
import Dashboard from './dashboard';

const App = () => {
    return (
        <>
            <Router history={history}>
                <TabNavigation>
                    <Link to="/">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </Link>
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
