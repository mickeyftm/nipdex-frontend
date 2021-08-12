import React from 'react'
import { Button, Card, CardBody, Heading, Text, Skeleton, CardHeader as UIKitCardHeader } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { useTotalSupply, useBoneTotalSupply } from 'hooks/useTokenBalance'
import { usePriceGboneBusd, usePriceBoneBusd, useTotalLockedValue } from 'state/hooks'
import { getBalanceNumber, getBalanceAmount } from 'utils/formatBalance'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-color : white;
  width : 390px
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const CardHeader = styled(UIKitCardHeader)`
  position: relative;
  padding: 15px;
  min-width: 381px;
`
const TokenCardBody = styled(CardBody)`
  padding: 20px;
`
const TokensStats = () => {
  const { t } = useTranslation()

  const data = useTotalLockedValue()
  const totalSupply = getBalanceAmount(useTotalSupply())
  const totalBoneSupply = getBalanceAmount(useBoneTotalSupply())
  const gbonePrice = usePriceGboneBusd()
  const bonePrice = usePriceBoneBusd()
  const marketCap = totalSupply.multipliedBy(gbonePrice).toNumber()
  const bonemarketCap = totalBoneSupply.multipliedBy(bonePrice).toNumber()
  const tvl = data ? data.total.toNumber().toLocaleString('en-US', { maximumFractionDigits: data.total.toNumber() < 1000 ? 4: 0 }) : null

  return (
    <StyledCakeStats>
      <TokenCardBody>
        <Heading scale="xl" mb="24px">
          {t('Shiba Stats')}
          
        </Heading>
        <Heading scale="xl" mb="24px">
          <Text color="textSubtle" fontSize="20px" bold> {t('Total Value Locked')}</Text>
          {data ? (
            <>
              <Text color="tertiary" mt="15px" fontSize="25px" bold>{`$${tvl}`}</Text>
            </>
          ):(
            <Skeleton height={20} />
          )}
          <Text color="textSubtle"  mt="15px" fontSize="20px" bold> {t('Market Cap')}</Text>
        </Heading>
        {/* <Row>
          <Card mt="2px">
            <CardHeader>
              <Text color="white" fontSize="20px"> {t('Shiba Fantom')}</Text>
            </CardHeader>
            <CardBody p="18px">
              <Text color="tertiary" fontSize="20px">{`$${marketCap}`}</Text>
            </CardBody>
          </Card>
        </Row> */}
        <Row>
          <Card mt="0px">
            <CardHeader>
              <Text color="white" fontSize="20px"> {t('GBone')}</Text>
            </CardHeader>
            <CardBody p="18px">
              {marketCap ? (
                <CardValue color="tertiary" fontSize="20px" prefix="$" decimals={4} value = {marketCap}/>
              ):(
                <Skeleton height={20} />
              )}
            </CardBody>
          </Card>
        </Row>
        <Row>
          <Card mt="2px">
            <CardHeader>
              <Text color="white" fontSize="20px"> {t('Bone')}</Text>
            </CardHeader>
            <CardBody p="18px">
              {bonemarketCap ? (
                <CardValue color="tertiary" fontSize="20px" prefix="$" decimals={4} value = {bonemarketCap}/>
              ):(
                <Skeleton height={20} />
              )}
            </CardBody>
          </Card>
        </Row>
        <Row>
          <Button as="a" href="https://swap.shibafantom.finance/#/swap" variant="eprimary" mt="20px" px={['14px', null, null, null, '20px']}>
            <Text color="primary" bold fontSize="20px">
              {t('Trade Now')}
            </Text>
          </Button>
        </Row>
      </TokenCardBody>
    </StyledCakeStats>
  )
}

export default TokensStats
