import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const OfferSection = () => {
  return (
    <div>
      <Box
        bg="#EAECEF"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box width="35%">
          <Text
            fontFamily="Montserrat"
            fontSize="30px"
            fontWeight="700"
            color="#000000"
            lineHeight="37px"
            textAlign="center"
            mt="60px"
            mb="40px"
          >
            Get discovered by millions of people ready to pay for your services.
          </Text>
          <Text
            fontFamily="Montserrat"
            fontSize="18px"
            fontWeight="400"
            color="#000000"
            lineHeight="22px"
            textAlign="center"
            mb="73px"
          >
            Get discovered by millions of people ready to pay for your services.
          </Text>
        </Box>
      </Box>
      <Box display="flex">
        <Box bg="#ffffff" w="18%" borderRadius="10px">
          <Box ml="33px">
            <Image src="./check.png" alt="bar" bg="#FF9916" mt="27px" />
            <Text
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight="600"
              color="#030303"
              my="25px"
            >
              90+ million Visitors
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight="400"
              color="#030303"
              width="80%"
              mb="16px"
            >
              Stop wasting time money designing and more other option.
            </Text>
            <Box
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="500"
              color="#FF9916"
              width="60%"
              mb="41px"
            >
              Learn more
            </Box>
          </Box>
        </Box>
        <Box bg="#ffffff" w="18%" borderRadius="10px">
          <Box ml="33px">
            <Image src="./check.png" alt="bar" bg="#FF9916" mt="27px" />
            <Text
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight="600"
              color="#030303"
              my="25px"
            >
              90+ million Visitors
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight="400"
              color="#030303"
              width="80%"
              mb="16px"
            >
              Stop wasting time money designing and more other option.
            </Text>
            <Box
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="500"
              color="#FF9916"
              width="60%"
              mb="41px"
            >
              Learn more
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default OfferSection
