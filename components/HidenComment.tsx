import React, { PropsWithChildren } from 'react'

type Props = {
  
}

const HidenComment: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return (
    <span aria-hidden="true" dangerouslySetInnerHTML={{__html: `<!-- ${children} -->`}}></span>
  )
}

export default HidenComment