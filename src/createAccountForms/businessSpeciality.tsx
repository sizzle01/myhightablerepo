import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from './progressBar'
import Mock from '../../Mock'
import { useState } from 'react'
import Buttons from '../components/buttons'

interface BusinessSpecialtyProps {}
const BusinessSpeciality: React.FC<BusinessSpecialtyProps> = () => {
  // const [specialty, setSpecialty] = useState({})
  const [preferences, setPreferences] = useState({})

  // const handleSpecialty = (index) => () => {
  //   setSpecialty((state) => ({
  //     [index]: !state[index],
  //   }))
  // }
  // const handlePreferences = (index) => () => {
  //   setPreferences((state) => ({
  //     [index]: !state[index],
  //   }))
  // }
  return (
    <div>
      <Box>
        <Box mt="-18%" ml={['7%', '10%', '0%', '0%']}>
          <ProgressBar businessName="Ichiraku Ramen Arigato" width="80%" />
        </Box>
        <Box ml={['7%', '10%', '0%', '0%']}>
          <Text
            fontFamily="montserrat"
            fontWeight="400"
            fontSize="14px"
            color="#666670"
            mb="30px"
            mt="-2%"
            w={['85%', '70%', '100%', '100%']}
          >
            Welcome to hightable, complete the follow information to get fully
            setup.
          </Text>
          <Text
            fontFamily="montserrat"
            fontWeight="400"
            fontSize="14px"
            color="#666670"
          >
            What’s your specialty? (Select up to 3)
          </Text>
        </Box>
        {/* Speciality selection */}
        <Box>
          <Grid
            display="flex"
            alignItems={{
              sm: 'center',
              base: 'center',
            }}
            flexDirection="row"
            flexWrap="wrap"
            gap="5"
            ml={['5%', '10%', '0%', '0%']}
            mt="42px"
          >
            {Mock.specialty.map((special, index) => {
              return (
                // onClick={handleSpecialty(index)}
                <Box mt="10px" key={index}>
                  <Box
                    role="group"
                    as="button"
                    h={['55px', '65px', '70px', '80px']}
                    w={['165px', '170px', '180px', '220px']}
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    borderRadius="10px"
                    fontFamily="montserrat"
                    fontSize={['12px', '14px', '14px', '14px']}
                    fontWeight="semibold"
                    bg="#F4F8FB"
                    color="#878787"
                    _hover={{ bg: '#F7F1E5' }}
                    _active={{
                      bg: '#F7F1E5',
                      transform: 'scale(0.98)',
                      border: '2px solid #FF9916',
                    }}
                    _focus={{
                      bg: '#F7F1E5',
                      boxShadow: '0 0 1px 2px #FF9916, 0 1px 1px  #FF9916  ',
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                    >
                      {/* {specialty[index] ? (
                        <Image
                          src="./check.png"
                          bg="#FF9916"
                          h={['15px', '16px', '19px', '19px']}
                          borderRadius="50%"
                          position="absolute"
                          left="94%"
                          bottom={['170%', '170%', '170%', '130%']}
                        />
                      ) : null} */}

                      <Image
                        // src={special.icon}
                        alt="icon"
                        bg="#E8E8E8"
                        mr="10px"
                        p="5px"
                        _groupFocus={{
                          bg: '#FF9916',
                        }}
                        _groupHover={{ bg: '#FF9916' }}
                        borderRadius="10px"
                      />
                      <Text>{special.name}</Text>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Grid>
        </Box>
        {/* Speciality selection */}
        <Box>
          {/* Preference selection */}
          <Box mt="60px">
            <Box ml={['7%', '10%', '0%', '0%']}>
              <Text
                fontFamily="montserrat"
                fontWeight="400"
                fontSize="14px"
                color="#666670"
              >
                What’s are you activity preferences? (Select up to 3)
              </Text>
            </Box>
            <Grid
              display="flex"
              alignItems={{
                sm: 'center',
                base: 'center',
              }}
              flexDirection="row"
              flexWrap="wrap"
              gap="6"
              ml={['5%', '10%', '0%', '0%']}
              mt="42px"
            >
              {Mock.preferences.map((preference, index) => {
                return (
                  // onClick={handlePreferences(index)}
                  <Box mt="10px" key={index}>
                    <Box
                      role="group"
                      as="button"
                      h={['55px', '55px', '60px', '50px']}
                      w={['165px', '165px', '165px', '170px']}
                      lineHeight="1.2"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      borderRadius="10px"
                      fontFamily="montserrat"
                      fontSize={['12px', '14px', '14px', '14px']}
                      fontWeight="semibold"
                      bg="#F4F8FB"
                      color="#878787"
                      _hover={{ bg: '#F7F1E5' }}
                      _active={{
                        bg: '#F7F1E5',
                        transform: 'scale(0.98)',
                        border: '2px solid #FF9916',
                      }}
                      _focus={{
                        bg: '#F7F1E5',
                        boxShadow: '0 0 1px 2px #FF9916, 0 1px 1px  #FF9916  ',
                      }}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                      >
                        {/* {preferences[index] ? (
                          <Image
                            src="./check.png"
                            bg="#FF9916"
                            h={['15px', '16px', '19px', '19px']}
                            borderRadius="50%"
                            position="absolute"
                            left="92%"
                            bottom={['170%', '170%', '170%', '120%']}
                          />
                        ) : null} */}
                        <Text>{preference.name}</Text>
                      </Box>
                    </Box>
                  </Box>
                )
              })}
            </Grid>
          </Box>
          {/* Preference selection */}
        </Box>
        <Box
          display={{
            sm: 'flex',
            md: 'block',
            lg: 'block',
            xl: 'block',
            base: 'flex',
          }}
          flexDirection={{
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
            base: 'column',
          }}
          alignItems="center"
        >
          <Box mt="80px" w={['90%', '70%', '60%', '27%']}>
            <Buttons
              type="submit"
              description="Go To Dashboard"
              background="#FF9916"
              color="#ffffff"
              width="100%"
              height="65px"
              fontSize="14px"
            />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default BusinessSpeciality
