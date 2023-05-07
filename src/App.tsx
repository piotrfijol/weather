import { useState } from 'react'
import { SearchInput } from './components/SearchInput'
import './App.css'

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <form>
        <SearchInput 
          onChange={(e) => {
            setSearch(e.currentTarget.value)
          }}
          value={search} 
        />
      </form>
    </>
  )
}

export default App
