import { Box, Image, Input, Stack, Text } from '@chakra-ui/react'
import ProgressBar from './ProgressBar'
import { useState } from 'react'
import Buttons from '../Buttons'
import React from 'react'

const BusinessPhotos = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const uploadedImage = React.useRef(null)
  const imageUploader = React.useRef(null)
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files
    const selectedFilesArray = Array.from(selectedFiles)

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file)
    })

    setSelectedImages((previousImages) => previousImages.concat(imagesArray))
  }
  const handleImageUpload = (e) => {
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      const { current } = uploadedImage
      current.file = file
      reader.onload = (e) => {
        current.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <Box w={['50%', '50%', '50%', '44%']}>
            <ProgressBar businessName="Ichiraku Ramen Arigato" width="60%" />

            <Text
              fontFamily="montserrat"
              fontWeight="500"
              fontSize="14px"
              color="#666670"
              mt="68px"
              mb="32px"
            >
              Welcome to hightable, complete the follow information to get fully
              setup.
            </Text>
          </Box>
          <Text
            fontFamily="montserrat"
            fontWeight="500"
            fontSize="16px"
            color="#666670"
            mb="16px"
          >
            Business Logo
          </Text>
          <Box
            w="100px"
            h="100px"
            borderRadius="10px"
            border="1px solid #FF9916"
            position="relative"
          >
            <Box width="100%" h="100%">
              <label>
                <Box height="100px" borderRadius="10px" color="#ffffff">
                  <Image
                    ref={uploadedImage}
                    width="100%"
                    height="100%"
                    borderRadius="10px"
                  />
                </Box>
                <Box display="none">
                  <input
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    type="file"
                    name="images"
                    multiple={false}
                    accept="image/png , image/jpeg, image/webp"
                  />
                </Box>
              </label>
            </Box>
            {/* <Image src="./coffee.png" w="100%" h="100%" /> */}
            <Box
              h="29px"
              w="29px"
              bg="#0055FF"
              borderRadius="10px"
              position="absolute"
              left="90%"
              bottom="-15%"
            ></Box>
          </Box>
        </Box>
        <Box mt="94px">
          <Text
            fontFamily="montserrat"
            fontWeight="500"
            fontSize="16px"
            color="#666670"
            mb="16px"
            ml={['8%', '8%', '0%', '0%']}
          >
            Photos of your business
          </Text>
          <Box
            display={{
              sm: 'flex',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'flex',
            }}
            flexDirection={{
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
              base: 'column',
            }}
            alignItems="center"
          >
            <Box ml={['8%', '8%', '0%', '0%']}>
              <Box display="flex" flexWrap="wrap">
                {selectedImages &&
                  selectedImages.map((image, index) => {
                    return (
                      <Box
                        key={image}
                        mr={['20px', '20px', '30px', '30px']}
                        mb="16px"
                      >
                        <Box height="77px" width="152px" display="flex">
                          <Image
                            src={image}
                            alt="upload"
                            w="100%"
                            borderRadius="10px"
                          />
                        </Box>

                        {/* <button
                        onClick={() =>
                          setSelectedImages(
                            selectedImages.filter((e) => e !== image),
                          )
                        }
                      >
                        delete image
                      </button> */}
                        {/* <p>{index + 1}</p> */}
                      </Box>
                    )
                  })}
              </Box>
            </Box>

            <Box>
              <label>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  h="80px"
                  width="158px"
                  bg="#878787"
                  borderRadius="10px"
                  color="#ffffff"
                >
                  +
                  <br />
                  <span>Add New</span>
                </Box>
                <Box display="none">
                  <input
                    onChange={onSelectFile}
                    type="file"
                    name="images"
                    multiple
                    accept="image/png , image/jpeg, image/webp"
                  />
                </Box>
              </label>
            </Box>
            <Box mt="80px" w={['90%', '70%', '60%', '25%']}>
              <Buttons
                type="submit"
                description="Go To Dashboard"
                background="#FF9916"
                color="#ffffff"
                width="100%"
                height="65px"
                fontSize="14px"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default BusinessPhotos
