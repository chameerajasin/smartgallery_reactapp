import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  images: [],
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    addToGallery: (state, action) => {
      //action payload is the array of image objects
      state.images = [...action.payload]
      
    },
    changeImageFavorite: (state, action) => {
      //action payload is the image id
      state.images = state.images.map((image) => {
        if (image.id === action.payload) {
          return { ...image, isFavorite: !image.isFavorite }

          return image
        }
        return image
      })
    },
    changeImageInCart: (state, action) => {
      //action payload is the image id
      state.images = state.images.map((image) => {
        if (image.id === action.payload) {
          return { ...image, isImageInCart: !image.isImageInCart }
        }
        return image
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToGallery, changeImageFavorite, changeImageInCart } =
  gallerySlice.actions

export default gallerySlice.reducer
