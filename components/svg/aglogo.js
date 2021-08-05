import { createIcon, defaultProps, Icon } from '@chakra-ui/react';
import { useColorModeSwitcher } from '../../utils/hooks/useColorModeSwitcher';

// const LogoBase = createIcon({
//   defaultProps,
//   displayName: 'LogoBase',
//   viewBox: '0 0 375 375',
//   path: [
//     <path d="M.52-8.16c0-.25.08-.7.25-1.39l23.68-77.68c.68-2.12 2.23-3.75 4.64-4.9a19.17 19.17 0 018.35-1.73c3.14 0 5.92.58 8.34 1.73s3.96 2.78 4.64 4.9L74.23-9.55c.18.68.27 1.14.27 1.4 0 2.2-1.38 4.11-4.14 5.73A16.77 16.77 0 0161.76 0c-3.65 0-5.82-1.23-6.5-3.69L50.95-19.6H24.06L19.73-3.69C19.05-1.23 16.9 0 13.25 0c-2.98 0-5.85-.8-8.6-2.42C1.88-4.04.51-5.95.51-8.16zm27.62-26.73h18.6l-9.3-34.13zm0 0" />,
//     <path d="M5.86-29.28v-33.75c0-10.36 2.82-17.96 8.47-22.8 5.64-4.84 13-7.26 22.1-7.26 9.32 0 16.98 2.25 22.98 6.75 5.98 4.5 8.98 10.7 8.98 18.59 0 3.66-.77 6.14-2.3 7.45-1.53 1.32-4.07 1.97-7.64 1.97-6.54 0-9.85-1.99-9.93-5.98 0-1.19-.05-2.18-.13-2.99a13.4 13.4 0 00-.77-3 6.75 6.75 0 00-1.78-2.8 10.8 10.8 0 00-3.37-1.84c-1.5-.55-3.25-.83-5.28-.83-7.65 0-11.47 4.25-11.47 12.74v33.75c0 8.5 3.78 12.73 11.34 12.73 7.64 0 11.46-4.24 11.46-12.73v-4.34H41a5.1 5.1 0 01-4.4-2.22 9.09 9.09 0 01-1.58-5.43c0-1.94.55-3.7 1.65-5.28A5.07 5.07 0 0141-48.9h21.4a5.5 5.5 0 014.4 1.86 6.5 6.5 0 011.6 4.4v13.37c0 10.35-2.86 17.95-8.56 22.8C54.16-1.65 46.56.77 37.06.77c-9.43 0-16.98-2.42-22.67-7.25-5.69-4.85-8.53-12.45-8.53-22.8zm0 0" />
//   ]
// });

export const AGLogo = ({ boxSize = '3rem', ...props }) => {
  const { colorLight, colorDark } = useColorModeSwitcher();
  return (
    <Icon
      {...props}
      strokeWidth="2px"
      stroke="currentcolor"
      boxSize={boxSize}
    ><path d="M.52-8.16c0-.25.08-.7.25-1.39l23.68-77.68c.68-2.12 2.23-3.75 4.64-4.9a19.17 19.17 0 018.35-1.73c3.14 0 5.92.58 8.34 1.73s3.96 2.78 4.64 4.9L74.23-9.55c.18.68.27 1.14.27 1.4 0 2.2-1.38 4.11-4.14 5.73A16.77 16.77 0 0161.76 0c-3.65 0-5.82-1.23-6.5-3.69L50.95-19.6H24.06L19.73-3.69C19.05-1.23 16.9 0 13.25 0c-2.98 0-5.85-.8-8.6-2.42C1.88-4.04.51-5.95.51-8.16zm27.62-26.73h18.6l-9.3-34.13zm0 0"/><path d="M5.86-29.28v-33.75c0-10.36 2.82-17.96 8.47-22.8 5.64-4.84 13-7.26 22.1-7.26 9.32 0 16.98 2.25 22.98 6.75 5.98 4.5 8.98 10.7 8.98 18.59 0 3.66-.77 6.14-2.3 7.45-1.53 1.32-4.07 1.97-7.64 1.97-6.54 0-9.85-1.99-9.93-5.98 0-1.19-.05-2.18-.13-2.99a13.4 13.4 0 00-.77-3 6.75 6.75 0 00-1.78-2.8 10.8 10.8 0 00-3.37-1.84c-1.5-.55-3.25-.83-5.28-.83-7.65 0-11.47 4.25-11.47 12.74v33.75c0 8.5 3.78 12.73 11.34 12.73 7.64 0 11.46-4.24 11.46-12.73v-4.34H41a5.1 5.1 0 01-4.4-2.22 9.09 9.09 0 01-1.58-5.43c0-1.94.55-3.7 1.65-5.28A5.07 5.07 0 0141-48.9h21.4a5.5 5.5 0 014.4 1.86 6.5 6.5 0 011.6 4.4v13.37c0 10.35-2.86 17.95-8.56 22.8C54.16-1.65 46.56.77 37.06.77c-9.43 0-16.98-2.42-22.67-7.25-5.69-4.85-8.53-12.45-8.53-22.8zm0 0"/>
    </Icon>
  );
};
