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
        <Box>
          <FormLabel
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize="14px"
            color="#666670"
          >
            Enter the Special Code
          </FormLabel>
          <TextField
            type="text"
            id="confirmation"
            name="confirmation"
            placeholder="ender code"
            value={formik.values.confirmation}
            onChange={formik.handleChange}
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
      </form>
    </div>
  )
}

export default Confirmation
