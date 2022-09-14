import React from 'react'
import blankProfile from '../media/blank-profile.png';
import Skill from './Skill';

function Wilder({firstName, lastName}) {
  return (

        <article className="card">
          <img src={blankProfile} alt="Jane Doe Profile" />
          <h3>{firstName} {lastName}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4>Wild Skills</h4>
          <ul className="skills">
            <Skill name="JavaScript" numberOfVotes="3"/>
            <Skill name="PHP" numberOfVotes="2"/>            
          </ul>
        </article>
  )
}

export default Wilder