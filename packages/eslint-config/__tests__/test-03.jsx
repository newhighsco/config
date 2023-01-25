import { ContentContainer, Landmark, SmartLink } from '@newhighsco/chipset'
import Link from 'next/link'
import React from 'react'

import { LogoLockup } from '../LogoLockup'
import theme from './theme.module.scss'

const Header = () => (
  <>
    <Landmark id="top">Top of page</Landmark>
    <ContentContainer as="header" role="banner" fullWidth gutter theme={theme}>
      <Link href="/" passHref>
        <SmartLink>
          <LogoLockup />
          <p>{theme?.foo?.bar}</p>
        </SmartLink>
      </Link>
    </ContentContainer>
  </>
)

Header.propTypes = {}

export default Header
export { Header }
