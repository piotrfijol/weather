import { useState } from 'react'
import { SearchInput } from './components/SearchInput'
import './App.css'

function App() {
  const [search, setSearch] = useState('');

  const getLocation = (position: GeolocationPosition) => {
    setSearch(position.coords.longitude.toString());
  };

  return (
    <div className="container">
      <form>
        <SearchInput 
          onChange={(e) => {
            setSearch(e.currentTarget.value)
          }}
          onLocation={getLocation}
          value={search} 
        />
      </form>
    </div>
  )
}

export default App
