// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { NavigationToggle } from '../../actions';
// App Bar
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Icons
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// CSS
import './TabNavigation.css';
// Components
import Drawer from './Drawer';

const useStyles = makeStyles(theme => ({
    // App Bar
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}));

const TabNavigation = props => {
    const classes = useStyles();

    return (
        <div className={`${classes.root} navigation`}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        LED Control Panel
                        <EmojiObjectsIcon style={{ marginLeft: '10px' }} />
                    </Typography>
                    <IconButton
                        onClick={() => props.NavigationToggle(true)}
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer>{props.children}</Drawer>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default connect(
    null,
    {
        NavigationToggle
    }
)(TabNavigation);
