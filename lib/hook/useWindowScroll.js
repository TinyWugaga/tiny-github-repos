import { useEffect } from 'react'

function useWindowScroll(handler) {
  useEffect(() => {
    window.addEventListener('scroll', handler)
    window.addEventListener('wheel', (e) => {
      console.log({e, scroll:window.scrollY})
    })
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [handler])
}

export default useWindowScroll
