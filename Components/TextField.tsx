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

interface TextFieldProps {
  height: string
  placeholder: string
  label: string
  id: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: any
  h: string
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  id,
  children,
  name,
  onChange,
  value,
  placeholder,
  type,
  h,
}) => {
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
            bg="fieldBg"
            id={id}
            h={h}
            placeholder={placeholder}
            focusBorderColor="brand.100"
            onChange={onChange}
            value={value}
            type={type}
          />
          <InputRightElement
            // children={
            //   <CheckIcon color="white" bg="brand.100" borderRadius="50%" />
            // }
            children={children}
          />
        </InputGroup>
      </FormControl>
    </div>
  )
}

export default TextField
