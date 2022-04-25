import {  FormLabel, Input,InputRightElement, InputGroup, Checkbox } from '@chakra-ui/react'
import { useState } from 'react';



const LoginForm = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = (): void => setShow(!show);

  return (
    <>
      <FormLabel htmlFor="email" fontSize={{ base: "1.8rem" }}>
        User Name
      </FormLabel>
      <Input
        name="username"
        type="email"
        w="27rem"
        size="lg"
        placeholder="Username"
      />

      <FormLabel htmlFor="password" fontSize={{ base: "1.8rem" }}>
        Password
      </FormLabel>
      <InputGroup size="md">
        <Input
          size="lg"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          w="27rem"
        />
        <InputRightElement alignItems="self-end">
          <Checkbox onChange={handleClick}></Checkbox>
              </InputRightElement>
      </InputGroup>
    </>
  );
};

export { LoginForm };

