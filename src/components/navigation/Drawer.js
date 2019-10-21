// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { NavigationToggle } from '../../actions';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// CSS
import './Drawer.css';

const useStyles = makeStyles({
    list: {
        width: 300,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    bottomItems: {
        marginBottom: 'auto',
        justifyContent: 'bottom'
    },
    topItems: {
        flexGrow: '1'
    }
});

const Drawer = props => {
    const classes = useStyles();

    const toggleDrawer = open => event => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        props.NavigationToggle(open);
    };

    const list = items => (
        <div
            className={`${classes.list} navlist`}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <div className={classes.topItems}>
                <List>{items}</List>
            </div>
            <div className={classes.bottomItems}>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </div>
        </div>
    );

    return (
        <div>
            <SwipeableDrawer
                anchor="right"
                open={props.toggle}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list(props.children)}
            </SwipeableDrawer>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        toggle: state.navigation.toggle
    };
};

export default connect(
    mapStateToProps,
    {
        NavigationToggle
    }
)(Drawer);
