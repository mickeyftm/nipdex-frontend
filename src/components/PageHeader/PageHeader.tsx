import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, Text, Flex } from '@pancakeswap/uikit'

export interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  bookmark?: any
}

interface PageHeaderBookmarkProps{
  bookmark?: any
}

const StyledPageHeader = styled.div<PageHeaderBookmarkProps>`
  background-image: url(${({ bookmark }) => bookmark});
  background-repeat: no-repeat;
  background-position: top right;
  padding: 35px 24px;
  width: 100%
`

const Details = styled.div`
  flex: 1;
`

const PageHeader = ({ title, description, children, bookmark }: PageHeaderProps) => {
  return (
    <StyledPageHeader bookmark={bookmark}>
      <Flex alignItems="center">
        <Details>
          <Heading mb="8px" scale="xl">{title}</Heading>
          {description && (
            <Text color="textSubtle" fontSize="20px">
              {description}
            </Text>
          )}
        </Details>
      </Flex>
      {children && <Text mt="45px">{children}</Text>}
    </StyledPageHeader>
  )
}

export default PageHeader
