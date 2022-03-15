import Buttons from '../Buttons'
import TextField from '../TextField'
import { Box, FormLabel, Text } from '@chakra-ui/react'
import { Formik, useFormik, yupToFormErrors } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const Confirmation = () => {
  const formik = useFormik({
    initialValues: {
      confirmation: '',
    },
    validationSchema: Yup.object({
      confirmation: Yup.string()
        .max(6, 'must be 6 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })
  console.log(formik.errors)
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
          alignItems="center"
        >
          <Box width={['94%', '90%', '100%', '100%']}>
            <FormLabel
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="14px"
              color="black.100"
            >
              Enter the Special Code
            </FormLabel>
            <TextField
              h="55px"
              type="text"
              id="confirmation"
              name="confirmation"
              placeholder="ender code"
              value={formik.values.confirmation}
              onChange={formik.handleChange}
              // children={
              //   formik.values.confirmation < 1 &&
              //   formik.errors.confirmation ? null : (
              //     <CheckIcon color="white" bg="brand.100" borderRadius="50%" />
              //   )
              // }
            />
            {formik.errors.confirmation ? (
              <p style={{ color: 'red' }}>{formik.errors.confirmation}</p>
            ) : null}
          </Box>

          <Box mt="12%">
            <Buttons
              type="submit"
              description="Proceed"
              background="#030303"
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

export default Confirmation
