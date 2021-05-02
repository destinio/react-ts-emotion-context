import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`

export const FlexDiv = styled.div`
  display: flex;
`

export const FlexCenterDiv = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
`

export const FlexCenterColumnDiv = styled(FlexCenterDiv)`
  flex-direction: column;
`

export const FlexSpaceBetweenDiv = styled(FlexDiv)`
  justify-content: space-between;
  align-items: center;
`