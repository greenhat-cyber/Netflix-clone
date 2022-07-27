import React from 'react'
import './App.css'
import{action,originals,Comedy,Horror,Documentaries,Romance} from './Urls'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost urls={originals} title='Netflix Orginals' />
      <RowPost urls={action} title='Actions' isSmall />
      <RowPost urls={Horror} title='Horror' isSmall />
      <RowPost urls={Comedy} title='Comedy' isSmall />
      <RowPost urls={Romance} title='Romance' isSmall />
      <RowPost urls={Documentaries} title='Documentaries' isSmall />
    </div>
  )
}

export default App;
