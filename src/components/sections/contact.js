
import React from 'react'
import styled from 'styled-components'


const StyledContactContainer = styled.section`
  /* display: flex; */
  flex-direction: column;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
  height: auto;
  margin: auto;

  h1 {
    display: flex;
    flex-direction: row;
    font-size: var(--fs-xxxl);
    font-weight: 300;
    color: var(--light);
    }
    h1:before, h1:after{
      content: "";
      flex: 1 1;
      border-bottom: 1px solid var(--orange);
      margin: auto;
    }
    ::before {
      margin-right: 10px;
    }
    ::after {
      margin-left: 10px;
    }

    h2 {
      padding-top: 40px;
      display: flex;
      justify-content: center;
      color: var(--light);
    }

    p {
      color: var(--light-grey);
      font-size: var(--fs-lg);
      line-height: 25px;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 45px;
      margin: 20px 0 0 7px;
      color: var(--orange);
      text-decoration: none;
      border: 1px solid var(--orange);
      border-radius: 2px;
      transition: all 0.3s ease 0s;
      cursor: pointer;
      :hover {
        box-shadow: inset 0 0 0px 1px var(--orange);
        letter-spacing: 0.5px;
      }
      span {
        text-decoration: none;
        font-family: var(--font-mono);
        font-size: var(--fs-sm);
      }
    }
`


const Contact = () => {
  return (
    <StyledContactContainer>
      <div>
        <h1 id='contact'>&nbsp;Contact&nbsp;</h1>
      </div>
      <div className='content'>
        <h2 className='medium-heading'>Get in touch</h2>
        <p>I&apos;m currently looking for work experience within web development so feel free to get in touch if you want to chat, my inbox is always open.</p>
        <a href="mailto:rob.wilhelmsson@gmail.com">
          <span>Contact</span>
        </a>
      </div>
    </StyledContactContainer>
  )
}

export default Contact