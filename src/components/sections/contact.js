
import React from 'react'
import styled from 'styled-components'

const StyledContactContainer = styled.section`
  max-width: 800px;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  height: auto;
  margin: auto;

  h1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: var(--fs-xxxl);
    font-weight: 300;
    color: var(--light);
    }
    h1:before, h1:after{
      content: "";
      flex: 1;
      border-bottom: 1px solid var(--orange);
      margin: auto;
    }
    ::before {
      margin-right: 10px;
    }
    ::after {
      margin-left: 10px;
    }
`

const Contact = () => {
  return (
    <StyledContactContainer>
      <h1 id='contact'>&nbsp;Contact&nbsp;</h1>

    </StyledContactContainer>
  )
}

export default Contact