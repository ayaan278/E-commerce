import React from 'react'
import { Menu,MenuList, MenuItem, MenuButton, IconButton, Link } from '@chakra-ui/react'
const DropdownMenu = (props) => {
  const { menu1, menu2, icon, link1, link2 } = props;
  return (
    <Menu>
        <MenuButton as={IconButton}  
            bg="transparent"
            outline="none"
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            // _focus={{ boxShadow: 'outline' }}
            icon={icon}>
        </MenuButton>
        <MenuList color="black">
          <Link href={link1}>
            <MenuItem>{menu1}</MenuItem>
          </Link>
          <Link href={link2}>
            <MenuItem>{menu2}</MenuItem>
          </Link>
        </MenuList>
    </Menu>
  )
}

export default DropdownMenu