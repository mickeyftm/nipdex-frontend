import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Text, Flex, LinkExternal, Skeleton } from '@pancakeswap/uikit'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  swapAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
  isTokenOnly?: boolean
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
  margin: auto;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  swapAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
  isTokenOnly,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      {!removed && !isTokenOnly && (
        <StyledLinkExternal color="tertiary" href={addLiquidityUrl}>{t('Get %symbol%', { symbol: lpLabel })}</StyledLinkExternal>
      )}
      {!removed && isTokenOnly && (
        <StyledLinkExternal color="tertiary" href={swapAddress}>{t('Get %symbol%', { symbol: lpLabel })}</StyledLinkExternal>
      )}
      <StyledLinkExternal color="tertiary" href={bscScanAddress}>{t('View Contract')}</StyledLinkExternal>
      <StyledLinkExternal color="tertiary" href={infoAddress}>{t('See Pair Info')}</StyledLinkExternal>
    </Wrapper>
  )
}

export default DetailsSection
