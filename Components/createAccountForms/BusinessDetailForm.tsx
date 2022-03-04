import Buttons from '../Buttons'
import TextField from '../TextField'
import { Box, FormLabel, Image, Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React, { useState } from 'react'
const BusinessDetailForm = () => {
  return (
    <div>
      <form>
        <Box mt="-10%">
          <FormLabel
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize="14px"
            color="#666670"
          >
            Business Email Address
          </FormLabel>
          <TextField
            height="55px"
            type="email"
            name="email"
            // onChange={formik.handleChange}
            // value={formik.values.email}
          />
        </Box>
        <Box mt="20px">
          <FormLabel
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize="14px"
            color="#666670"
          >
            Business Name
          </FormLabel>
          <TextField height="55px" type="email" name="email" />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          mt="60px"
        >
          <Box w="46%">
            <FormLabel
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="14px"
              color="#666670"
            >
              Your Password
            </FormLabel>
            <TextField
              type="password"
              width="330px"
              height="55px"
              // onChange={formik.handleChange}
              // value={formik.values.firstName}
            />
          </Box>
          <Box w="46%">
            <FormLabel
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="14px"
              color="#666670"
            >
              Confirm password
            </FormLabel>
            <TextField
              type="password"
              width="330px"
              height="55px"
              name="lastName"
              // value={formik.values.lastName}
              // onChange={formik.handleChange}
            />
          </Box>
        </Box>
        <Box mt="5%">
          <Box display="flex" alignItems="center">
            <Image
              src="/check.png"
              alt="check icon"
              bg="#FF9916"
              width="10px"
              height="10px"
              borderRadius="50%"
            />
            <Text
              fontFamily="montserrat"
              fontSize="12px"
              fontWeight="500"
              color="#666670"
            >
              At least 8 characters
            </Text>
          </Box>
          <Box display="flex" alignItems="center" mb="4px">
            <Image
              src="/check.png"
              alt="check icon"
              bg="#FF9916"
              width="10px"
              height="10px"
              borderRadius="50%"
            />
            <Text
              fontFamily="montserrat"
              fontSize="12px"
              fontWeight="500"
              color="#666670"
            >
              At least one upper case character
            </Text>
          </Box>
          <Box mb="4px" display="flex" alignItems="center">
            <Image
              src="/check.png"
              alt="check icon"
              bg="#FF9916"
              width="10px"
              height="10px"
              borderRadius="50%"
            />
            <Text
              fontFamily="montserrat"
              fontSize="12px"
              fontWeight="500"
              color="#666670"
            >
              At least one lower case character
            </Text>
          </Box>
          <Box mb="4px" display="flex" alignItems="center">
            <Image
              src="/check.png"
              alt="check icon"
              bg="#FF9916"
              width="10px"
              height="10px"
              borderRadius="50%"
            />
            <Text
              fontFamily="montserrat"
              fontSize="12px"
              fontWeight="500"
              color="#666670"
            >
              At least one numeric character
            </Text>
          </Box>
          <Box mb="4px" display="flex" alignItems="center">
            <Image
              src="/check.png"
              alt="check icon"
              bg="#FF9916"
              width="10px"
              height="10px"
              borderRadius="50%"
            />
            <Text
              fontFamily="montserrat"
              fontSize="12px"
              fontWeight="500"
              color="#666670"
            >
              At least one upper case character
            </Text>
          </Box>
        </Box>

        <Box mt="5%">
          <Buttons
            type="submit"
            description="Proceed"
            background="#FF9916"
            width="318px"
            height="65px"
            fontSize="14px"
          />
        </Box>
      </form>
    </div>
  )
}

export default BusinessDetailForm
