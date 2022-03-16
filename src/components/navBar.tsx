import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'

interface NavBarProps {}

const menuLinks = [
  {
    link: 'Menu Link',
  },
  {
    link: 'Menu Link',
  },
  {
    link: 'Menu Link',
  },
]
const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          w="84%"
          h="100px"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box w="17%">
            <Image src="./brandlogo.png" alt="brandLogo" />
          </Box>
          <Box>
            {menuLinks.map((menu, index) => {
              return (
                <Box
                  key={index}
                  as="button"
                  mr="37px"
                  variant="link"
                  color="rgba(40, 40, 40, 0.63)"
                  fontFamily="montserrat"
                  fontSize="16px"
                  fontWeight="600"
                >
                  {menu.link}
                </Box>
              )
            })}
          </Box>
          <Box>
            <Button
              fontFamily="montserrat"
              fontSize="16px"
              fontWeight="500"
              color="#ffffff"
              w="142px"
              h="48px"
              bg="#FF9916"
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default NavBar
