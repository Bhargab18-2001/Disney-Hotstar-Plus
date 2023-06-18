import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Component>
        <CTA>
            <CTALogoOne src= "/images/cta-logo-one.svg" />
            <SignUp>
                GET ALL THERE
            </SignUp>
            <Description>
            Disney+ includes almost 300 movies and series with descriptive audio, ranging from new movies like Noelle with Anna Kendrick and Bill Hader, animated classics like The Little Mermaid, and even some older live action films like 1969’s The Love Bug.
            </Description>
            <CTALogoTwo src= "/images/cta-logo-two.png" />
        </CTA>
    </Component>
  )
}

export default Login
 
const Component = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    //padding: 0 calc(3.5vw + 5px);
    //overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: top;


    &:before {
        position: absolute;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        content : "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    
`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }

`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
`