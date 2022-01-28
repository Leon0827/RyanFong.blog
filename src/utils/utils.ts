export const throttle = (fn: any, delay: number | undefined) => {
  let canOperate = true
  return () => {
    if (!canOperate) {
      return false
    }
    canOperate = false
    setTimeout(() => {
      fn()
      canOperate = true
    }, delay)
  }
}

export const animateSwitch = () => {
  const root = document.getElementById('blog-body')
  if (!root?.classList.contains('transitionPage')) {
    root?.classList.add('transitionPage')
  }
  if (document.readyState == 'complete') {
    setTimeout(() => {
      root?.classList.remove('transitionPage')
    }, 1000)
  }
}