import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@adityadeveloper.com"
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://www.linkedin.com/in/aditya-jadhav-119079225/" target={'_blank'}>
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://github.com/AdityaVnitNagpur/" target={'_blank'}>
            <DiGithub />
          </a>
          <a href="https://www.instagram.com/adityajadhav793/" target={'_blank'}>
            <TiSocialInstagramCircular />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
