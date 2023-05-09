import React from 'react';

import {
  HStack,
  Avatar,
  Spacer,
  Text,
  Box,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';

import {
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';

const UserComponent = () => {
  return (
    <HStack w="full" px={2} py={2}>
      <Avatar size="sm" />
      
      <Spacer/>

      <Link className="user-menu">
        <IoSettingsOutline size="22px" />
      </Link>

      <form action='/auth/logout' method='post'>
      <Button type="submit" className="user-menu" variant='ghost'>
        <IoLogOutOutline size="22px" />
      </Button>
      </form>
    </HStack>
  );
}

const AvatarComponent = () => {
  return (
    <HStack w="full" pl={2} pb={2}>
      <Menu>
        <MenuButton as={Avatar} size="sm" cursor="pointer"/>
        <MenuList>
          <MenuItem icon={<IoSettingsOutline/>}>Settings</MenuItem>
          <MenuItem icon={<IoLogOutOutline/>}>Log out</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}


const Component = ({expanded, ...props}) => {
  return expanded
  ? <UserComponent {...props}/>
  : <AvatarComponent {...props}/>
}

export default Component;