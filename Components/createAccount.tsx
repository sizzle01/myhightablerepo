import { Box, color, Container, Image, Heading, Text } from '@chakra-ui/react'
import { customTheme } from '../styles/Theme'
import Logo from '../images/brandlogo.png'
import Buttons from '../Components/Buttons'
import TextField from '../Components/TextField'
interface CreateAccountProps {
  form: any
  actionType: string
  actionDescription: string
  enterDetails: string
  basicDetails: string
}
const CreateAccount: React.FC<CreateAccountProps> = ({
  form,
  actionType,
  actionDescription,
  enterDetails,
  basicDetails,
}) => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection={{
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
          base: 'column',
        }}
      >
        <Box width={['100%', '100%', '35%', '35%']} bg="#F7F1E5">
          <Box
            ml={['0%', '0%', '15%', '15%']}
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
            alignItems="center"
          >
            <Image
              src="/brandlogo.png"
              alt="brand"
              mt={['20px', '40px', '65px', '80px']}
              width={['32%', '40%', '48%', '55%']}
            />
            <Heading
              as="h1"
              size="2xl"
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
              alignItems="center"
            >
              <Box
                mt={['75px', '40px', '110px', '110px']}
                fontWeight="600"
                fontFamily=" DM Serif Display"
                fontSize={['30px', '32px', '32px', '50px']}
                width={['80%', '98%', '90%', '95%']}
                textAlign={{
                  sm: 'center',
                  md: 'left',
                  lg: 'left',
                  xl: 'left',
                  base: 'left',
                }}
              >
                {actionType}
              </Box>
              <Box
                fontWeight="400"
                lineHeight="162%"
                mt={['20px', '40px', '129px', '98px']}
                fontFamily="Montserrat"
                fontSize={['18px', '18px', '20', '22px']}
                width={['87%', '80%', '100%', '70%']}
                ml={['6%', '10%', '0%', '0%']}
              >
                {actionDescription}
              </Box>
              <Image
                src="/coffee.png"
                alt="brand"
                mt={['-19px', '80px', '80px', '100px']}
                ml={['235px', '80px', '80px', '50px']}
                width={['35%', '60%', '70%', '84%']}
              />
            </Heading>
          </Box>
        </Box>
        <Box width={['100%', '100%', '65%', '65%']} bg="#ffffff">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems={{
              sm: 'center',
              base: 'center',
            }}
            flexDirection={{
              sm: 'column-reverse',
              md: 'row',
              lg: 'row',
              xl: 'row',
              base: 'column-reverse',
            }}
          >
            <Box
              mt={['10%', '3%', '10%', '10%']}
              ml={['0%', '0%', '6%', '6%']}
              mr={['52%', '40%', '0%', '0%']}
              width={['65%', '50%', '30%', '30%']}
            >
              <Box ml={['20%', '0%', '6%', '6%']}>
                <Text
                  fontFamily="montserrat"
                  fontWeight="500"
                  fontSize="18px"
                  color="#000000"
                >
                  {enterDetails}
                </Text>
                <Text
                  fontFamily="montserrat"
                  fontWeight="400"
                  fontSize="14px"
                  color="#666670"
                >
                  {basicDetails}
                </Text>
              </Box>
            </Box>
            <Box
              width={['92%', '90%', '17%', '17%']}
              mt="10%"
              mr={['0%', '0%', '7%', '7%']}
            >
              <Buttons
                description="Go to Login"
                background="#666670"
                width="100%"
                height="55px"
                fontSize="14px"
              />
            </Box>
          </Box>
          <Box
            width={['100%', '100%', '70%', '70%']}
            ml={['0%', '0%', '6%', '6%']}
            mt={['40px', '70px', '100px', '100px']}
          >
            {form}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CreateAccount
