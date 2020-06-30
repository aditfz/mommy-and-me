import React, { useEffect, useRef } from 'react'
import { Paper, Grid } from '@material-ui/core'
import useStyles from './styles/SearchBox.style'
import SearchIcon from '@material-ui/icons/SearchRounded'

interface SearchboxProp {
  setSearchBoxIsOpen: (searchBoxIsOpen: boolean) => void
}
const SearchBox: React.FC<SearchboxProp> = ({setSearchBoxIsOpen}) => {
  const classes = useStyles()
  const searchBoxRef = useRef<HTMLDivElement>(null)

  // componentDidMount
  useEffect(() => {
    const myFunction = (event: MouseEvent) => {
      if (
        
        !searchBoxRef.current!.contains(event.target as Node)
      ) {
        setSearchBoxIsOpen(false)
      }
    }
    document.addEventListener('mousedown', myFunction)
    return () => {  
      document.removeEventListener('mousedown', myFunction)
    }
  }, [searchBoxRef, setSearchBoxIsOpen])

  return (
    <Paper className={classes.rootPaper} ref={searchBoxRef}>
      <Grid
        container
        justify='space-between'
        className={classes.searchBoxTextFielBox}
      >
        <input
          className={classes.searchTextField}
          placeholder='Search ...'
          autoFocus
        />
        <SearchIcon />
      </Grid>
    </Paper>
  )
}
export default SearchBox
