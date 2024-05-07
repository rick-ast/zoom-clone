import { FC, PropsWithChildren } from 'react'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          {children}
        </section>
      </div>
    </main>
  )
}

export default Layout
