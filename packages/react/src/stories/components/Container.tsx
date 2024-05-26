import { css } from '../../../styled-system/css'
import { ReactNode } from 'react'

interface IContainer {
  children: ReactNode | ReactNode[]
}

export const Container = ({ children }: IContainer) => {
  return (
    <div
      className={css({
        display: 'flex',
        flex: 1,
        height: 'screen',
        width: '100%',
        gap: '1rem',
      })}
    >
      {children}
    </div>
  )
}
