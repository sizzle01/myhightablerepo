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
      <Box display="flex">
        <Box width="35%" bg="#F7F1E5">
          <Box ml="15%">
            <Image src="/brandlogo.png" alt="brand" mt={12} width="310px" />
            <Heading as="h1" size="2xl">
              <Box
                mt="110px"
                fontWeight="400"
                fontSize="50px"
                fontFamily=" DM Serif Display"
                width="75%"
              >
                {actionType}
              </Box>
              <Box
                fontWeight="400"
                mt="95px"
                fontFamily="Montserrat"
                fontSize="22px"
                lineHeight="162%"
                width="70%"
              >
                {actionDescription}
              </Box>
              <Image src="/coffee.png" alt="brand" mt="40px" ml="50px" />
            </Heading>
          </Box>
        </Box>
        <Box width="65%" bg="#ffffff">
          <Box display="flex" justifyContent="space-between">
            <Box mt="10%" ml="6%">
              <Box>
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
            <Box mt="10%" mr="7%">
              <Buttons
                description="Go to Login"
                background="#666670"
                width="187px"
                height="55px"
                fontSize="14px"
              />
            </Box>
          </Box>
          <Box mt="100px" width="66%" ml="6%">
            {form}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CreateAccount
