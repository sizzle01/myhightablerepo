import { Button, ButtonGroup } from '@chakra-ui/react'

interface ButtonsProps {
  description: String
  color: string
  width: any
  background: string
  borderRadius: string
  height: string
  fontSize: string
  onClick: MouseEventHandler
  type: string
  leftIcon: React.ReactElement
  colorScheme: string
  border: string
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
  border,
  color,
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
        border,
      }}
      colorScheme={colorScheme}
      type={type}
      onClick={onClick}
      leftIcon={leftIcon}
    >
      {description}
    </Button>
  )
}

export default Buttons
