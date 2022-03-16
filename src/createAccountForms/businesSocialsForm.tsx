import React from 'react'
import {
  Box,
  color,
  Container,
  Image,
  Heading,
  Text,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'
import TextField from './components/textField'
import Buttons from './components/buttons'
import * as Yup from 'yup'
import { Formik, useFormik, yupToFormErrors } from 'formik'
const BusinesSocialsForm = () => {
  const formik = useFormik({
    initialValues: {
      address: '',
      phone: '',
      website: '',
      twitter: '',
      facebook: '',
      instagram: '',
      linkedin: '',
      description: '',
    },
    validationSchema: Yup.object({
      address: Yup.string()
        .min(7, 'must be 7 characters or more')
        .required('Required'),

      phone: Yup.string()
        .min(11, 'must be at least 11 characters')
        .required('Required'),

      website: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Enter correct url!',
        )
        .required('Please enter website'),
      twitter: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Enter correct url!',
        )
        .required('Please enter website'),
      facebook: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Enter correct url!',
        )
        .required('Please enter website'),
      instagram: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Enter correct url!',
        )
        .required('Please enter website'),
      linkedin: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Enter correct url!',
        )
        .required('Please enter website'),
      description: Yup.string()
        .min(5, 'must be greater than 5 characters')
        .required('Required'),
    }),

    onSubmit: (values) => {
      console.log(formik.values)
    },
  })
  console.log(formik.initialValues)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Box
            mt="-8%"
            w={['100%', '100%', '100%', '100%']}
            display={{
              sm: 'flex',
              md: 'block',
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
          >
            <Box mb="30px" w={['90%', '90%', '100%', '100%']}>
              <FormLabel
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="14px"
                color="black.90"
              >
                Business Address
              </FormLabel>
              <TextField
                placeholder="Business address"
                height="55px"
                type="text"
                id="address"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                onBlur={formik.handleBlur}
              />

              {formik.touched.address && formik.errors.address ? (
                <p style={{ color: 'red' }}>{formik.errors.address}</p>
              ) : null}
            </Box>
            {/* phone and Address Field */}
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection={{
                sm: 'column',
                md: 'column',
                lg: 'row',
                xl: 'row',
                base: 'column',
              }}
              alignItems="center"
              w={['90%', '90%', '100%', '100%']}
            >
              <Box
                w={['100%', '100%', '100%', '47%']}
                mb={['30px', '30px', '30px', '30px']}
              >
                <FormLabel
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="14px"
                  color="black.90"
                >
                  Contact Phone
                </FormLabel>
                <TextField
                  placeholder="+234"
                  type="number"
                  id="phone"
                  name="phone"
                  height="55px"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <p style={{ color: 'red' }}>{formik.errors.phone}</p>
                ) : null}
              </Box>
              <Box
                w={['100%', '100%', '100%', '47%']}
                mb={['30px', '30px', '30px', '30px']}
              >
                <FormLabel
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="14px"
                  color="black.90"
                >
                  Business website
                </FormLabel>
                <TextField
                  height="55px"
                  placeholder="website"
                  type="text"
                  id="website"
                  name="website"
                  onChange={formik.handleChange}
                  value={formik.values.website}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.website && formik.errors.website ? (
                  <p style={{ color: 'red' }}>{formik.errors.website}</p>
                ) : null}
              </Box>
            </Box>
            {/* phone and Address Field */}
            {/* Twitter and Address Facebook */}
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection={{
                sm: 'column',
                md: 'column',
                lg: 'row',
                xl: 'row',
                base: 'column',
              }}
              alignItems="center"
              w={['90%', '90%', '100%', '100%']}
            >
              <Box
                w={['100%', '100%', '100%', '47%']}
                mb={['30px', '30px', '30px', '30px']}
              >
                <FormLabel
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="14px"
                  color="black.90"
                >
                  Twitter
                </FormLabel>
                <TextField
                  placeholder="twitter.com/"
                  type="text"
                  id="twitter"
                  name="twitter"
                  height="55px"
                  onChange={formik.handleChange}
                  value={formik.values.twitter}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.twitter && formik.errors.twitter ? (
                  <p style={{ color: 'red' }}>{formik.errors.twitter}</p>
                ) : null}
              </Box>
              <Box
                w={['100%', '100%', '100%', '47%']}
                mb={['30px', '30px', '30px', '30px']}
              >
                <FormLabel
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="14px"
                  color="black.90"
                >
                  Facebook
                </FormLabel>
                <TextField
                  height="55px"
                  placeholder="facebook.com/"
                  type="text"
                  id="facebook"
                  name="facebook"
                  onChange={formik.handleChange}
                  value={formik.values.facebook}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.facebook && formik.errors.facebook ? (
                  <p style={{ color: 'red' }}>{formik.errors.facebook}</p>
                ) : null}
              </Box>
            </Box>
            {/* Twitter and Facebook Field */}
            {/* Twitter and Address Facebook */}
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection={{
                sm: 'column',
                md: 'column',
                lg: 'row',
                xl: 'row',
                base: 'column',
              }}
              alignItems="center"
              w={['90%', '90%', '100%', '100%']}
            >
              <Box
                w={['100%', '100%', '100%', '47%']}
                mb={['30px', '30px', '30px', '30px']}
              >
                <FormLabel
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="14px"
                  color="black.90"
                >
                  Instagram
                </FormLabel>
                <TextField
                  placeholder="twitter.com/"
                  type="text"
                  id="instagram"
                  name="instagram"
                  height="55px"
                  onChange={formik.handleChange}
                  value={formik.values.instagram}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.instagram && formik.errors.instagram ? (
                  <p style={{ color: 'red' }}>{formik.errors.instagram}</p>
                ) : null}
              </Box>
              <Box
                w={['100%', '100%', '100%', '47%']}
                mb={['30px', '30px', '30px', '30px']}
              >
                <FormLabel
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="14px"
                  color="black.90"
                >
                  LinkedIn
                </FormLabel>
                <TextField
                  height="55px"
                  placeholder="facebook.com/"
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  onChange={formik.handleChange}
                  value={formik.values.linkedin}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.linkedin && formik.errors.linkedin ? (
                  <p style={{ color: 'red' }}>{formik.errors.linkedin}</p>
                ) : null}
              </Box>
            </Box>
            {/* Twitter and Facebook Field */}
            {/* Restaurant Description field */}
            <Box mb="30px" w={['90%', '90%', '100%', '100%']}>
              <FormLabel
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="14px"
                color="black.90"
              >
                Restaurant Description
              </FormLabel>
              <Textarea
                rows={7}
                id="description"
                name="description"
                focusBorderColor="brand.100"
                bg="fieldBg"
                placeholder="Write something"
                onChange={formik.handleChange}
                value={formik.values.description}
                onBlur={formik.handleBlur}
              />
              {formik.touched.description && formik.errors.description ? (
                <p style={{ color: 'red' }}>{formik.errors.description}</p>
              ) : null}
            </Box>
            {/* Restaurant Description field */}

            <Box mt="4%">
              <Buttons
                color="#ffffff"
                type="submit"
                description="Proceed"
                background="#FF9916"
                width="330px"
                height="65px"
                fontSize="14px"
              />
            </Box>
          </Box>
        </Box>
      </form>
    </div>
  )
}

export default BusinesSocialsForm
