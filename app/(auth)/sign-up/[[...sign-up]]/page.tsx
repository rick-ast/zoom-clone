import { SignUp } from '@clerk/nextjs'
import { FC } from 'react'

const Page: FC = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  )
}

export default Page
