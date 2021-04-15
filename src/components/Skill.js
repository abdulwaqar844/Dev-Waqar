import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import './style.css'
export default function SkillSet() {

  return (

    <div >
      <h1 >Skills I Have</h1>
      <div className="skill-container">
        <div className="sub-skill"><h3>HTML</h3>
          <LinearProgress variant="determinate" value={90} />
        </div>
        <div className="sub-skill"><h3>CSS</h3>
          <LinearProgress variant="determinate" value={90} />
        </div>
        <div className="sub-skill"><h3>JavaScript</h3>
          <LinearProgress variant="determinate" value={90} />
        </div><div className="sub-skill"><h3>Python</h3>
          <LinearProgress variant="" value={90} />
        </div>
        <div className="sub-skill"><h3>Gatsby</h3>
          <LinearProgress variant="determinate" value={90} />
        </div><div className="sub-skill"><h3>AWS</h3>
          <LinearProgress  variant="determinate" value={90} />
        </div>
        <div className="sub-skill"><h3>React</h3>
          <LinearProgress variant="determinate" value={90} />
        </div><div className="sub-skill"><h3>NoSQL & SQL</h3>
          <LinearProgress variant="determinate" value={90} />
        </div>

      </div>
     
    </div>
  );
}
