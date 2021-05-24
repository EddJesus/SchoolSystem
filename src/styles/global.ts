import { createGlobalStyle } from 'styled-components'
import RalewayFont from './fonts'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body {
		${RalewayFont}
    background: ${props => props.theme.colors.background};

    height: 100%;
    font: 1.6rem Raleway, sans-serif;

		h1 {
			color: ${props => props.theme.colors.heading};
			font-size: 3.2rem;
		}

		p{
			color: ${props => props.theme.colors.text};
			font-size: 1.6rem;
			line-height: 2.3rem;
		}
  }

  @media (max-width: 768px){
    html{
      font-size: 50%;
    }
  }

  @media (max-width: 830px){
    html{
      font-size: 58%;
    }
  }

`
