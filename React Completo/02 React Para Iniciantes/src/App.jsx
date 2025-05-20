// import { useState } from 'react'
import { Header } from './components/Header/Header';
import { Home } from './components/Sections/Home/Home';
import { Produtos } from './components/Sections/Produtos/Produtos';


const App = () => {
  const { pathname } = window.location; //(puxa o caminho do URL)
  console.log(pathname)

  return (
    <div>

      <Header />

      {pathname == '/' ? (
        <Home />
      ) : (
        <Produtos />
      )}
    </div>
  )
}
export default App;