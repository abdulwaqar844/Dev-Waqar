import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import './style.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SkillSet() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 >Skills I Have</h1>
      <hr />
      <Grid container className="skill-set" spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>HTML</h2>
            <label>90%</label>
            <LinearProgress variant="determinate" value={90} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>CSS</h2>
            <label>80%</label>
            <LinearProgress variant="determinate" value={80} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>JavaScript</h2>
            <label>70%</label>
            <LinearProgress variant="determinate" value={70} />

          </Paper>
        </Grid>
      </Grid>
      <Grid container className="skill-set" spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>React</h2>
            <label>90%</label>
            <LinearProgress variant="determinate" value={90} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>Material UI</h2>
            <label>100%</label>
            <LinearProgress variant="determinate" value={100} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>Gatsby</h2>
            <label>80%</label>
            <LinearProgress variant="determinate" value={80} />

          </Paper>
        </Grid>

      </Grid>
      <Grid container className="skill-set" spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>GraphQL</h2>
            <label>90%</label>
            <LinearProgress variant="determinate" value={90} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>AWS & Netlify Functions</h2>
            <label>100%</label>
            <LinearProgress variant="determinate" value={100} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>FireBase & Surge</h2>
            <label>80%</label>
            <LinearProgress variant="determinate" value={80} />

          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}
