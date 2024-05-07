import { SignIn } from '@clerk/nextjs'
import { FC } from 'react'

const Page: FC = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  )
}

export default Page
