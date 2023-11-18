import React from 'react';

export function useResizeWindow(){
  const [isSmallScreen, setIsSmallScreen] = React.useState(false)

  React.useEffect(() => {
    function checkScreenSize() {
      setIsSmallScreen(window.innerWidth <= 1024)
    }
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  return {
    isSmallScreen,
  }
}