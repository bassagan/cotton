import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@material-ui/core';
import { useStylesHeader } from '../styles/styles';

function Header({ user }) {
    const classes = useStylesHeader();
    const initials = user ? user.slice(0, 2).toUpperCase() : '';

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Cotton
                </Typography>
                <Avatar>{initials}</Avatar>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
