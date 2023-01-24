import React, { type FC } from 'react'
import Link from 'next/link'
import { ContentContainer, Landmark, SmartLink } from '@newhighsco/chipset'
import { LogoLockup } from '../LogoLockup'

import theme from './theme.module.scss'

interface HeaderProps {
  title?: string
}

const Header: FC<HeaderProps> = ({ title }) => (
  <>
    <Landmark id="top">Top of page</Landmark>
    <ContentContainer as="header" role="banner" fullWidth gutter theme={theme}>
      <Link href="/" passHref>
        <SmartLink>
          <LogoLockup />
          <p>{theme?.foo?.bar}</p>
          <p>{title}</p>
        </SmartLink>
      </Link>
    </ContentContainer>
  </>
)

Header.propTypes = {}

export default Header
export { Header }
