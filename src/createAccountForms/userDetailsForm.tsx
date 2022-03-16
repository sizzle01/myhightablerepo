import Buttons from './components/buttons'
import TextField from './components/textField'
import { Box, FormLabel, Text } from '@chakra-ui/react'
import { Formik, useFormik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import { CheckIcon } from '@chakra-ui/icons'
const UserDetailsForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('invalid email').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(formik.values)
    },
  })
  console.log(formik.touched)
  return (
    <>
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
          >
            <Box width={['94%', '90%', '100%', '100%']}>
              <Box mt={['60px', '10px', '7px', '7px']}>
                <FormLabel
                  fontFamily="Montserrat"
                  fontWeight="500"
                  fontSize="14px"
                  color="#666670"
                >
                  Email Address
                </FormLabel>

                <TextField
                  height="55px"
                  placeholder="Enter email address"
                  id="email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // children={
                  //   formik.values.email.length < 1 && formik.errors.email ? null : (
                  //     <CheckIcon color="white" bg="brand.100" borderRadius="50%" />
                  //   )
                  // }
                />
                {formik.touched.email && formik.errors.email ? (
                  <p style={{ color: 'red' }}>{formik.errors.email}</p>
                ) : null}
              </Box>
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
              mt={['33px', '20px', '35px', '30px']}
              width="100%"
            >
              <Box width={['94%', '90%', '100%', '47%']}>
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
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <p style={{ color: 'red' }}>{formik.errors.firstName}</p>
                ) : null}
              </Box>
              <Box
                width={['94%', '90%', '100%', '47%']}
                mt={['23px', '23px', '30px', '0px']}
              >
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
                  placeholder="Enter last name"
                  name="lastName"
                  id="lastName"
                  type="text"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.lastName ? (
                  <p style={{ color: 'red' }}>{formik.errors.lastName}</p>
                ) : null}
              </Box>
            </Box>
            <Box mt={['66px', '80px', '100px', '124px']}>
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
        </form>
      </div>
    </>
  )
}

export default UserDetailsForm
