import type { Icon } from 'lucide-react'
import { MenuButtonContainer } from './style'

interface MenuButtonProps {
  icon: Icon
  isActive?: boolean
  onClick?: () => void
}

export function MenuButton({ icon: Icon, isActive = false, onClick }: MenuButtonProps) {
  return (
    <MenuButtonContainer
      active={isActive}
      className=""
      onClick={onClick}
    >
      <Icon strokeWidth={1.5} size={28} color={isActive ? "#E0DEF2" : "#8F8CA8"} />
    </MenuButtonContainer>
  )
}