declare module '~react-pages' {
  import type { RouteObject } from 'react-router'
  const routes: RouteObject[]
  export default routes
}

declare module 'virtual:generated-pages-react' {
  import type { RouteObject } from 'react-router'
  const routes: RouteObject[]
  export default routes
}

declare module '*.svg' {
  const content: any
  
  export default content
}

declare module '*.png' {
  const content: any

  export default content
}
