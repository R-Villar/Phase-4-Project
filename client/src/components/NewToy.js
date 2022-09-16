import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



function NewToy(){
  // this is the form we never used
    const [formData, setFormData] = useState({
        // id:,
        name: '',
        price: 0,
        brand: '',
        image: '',
        description: ''
      })
console.log(formData)

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

      // console.log(formData)
  
    // function onSubmit(e){
    //     e.preventDefault()


        // fetch('/toys',{
        //     method:'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body:JSON.stringify(formData)
        // })
        // .then(res => {
        //     if(res.ok){
        //     res.json().then(addReviews)

        //     } else {
        //     //Display errors
        //     res.json().then((json) => setErrors(json.errors));
        //     }
        // })
        

    return(
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Brand"
        value={formData.brand}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Image"
          value={formData.image}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Description"
          value={formData.description}
          onChange={handleChange}
        />
        </div>
        </Box>
    )

}

export default NewToy;