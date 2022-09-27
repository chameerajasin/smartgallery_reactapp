import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Grid } from '@mui/material'

function Cart({ images, changeImageInCart }) {
  const qty = images.length
  const itemprice = 5.99
  const total = itemprice * qty

  return (
    <Grid
      container
      direction='column'
      alignItems='stretch'
      justifyContent='center'
    >
      <Grid container justifyContent='center'>
        <h1>Check out</h1>
      </Grid>

      {images.map((image) => (
        <Grid
          container
          justifyContent='flex-start'
          alignItems='center'
          key={image?.id}
        >
          <Grid item xs={1} justifyContent='center' alignItems='center'>
            <DeleteIcon
              sx={{ cursor: 'pointer' }}
              style={{
                height: '30px',
                width: '100px',
              }}
              onClick={() => changeImageInCart(image?.id)}
            />
          </Grid>
          <Grid
            item
            xs={9}
            alignItems='center'
            justifyContent='center'
            marginLeft='10px'
          >
            <img
              style={{ height: '200x', width: '200px' }}
              src={image?.url}
              alt={image?.url}
              key={image?.id}
            />
          </Grid>
          <Grid item xs={1}>
            ${itemprice}
          </Grid>
        </Grid>
      ))}
      <Grid container justifyContent='flex-end' alignItems='center'>
        <Grid
          container
          xs={1}
          justifyContent='flex-end'
          marginRight='20px'
          alignItems='center'
        >
          <h2>Total</h2>
        </Grid>
        <Grid item xs={2}>
          <h2>:${total}</h2>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' alignContent='flex' xs={12}>
        <Button
          variant='outlined'
          sx={{ color: 'black', borderColor: 'black', border: 'solid' }}
        >
          Place Order
        </Button>
      </Grid>
    </Grid>
  )
}

export default Cart
