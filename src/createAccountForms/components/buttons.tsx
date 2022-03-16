import { Button, ButtonGroup } from '@chakra-ui/react'

interface ButtonsProps {
  description: String
  color: string
  width: any
  background: string
  height: string
  fontSize: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  type: any
  leftIcon?: React.ReactElement
  colorScheme?: string
  fontFamily?: string
}
const Buttons: React.FC<ButtonsProps> = ({
  description,
  width,
  background,
  height,
  fontSize,
  onClick,
  type,
  leftIcon,
  colorScheme,
  color,
  fontFamily,
}) => {
  return (
    <Button
      style={{
        color,
        width,
        background,
        borderRadius: '10px',
        height,
        fontSize,
      }}
      colorScheme={colorScheme}
      type={type}
      onClick={onClick}
      leftIcon={leftIcon}
      fontFamily={fontFamily}
    >
      {description}
    </Button>
  )
}

export default Buttons
