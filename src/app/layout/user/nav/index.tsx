import React from 'react';

import {
  Link,
} from "react-router-dom";

import {
  Avatar,
  VStack,
  HStack,
  Box,
  Spacer,
  Heading,
  IconButton,
} from '@chakra-ui/react';

import {
  IoChevronForward,
  IoChevronBack,
} from 'react-icons/io5';

import {
  useSettings,
} from '../../../../hooks';

import Locale from '../../../../locale';

import ThemeSwitcher from '../../../../theme';

import list from './options';
import Option from './option';
import UserMenu from './user';


const Nav = () => {
  const {settings, setSettings} = useSettings();

  return (
    <>
      <VStack as='nav' h='full' align="flex-start" className="dashboard-nav" spacing={0} {...(settings.menuExpanded ? {width: 180} : {})}>
        {
          settings.menuExpanded
          ? <HStack spacing={0} align="center" w="full" px={4} pt={3} pb={2}>
              <Heading size="sm" flex={1}>{Locale.branding}</Heading>
              <ThemeSwitcher />
            </HStack>  
          : <Box px={2} py={2}>
              <Avatar name={Locale.branding} size="sm"/>
            </Box>
        }

        <Box w='full' h='1px' className="divider-line"/>

        {list.map(({path, icon, label}, index) => (
          <Option 
            key={`nav-option-${index}`}
            expanded={settings.menuExpanded} 
            aria-label={label}
            cursor="pointer" 
            icon={icon} 
            as={Link} 
            to={path.endsWith('*') ? path.replace('*', '/') : path}
          />
        ))}
        <Spacer/>

        <UserMenu expanded={settings.menuExpanded}/>
      </VStack>

      <IconButton
        p={0}
        position="absolute"
        bottom={0}
        left={settings.menuExpanded ? "178px" : "50px"}
        zIndex={999}
        aria-label='Expand'
        icon={settings.menuExpanded ? <IoChevronBack/> : <IoChevronForward/>}
        size="sm"
        variant="ghost"
        className="general-border"
        borderLeftRadius={0}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        borderLeft="none"
        borderBottom="none"
        as="a"
        onClick={() => setSettings({...settings, menuExpanded: !settings.menuExpanded})}
      />      

    </>
  );
}

export default Nav;
