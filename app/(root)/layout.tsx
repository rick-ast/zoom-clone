import { FC, PropsWithChildren } from 'react'

import StreamVideoProvider from '@/providers/StreamClientProvider'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  )
}

export default Layout
