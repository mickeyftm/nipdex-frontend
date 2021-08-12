import React from 'react'
import styled from 'styled-components'
import { Text, ButtonMenu, IconButton, Button, HelpIcon, Link, DiscordIcon, MediumIcon, TelegramIcon, TwitterIcon, useMatchBreakpoints } from '@pancakeswap/uikit'
import FantomLogo from 'assets/images/logo_fantom.svg'
// import FarmImage from 'assets/images/bookmarks/farm.svg'
import { RowFixed , RowBetween } from '../Row'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: "#EFF4F5";
  padding: 16px;
  z-index: 5;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 20px;
  }
`
const SocialRowFixed = styled(RowFixed)`
  width: fit-content;
`
const VersionBar = () => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <Wrapper>
      {!isMobile?
        (<>
          <RowFixed>
            <img src={FantomLogo} alt="fantom-logo" width={200} />
          </RowFixed>
          <SocialRowFixed>
            <IconButton
              as={Link}
              target="_blank"
              href="https://shibafantom.medium.com/"
              ml="10px"
            >
              <MediumIcon color="primary"/>
            </IconButton>
            <IconButton
              as={Link}
              target="_blank"
              href="https://t.me/shibafantom"
              scale="sm"
              ml="10px"
            >
              <TelegramIcon color="primary"/>
            </IconButton>
            <IconButton
              as={Link}
              target="_blank"
              href="https://twitter.com/shibafantom?s=21"
              scale="sm"
              ml="10px"
            >
              <TwitterIcon color="primary"/>
            </IconButton>
            <IconButton
              as={Link}
              target="_blank"
              href="https://discord.com/invite/FAHHXkG6jR"
              scale="sm"
              ml="10px"
            >
              <DiscordIcon color="primary"/>
            </IconButton>
          </SocialRowFixed>
        </>
        )  :  (
        <div/>
      )}
    </Wrapper>
  )
}

export default VersionBar
