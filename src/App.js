import './builder-settings';
import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import { CatchAll } from './components/pages/CatchAll.jsx';
import {   Switch } from 'react-router-dom';

const App = () => {
    const classes = useStyles();

    return (
            <div className={classes.container}>
                <div>{/* put custom components here */}</div>
                <Switch>
                    <CatchAll />
                </Switch>
            </div>
        );
};

const useStyles = makeStyles(theme => ({
    link: {
        color: '#555',
        margin: '0 10px',
    },
    container: {
        minHeight: 'calc(100vh - 150px)',
    },
}));


export default App