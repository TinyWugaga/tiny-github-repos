import { useCallback, useEffect } from 'react'

function useWindowScroll(handler) {

  const onHandleScrollToWindowBottom = useCallback((e) => {
    const windowBottomY = window.innerHeight + window.scrollY;
    const offsetHeight = e.target.body.offsetHeight;

    if (windowBottomY >= offsetHeight) {
      handler()
    }
  }, [handler])

  useEffect(() => {
    window.addEventListener('scroll', onHandleScrollToWindowBottom)
    return () => {
      window.removeEventListener('scroll', onHandleScrollToWindowBottom)
    }
  }, [onHandleScrollToWindowBottom])
}

export default useWindowScroll
