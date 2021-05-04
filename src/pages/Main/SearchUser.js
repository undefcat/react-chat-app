import { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { searchByName } from '../../store/users'

function SearchUser() {
  const dispatch = useDispatch()
  const inputEl = useRef(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    dispatch(searchByName(query))
  }, [query])

  const [isSearch, setSearch] = useState(false)
  useEffect(() => {
    if (isSearch) {
      inputEl.current.focus()
    }
  }, [isSearch])

  const toggleSearch = useCallback(() => {
    if (isSearch) {
      setQuery('')
    }

    setSearch(!isSearch)
  }, [isSearch, setQuery, setSearch])

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        toggleSearch()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }

  }, [toggleSearch])

  return (
    <div className="search">
      <span className="text">Select an user to start chat</span>
      <input
        className={isSearch ? 'show' : ''}
        onInput={e => setQuery(e.target.value)}
        placeholder="Enter name to search..."
        ref={inputEl}
        type="text"
        value={query}
      />
      <button
        className={isSearch ? 'active' : ''}
        onClick={toggleSearch}
      >
        <i className="fas fa-search" />
      </button>
    </div>
  )
}

export default SearchUser
