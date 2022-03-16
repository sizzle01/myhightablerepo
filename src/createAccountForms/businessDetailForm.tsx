import Buttons from '../components/buttons'
import TextField from '../components/textField'
import { Box, FormLabel, Image, InputGroup, Text } from '@chakra-ui/react'
import { Formik, useFormik, yupToFormErrors } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { CheckIcon } from '@chakra-ui/icons'

const strength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
const BusinessDetailForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      businessName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email').required('Required'),

      businessName: Yup.string()
        .min(5, 'must be 5 characters or less')
        .required('Required'),

      password: Yup.string()
        .required('Please Enter your password')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'please re-type your password',
        ),
      confirmPassword: Yup.string().test(
        'passwords-match',
        'Passwords must match',
        function (value) {
          return this.parent.password === value
        },
      ),
    }),
    onSubmit: (values) => {
      console.log(formik.values)
    },
  })
  console.log(formik.initialValues.businessName)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box
          display={{
            sm: 'flex',
            md: 'flex',
            lg: 'block',
            xl: 'block',
            base: 'flex',
          }}
          flexDirection={{
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            base: 'column',
          }}
          alignItems="center"
          width="100%"
        >
          <Box
            width={['94%', '90%', '100%', '100%']}
            mt={['0%', '0%', '0%', '-7%']}
          >
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
              id="email"
              placeholder="Business Email "
              // children={
              //   formik.values.email.length < 1 && formik.errors.email ? null : (
              //     <CheckIcon color="white" bg="brand.100" borderRadius="50%" />
              //   )
              // }
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email ? (
              <p style={{ color: 'red' }}>{formik.errors.email}</p>
            ) : null}
          </Box>
          <Box mt="20px" mb="20px" width={['94%', '90%', '100%', '100%']}>
            <FormLabel
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="14px"
              color="#666670"
            >
              Business Name
            </FormLabel>
            <TextField
              placeholder="Business Name"
              height="55px"
              type="text"
              name="businessName"
              id="businessName"
              onChange={formik.handleChange}
              value={formik.values.businessName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.businessName && formik.errors.businessName ? (
              <p style={{ color: 'red' }}>{formik.errors.businessName}</p>
            ) : null}
          </Box>
          <Box
            display="flex"
            flexDirection={{
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
              base: 'column',
            }}
            alignItems="center"
            justifyContent="space-between"
            w={['100%', '100%', '100%', '100%']}
            width="100%"
          >
            <Box width={['94%', '90%', '100%', '47%']}>
              <FormLabel
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="14px"
                color="#666670"
              >
                Your Password
              </FormLabel>
              <TextField
                placeholder="Password"
                height="55px"
                type="password"
                width="330px"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p style={{ color: 'red' }}>{formik.errors.password}</p>
              ) : null}
            </Box>
            <Box
              width={['94%', '90%', '100%', '47%']}
              mt={['33px', '20px', '35px', '0px']}
            >
              <FormLabel
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="14px"
                color="#666670"
              >
                Confirm password
              </FormLabel>
              <TextField
                placeholder="confirm password"
                height="55px"
                type="password"
                width="330px"
                name="confirmPassword"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <p style={{ color: 'red' }}>{formik.errors.confirmPassword}</p>
              ) : null}
            </Box>
          </Box>
          <Box mt="5%" mr={['46%', '60%', '50%', '0%']}>
            <Box display="flex" alignItems="center" mb="4px">
              {formik.values.password.length < 8 ? null : (
                <Image
                  src="/check.png"
                  alt="check icon"
                  bg="#FF9916"
                  width="10px"
                  height="10px"
                  borderRadius="50%"
                />
              )}

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
              {formik.values.password.match(strength) ? (
                <Image
                  src="/check.png"
                  alt="check icon"
                  bg="#FF9916"
                  width="10px"
                  height="10px"
                  borderRadius="50%"
                />
              ) : null}
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
              {formik.values.password.match(strength) ? (
                <Image
                  src="/check.png"
                  alt="check icon"
                  bg="#FF9916"
                  width="10px"
                  height="10px"
                  borderRadius="50%"
                />
              ) : null}
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
              {formik.values.password.match(strength) ? (
                <Image
                  src="/check.png"
                  alt="check icon"
                  bg="#FF9916"
                  width="10px"
                  height="10px"
                  borderRadius="50%"
                />
              ) : null}
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
              {formik.values.password.match(strength) ? (
                <Image
                  src="/check.png"
                  alt="check icon"
                  bg="#FF9916"
                  width="10px"
                  height="10px"
                  borderRadius="50%"
                />
              ) : null}
              <Text
                fontFamily="montserrat"
                fontSize="12px"
                fontWeight="500"
                color="#666670"
              >
                At least one special character
              </Text>
            </Box>
          </Box>

          <Box mt="5%">
            <Buttons
              type="submit"
              description="Proceed"
              color="#ffffff"
              background="#FF9916"
              width="318px"
              height="65px"
              fontSize="14px"
            />
          </Box>
        </Box>
      </form>
    </div>
  )
}

export default BusinessDetailForm
