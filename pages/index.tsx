import type { NextPage } from 'next'
import Button from '@mui/material/Button';
import ResponsiveAppBar from './navbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';




const Home: NextPage = () => {
  return (
    <>
    <ResponsiveAppBar />
    <React.Fragment>
    
    <Container className='box' maxWidth="sm">
      <Box className='box' sx={{ bgcolor: '#cfe8fc', height: '80vh'}} >
      <h1>
        asdasd
      </h1>
      </Box>
    </Container>
    </React.Fragment>
    
    </>
  )
}

export default Home
