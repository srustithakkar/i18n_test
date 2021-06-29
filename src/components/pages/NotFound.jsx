import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    notFound: {
        padding: '100px 20px',
        textAlign: 'center',
    },
    notFoundTitle: {
        fontWeight: 400,
    },
    notFoundSubTitle: {
        fontWeight: 100,
    },
}));

export const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.notFound}>
            404 Not Found
        </div>
    );
    };
