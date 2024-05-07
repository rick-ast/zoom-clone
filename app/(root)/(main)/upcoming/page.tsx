import { FC } from 'react'

import CallList from '@/components/CallList'

const Page: FC = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming Meeting</h1>
      <CallList type="upcoming" />
    </section>
  )
}

export default Page