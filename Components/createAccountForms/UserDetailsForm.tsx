import Buttons from '../Buttons'
import TextField from '../TextField'
import { Box, FormLabel, Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React, { useState } from 'react'

const UserDetailsForm = () => {
  // const [email, setEmail] = useState('')
  // const handleChange = (e=> {
  //   setEmail(e.currentTarget.value)
  //   console.log(email)
  // }
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
    },
  })

  return (
    <>
      <div>
        <form>
          <Box>
            <FormLabel
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="14px"
              color="#666670"
            >
              Email Address
            </FormLabel>
            <TextField
              placeholder="Enter email address"
              id="email"
              type="email"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" mt="60px">
            <Box w="46%">
              <FormLabel
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="14px"
                color="#666670"
              >
                First
              </FormLabel>
              <TextField
                height="55px"
                placeholder="Enter First name"
                id="FirstName"
                type="text"
              />
            </Box>
            <Box w="46%">
              <FormLabel
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="14px"
                color="#666670"
              >
                Last Name
              </FormLabel>
              <TextField
                height="55px"
                name="lastName"
                id="lastName"
                type="text"
              />
            </Box>
          </Box>
          <Box mt="12%">
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
    </>
  )
}

export default UserDetailsForm
