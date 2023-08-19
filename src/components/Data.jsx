import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'

const Data = () => {
    const { data } = useJsonFetch(
        'http://localhost:7070/',
        'data'
    )
  return (
    <div>
        {JSON.stringify(data)}
    </div>
  )
}

export default Data