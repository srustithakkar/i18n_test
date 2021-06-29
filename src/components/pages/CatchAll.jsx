// DO NOT CHANGE THIS PAGE
import React, { useState, useEffect } from 'react';
import { BuilderComponent,  builder } from '@builder.io/react';

export const CatchAll = (props) => {
    const {location} = props;
    const [pageJson, setPage] = useState()

    useEffect(() => {
        builder.get('page', { url: location.pathname })
            .promise().then(setPage)
    }, [location.pathname])

    return (
        <>
            {pageJson === undefined
                ? <div>...loading</div>: (
                    <BuilderComponent
                        model="page"
                        content={pageJson}
                    />
            )}
        </>
    );
};
