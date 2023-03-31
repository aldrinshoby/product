import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Box> 
    <AppBar>
        <Toolbar>
            <Typography>product</Typography>
            <Button color='inherit' variant="contained"><Link to='/'>view</Link></Button>
            <Button color='inherit' variant="contained"><Link to='/Add'>Add</Link></Button>
        </Toolbar>
    </AppBar>
    </Box>
      )
}

export default Navbar
