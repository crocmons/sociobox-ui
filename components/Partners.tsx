"use client"
import Image from 'next/image'
import React from 'react'
import styled, {keyframes, css} from 'styled-components'

const Clients = () => {

    const row1 = [
        '/adobelogo.png',
        '/amazonlogo.png',
        '/slacklogo.png',
        
      ];
    
      const row2 = [
        '/spotifylogo.png',
        '/xlogo.png',
        '/zoomlogo.png',
        
      ];


  return (
    <>
    <Wrapper>
    <h1 className='mt-8 py-2 font-bold text-5xl text-center text-black'>Our <span className=' text-red-400'>Partners</span></h1>
      <Marquee>
        <MarqueeGroup>
          {row1.map((ele) => (
            <ImageGroup key={ele}>
              <Images>
                <Image src={ele} alt="Partner" width={100} height={100} />
              </Images>
            </ImageGroup>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((ele) => (
            <ImageGroup key={ele}>
              <Images>
                <Image src={ele} alt="Partner" width={100} height={100} />
              </Images>
            </ImageGroup>
          ))}
        </MarqueeGroup>
      </Marquee>
      <Marquee>
        <MarqueeGroup2>
          {row2.map((el) => (
            <ImageGroup key={el}>
              <Images>
                <Image src={el} alt="Partner" width={100} height={100} />
              </Images>
            </ImageGroup>
          ))}
        </MarqueeGroup2>
        <MarqueeGroup2>
          {row2.map((el) => (
            <ImageGroup key={el}>
              <Images>
                <Image src={el} alt="Partner" width={100} height={100} />
              </Images>
            </ImageGroup>
          ))}
        </MarqueeGroup2>
      </Marquee>
    </Wrapper>
  </>
  )
}

export default Clients


const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 25px auto;
`

const Text = styled.div`
    font-size:35px;
    font-weight:500;
    margin-bottom: 10px;
    color:black;
`
const Marquee = styled.div`
  display:flex;
  width: 1200px;
  overflow:hidden;
  user-select:none;
  mask-image: linear-gradient(to right, 
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0),
  
  )
`
const scrollX = keyframes`
   from{
    left:translateX(0);
   }
   to{
    transform: translateX(-100%)
   }
`


const common = css`
flex-shrink:0;
display:flex;
align-items:center;
justify-content:space-around;
white-space:nowrap;
width:100%;
animation: ${scrollX} 30s linear infinite;
`

const MarqueeGroup = styled.div`
    ${common}
`
const MarqueeGroup2 = styled.div`
    ${common}
    animation-direction: reverse;
    animation-delay:-3s;
`

const ImageGroup = styled.div`
    display:grid;
    place-items:center;
    width:clamp(10rem, 1rem + 40vmin, 30rem);
    padding:calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`

const Images = styled.div`
     object-fit:contain;
     width:100%;
     height:100%;
     border-radius:0.5rem;
     aspect-ratio:16/9;
     padding: 5px 20px;
     box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`


