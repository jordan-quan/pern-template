import styled from 'styled-components'

export const ParentWrapper = styled.div`
  position: 'relative';
`

export const ScrollAnchor = styled.div`
  position: 'absolute';
  top: 0;
  left: 0;
  ${(props) => {
    if (props.debug) {
      return {
        width: '100px%',
        height: '3px',
        backgroundColor: 'blue'
      }
    }
  }}
`
