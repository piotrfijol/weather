import { useState } from 'react'
import { SearchInput } from './components/SearchInput'
import './App.css'

function App() {
  const [search, setSearch] = useState('');

  const getLocation = (position: GeolocationPosition) => {
    setSearch(position.coords.longitude.toString());
  };

  return (
    <>
      <form>
        <SearchInput 
          onChange={(e) => {
            setSearch(e.currentTarget.value)
          }}
          onLocation={getLocation}
          value={search} 
        />
      </form>
    </>
  )
}

export default App
