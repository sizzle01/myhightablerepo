import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'

// interface TextFieldProps {
//   height: string
//   placeholder: string
//   label: string
//   id: string
//   type: string
// { label, height, onChange }
// : React.FC<TextFieldProps>
// }

const TextField = ({ label, id, name, onChange, value }) => {
  // const [value, setValue] = React.useState('')
  // const handleChange = (event) => setValue(event.target.value)
  // console.log(value)
  return (
    <div>
      <FormControl>
        <FormLabel
          fontFamily="Montserrat"
          fontWeight="500"
          fontSize="14px"
          color="black.90"
        >
          {label}
        </FormLabel>
        <InputGroup>
          <Input
            height="55px"
            id={id}
            focusBorderColor="brand.100"
            onChange={onChange}
            value={value}
          />
        </InputGroup>
      </FormControl>
    </div>
  )
}

export default TextField
