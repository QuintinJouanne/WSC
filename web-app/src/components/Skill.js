import React from 'react'

function Skill({ name, numberOfVotes }) {
  return (
            <li>
              {name}
              <span className="votes">{numberOfVotes}</span>
            </li>
  )
}

export default Skill