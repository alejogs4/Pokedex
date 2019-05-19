import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ total }) => (
  <div className='pagination'>
    {[...new Array(Math.round(total / 50))].map((_, i) => (
      <Link to={`/pokemons/${i + 1}`} key={i} onClick={() => window.scrollTo(0, 0)}>
        <span>{i + 1}</span>
      </Link>
    ))}
  </div>
)

export default Pagination