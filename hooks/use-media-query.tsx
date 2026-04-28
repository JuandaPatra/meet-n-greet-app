import * as React from "react"

export function useMediaQuery(query: string) {
  // Initialize state with the current match status immediately
  const [value, setValue] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return false // Default for SSR
  })

  React.useEffect(() => {
    const result = window.matchMedia(query)
    
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches)
    }

    result.addEventListener("change", onChange)
    
    // Remove the synchronous setValue(result.matches) from here
    
    return () => result.removeEventListener("change", onChange)
  }, [query])

  return value
}
