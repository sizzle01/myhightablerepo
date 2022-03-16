import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Buttons from '../components/buttons'
import ProgressBar from './progressBar'
import Mock from '../../Mock'

const confirmationImage = './coffee.png'

const SetupConfirmation = () => {
  return (
    <div>
      <Box ml={['5%', '10%', '0%', '0%']}>
        <ProgressBar businessName="Ichiraku Ramen Arigato" width="100%" />
      </Box>
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
          base: 'column',
        }}
        alignItems={{
          sm: 'center',
          base: 'center',
        }}
      >
        <Box
          borderRadius="10px"
          border="1px solid #FF9916"
          w={['90%', '80%', '64%', '34%']}
        >
          <Image src={confirmationImage} alt="business image" />
        </Box>
        <Text
          fontFamily="montserrat"
          fontWeight="400"
          fontSize={['14px', '18px', '20px', '24px']}
          lineHeight="162%"
          color="#666670"
          mt="37px"
          w={['90%', '70%', '60%', '45%']}
        >
          Welcome to hightable, your information is being verified and your
          account will be live in 2 to 24 hours.
        </Text>

        <Box mt="80px" w={['90%', '70%', '60%', '45%']}>
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
    </div>
  )
}

export default SetupConfirmation
