import React from 'react';
import {Grid} from '@material-ui/core'


const Section = props => {

    const {titulo, children} = props;

    return (
        <Grid container>
            <Grid item xs={12}>
                <h2>{titulo}</h2>
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    )

}

export default Section; 