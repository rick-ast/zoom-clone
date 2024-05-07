import { FC } from 'react'

interface Props {
  params: { id: string }
}
const Meeting: FC<Props> = ({ params: { id } }) => {
  return <div>Meeting Room: #{id}</div>
}

export default Meeting
