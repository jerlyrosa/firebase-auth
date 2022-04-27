import { FormLabel, Input, InputRightElement, InputGroup, Checkbox } from '@chakra-ui/react'
import { useState } from 'react';

const RegisterForm = (): JSX.Element => {

    const [show, setShow] = useState<boolean>(false)
    const handleClick = (): void => setShow(!show)

    return (
      <>
        <FormLabel htmlFor="user" fontSize={{ base: "1.5rem" }}>
          Nick
        </FormLabel>
        <Input
          name="username"
          required
          id="usernickname"
          w="27rem"
          type="text"
          size="lg"
          placeholder="nick name"
        />

        <FormLabel htmlFor="name" fontSize={{ base: "1.5rem" }}>
          Full Name
        </FormLabel>
        <Input
          name="name"
          id="userfullname"
          w="27rem"
          type="text"
          size="lg"
          placeholder="Full Name"
        />

        <FormLabel htmlFor="email" fontSize={{ base: "1.5rem" }}>
          Email address
        </FormLabel>
        <Input
          name="emailuser"
          required
          id="useremailaddress"
          w="27rem"
          size="lg"
          type="email"
          placeholder="Email"
        />

        <FormLabel htmlFor="password" fontSize={{ base: "1.5rem" }}>
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            size="lg"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            id="userpassword"
            required
          />
          <InputRightElement alignItems="self-end">
            <Checkbox onChange={handleClick}></Checkbox>
          </InputRightElement>
        </InputGroup>
      </>
    );



}

export { RegisterForm }


