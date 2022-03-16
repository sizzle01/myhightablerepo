import { Box } from '@chakra-ui/react'
import styles from '../../styles/Theme'
import NavBar from '../components/navBar'

interface LandingPageProps {}
const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div>
      <Box>
        <NavBar />
      </Box>
    </div>
  )
}

export default LandingPage
