import React from 'react'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import './form.css'

const cookDetails = () => {
  // const [selectedDate, handleDateChange] = useState(new Date());


  
  return (

    <div className='form-box'>
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 0.2 }}>
            <IconButton size="large" color="inherit">
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component="h1"
            align="left"
            sx={{display: { xs: "none", md: "none" } }}
          >
            Cook's Dashboard
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    
    <Typography
          variant="h3"
          component="h3"
          textColor="neutral.500" fontSize="sm" fontWeight="lg"
          sx={{ textAlign: "left", mt: 10, mb: 5 }}
        >
          Cook Details
    </Typography>


    <form>
      <label className='side-by'>First Name
        <input type="text" placeholder='Enter First Name'/>
      </label>
      <label className='side-by'>Last Name
        <input type="text" placeholder='Enter Last Name' />
      </label>
    </form> 
       <form>
      <label>Phone
        <input type="text"placeholder='Enter Phone No.' />
      </label>
    </form> 
    <form>
      <label>Select Gender:
        <br></br>
        <select className='select'>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
    </form>
    <form>  
      <label>Select Location:
        <br></br>
        <select className='select'>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
          <option value="pune">Pune</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="chennai">Chennai</option>
      </select>
      </label>
       </form>
       <form>  
      <label>Select Cuisine:
        <br></br>
        <select className='select'>
          <option value="indian">Indian</option>
          <option value="chinese">Chinese</option>
          <option value="thai">Thai</option>
          <option value="french">French</option>
          <option value="japanese">Japanese</option>
          <option value="italian">Italian</option>
      </select>
      </label>
       </form>   
       <div>
        <label> Profile picture:
          <input type="file" />
        </label>
       </div>

    <button className='button-save'>Save</button>


   </div> 
  
  )
}

export default cookDetails