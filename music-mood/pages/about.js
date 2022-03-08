import React from 'react'
import { useRouter } from 'next/router'


const about = () => {
    const router = useRouter()
  return (<>
    <div>about</div>
    <button onClick={() => router.push('/')}>
      Click here to read more
    </button>
    </>
  )
}

export default about