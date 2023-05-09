import React from 'react';

import {
  useLocation, 
} from "react-router-dom";

import {
  HStack,
  Text,
  IconButton,
} from '@chakra-ui/react';

const ICON_SIZE = "18px";

const IconOnlyComponent = ({icon, ...props}) => {
  const {pathname} = useLocation();
  const name = 'pathname';

  const WithIcon = icon;
  const ariaLabel = props['aria-label'] || name;
  const iconSize = props['icon-size'] || ICON_SIZE;
  
  let isActive = pathname.includes((props['aria-label'] || "").toLowerCase());

  if(ariaLabel.toLowerCase() === "dashboard" && name.length == 0) {
    isActive = true;
  }

  const color = isActive ? 'gray.600' : 'gray.400';

  return (
      <IconButton
        icon={<WithIcon size={iconSize}/>} 
        variant="link" 
        aria-label={ariaLabel}
        color={color}
        className={isActive ? "nav-active" : "nav-option"} 
        {...props}
      />
  );
}

const IconLabelOnlyComponent = ({icon, ...props}) => {
  const {pathname} = useLocation();
  const components = pathname.split('/');
  const name = 'pathname';
  const WithIcon = icon;
  const ariaLabel = props['aria-label'] || name;
  const title = props['title'] || ariaLabel;
  const iconSize = props['icon-size'] || ICON_SIZE;
  
  let isActive = pathname.includes((props['aria-label'] || "").toLowerCase());

  if(ariaLabel.toLowerCase() === "dashboard" && name.length == 0 && (components.filter(c => c.length > 0).length == 0)) {
    isActive = true;
  }

  const color = isActive ? 'gray.600' : 'gray.400';
  const bg = isActive ? 'gray.100' : 'transparent';

  return (
    <HStack w='full' px={4} pt={3} pb={3} bg={bg} color={color} {...props}>
      <WithIcon size={iconSize} />
      <Text fontSize={14} fontWeight="semibold" color={color}>{title}</Text>
    </HStack>
  );
}

const Component = ({expanded, icon, ...props}) => (
  expanded ? <IconLabelOnlyComponent icon={icon} {...props}/> : <IconOnlyComponent icon={icon} {...props}/>
)

export default Component;