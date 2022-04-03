import { useCallback, useEffect } from 'react'

function useWindowScroll(handler) {

  const onHandleScrollToWindowBottom = useCallback((e) => {
    const windowBottomY = window.innerHeight + window.scrollY;
    const targetHeight = e.target.body.scrollHeight;

    if (windowBottomY >= targetHeight) {
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
