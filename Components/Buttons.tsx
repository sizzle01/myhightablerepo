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
}
const Buttons: React.FC<ButtonsProps> = ({
  description,
  width,
  background,
  height,
  fontSize,
  onClick,
  type,
}) => {
  return (
    <Button
      style={{
        color: '#ffffff',
        width,
        background,
        borderRadius: '10px',
        height,
        fontSize,
      }}
      type={type}
      onClick={onClick}
    >
      {description}
    </Button>
  )
}

export default Buttons
