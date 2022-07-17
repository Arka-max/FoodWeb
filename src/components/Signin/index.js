import React from 'react'
import { Container,Icon,Form,FormH1,FormButton, FormContent, FormInput, FormLabel, FormWrap ,Text} from './SigninElements'

const SignIn = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/">Food</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>
                        Sign in to your account
                    </FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>

        </FormWrap>
    </Container>
  )
}

export default SignIn