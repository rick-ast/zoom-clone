'use client'

import Image from 'next/image'

import { cn } from '@/lib/utils'

interface HomeCardProps {
  className?: string
  img: string
  title: string
  description: string
  handleClick?: () => void
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <section
      className={cn(
        'flex min-h-[260px] w-full cursor-pointer flex-col justify-between rounded-[14px] bg-orange-1 px-4 py-6 xl:max-w-[270px]',
        className,
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  )
}

export default HomeCard
