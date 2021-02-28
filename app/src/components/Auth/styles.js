import styled from 'styled-components'

const colors = {
  gray: 'gray'
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.gray};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.div`
  width: 400px;
  display: flex;
  margin-bottom: 30px;
`
export const Title = styled.div`
  margin-top: -2px;
  margin-left: 10px;
`
export const Button = styled.button`
  width: 180px;
  margin: 20px;
`
