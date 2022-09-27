import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useQuery } from 'react-query'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'

import { useDispatch, useSelector } from 'react-redux'
import {
  addToGallery,
  changeImageFavorite,
  changeImageInCart,
} from './store/slices/gallerySlice'

import axios from 'axios'

import { imageContainerRowColData } from './utils/constants'

function App() {
  const dispatch = useDispatch()
  const galleryImages = useSelector((state) => state.gallery.images)
  const cartImages = galleryImages.filter(
    (image) => image.isImageInCart === true
  )

  const { isLoading, data } = useQuery(
    'gallerydata',
    () => {
      return axios.get(
        'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
      )
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  const imagePreProcess = (imageList) => {
    return imageList.map((image, index) => {
      return {
        ...image,
        ...imageContainerRowColData[index % imageContainerRowColData.length],
        isImageInCart: false,
      }
    })
  }

  useEffect(() => {
    console.log('fetching')
    if (data?.data) {
      dispatch(addToGallery(imagePreProcess(data?.data)))
    }
  }, [data?.data])

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                isLoading={isLoading}
                images={galleryImages}
                changeImageFavorite={(id) => dispatch(changeImageFavorite(id))}
                changeImageInCart={(id) => dispatch(changeImageInCart(id))}
              />
            }
          />
          <Route path='/cart' element={<Cart images={cartImages}    changeImageInCart={(id) => dispatch(changeImageInCart(id))}/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
