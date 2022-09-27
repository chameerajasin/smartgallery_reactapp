import React from 'react'

import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  ListItemSecondaryAction,
} from '@mui/material'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const Home = ({
  isLoading,
  images,
  changeImageFavorite,
  changeImageInCart,
}) => {
  const srcSetStyle = (image, size, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    }
  }

  if (isLoading) {
    return <h2>Loading</h2>
  }

  if (images?.length === 0 && !isLoading) {
    return <h2>No Images</h2>
  }

  if (images?.length > 0) {
    return (
      <ImageList variant='quilted' cols={5} rowHeight={121}>
        {images?.map((image) => (
          <ImageListItem
            key={image?.id}
            cols={image.cols || 1}
            rows={image.rows || 1}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                '& .addIcon': {
                  opacity: 100,
                },
                '& .favoriteIcon': {
                  opacity: 100,
                },
              },
            }}
          >
            <img
              {...srcSetStyle(image.url, 121, image.rows, image.cols)}
              alt={image.url}
              loading='lazy'
            />
            <ImageListItemBar
              sx={{
                background: 'transparent',
                top: '5%',
              }}
              position='top'
              actionPosition='left'
              actionIcon={
                <>
                  <IconButton
                    sx={{ color: 'red' }}
                    onClick={() => changeImageFavorite(image?.id)}
                  >
                    {image.isFavorite ? (
                      <FavoriteIcon
                        className='favoriteIcon'
                        sx={{ opacity: 0 }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        className='favoriteIcon'
                        sx={{ opacity: 0 }}
                      />
                    )}
                  </IconButton>
                  <ListItemSecondaryAction>
                    <IconButton
                      sx={{
                        color: 'lightblue',
                        opacity: 1,
                      }}
                      onClick={() => changeImageInCart(image?.id)}
                    >
                      {image.isImageInCart ? (
                        <ShoppingCartIcon
                          className='addIcon'
                          sx={{
                            color: 'lightblue',
                            opacity: 1,
                          }}
                        />
                      ) : (
                        <AddCircleOutlineIcon
                          className='addIcon'
                          sx={{
                            color: 'ligtblue',
                            opacity: 0,
                          }}
                        />
                      )}
                    </IconButton>
                  </ListItemSecondaryAction>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    )
  }
}

export default Home
