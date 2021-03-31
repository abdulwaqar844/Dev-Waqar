import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SocialIcon from './social-icon'
import Grid from '@material-ui/core/Grid';
import waqarimg from "./../images/waqar-dev.jpg"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "black",
        paddingLeft: 0,
        paddingRight: 0,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <div className="about-item">

                        <h1>Hi , </h1>
                        <h2>I'm a FullStack Developer living in </h2>
                        <h1>
                            <strong> <i>Pakistan</i> </strong>
                        </h1>
                        <br />
                        <h3>
                            I am   Motivated to develop professionally and ready to accept new challenges.
                            I Always Learning New Technologies to meet my client requirments

<SocialIcon />
                        </h3>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img className="profileimg" src={waqarimg} width="300px" height="300px" alt="Profile " />
                </Grid>


            </Grid>
        </div>
    );
}


