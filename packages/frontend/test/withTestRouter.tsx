import { NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/next-server/lib/router-context'

export function withTestRouter(tree: React.ReactElement, router: Partial<NextRouter> = {}) {
  const {
    basePath = '',
    route = '',
    pathname = '',
    query = {},
    asPath = '',
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    isReady = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
  } = router

  return (
    <RouterContext.Provider
      value={{
        basePath,
        route,
        pathname,
        query,
        asPath,
        push,
        replace,
        reload,
        back,
        prefetch,
        beforePopState,
        isFallback,
        isReady,
        events,
      }}
    >
      {tree}
    </RouterContext.Provider>
  )
}
