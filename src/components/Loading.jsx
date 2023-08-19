import React from 'react'
import useJsonFetch from "../hooks/useJsonFetch"

const Loading = () => {
    const { loading } = useJsonFetch(
        'http://localhost:7070/',
        'loading'
    )
  return (
    <div>
        {loading}
    </div>
  )
}

export default Loading