import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  background-repeat: no-repeat;
  background-position: bottom 24px center;
  background-size: 90%;
  border-radius: 37px;
  background: white;
  
  margin: 30px 17px 10px 17px;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 87px;
    margin-left : auto;
    margin-right : auto;
    background-repeat: no-repeat;
    background-position: center 420px, 10% 230px, 90% 230px;
    background-size: contain, 266px, 266px;
  }
`

export default Container
