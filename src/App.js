import { Router } from './router/Router'
import { createGlobalStyle } from 'styled-components'
import { GlobalState } from './global/GlobalState';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family:Open-Sans, Helvetica, sans-serif;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
