import React from 'react'
import useJsonFetch from "../hooks/useJsonFetch"

const Error = () => {
    const { error } = useJsonFetch(
        'http://localhost:7070/',
        'error'
    )
  return (
    <div>
        {error}
    </div>
  )
}

export default Error