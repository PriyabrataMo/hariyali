import React, { useState } from "react";
import{
  Container,
  SignUpContainer,
  SignInContainer,
  Form,
  Title,
  Input,
  Button,
  GhostButton,
  Anchor,
  OverlayContainer,
  Overlay,
  OverlayPanel,
  LeftOverlayPanel,
  RightOverlayPanel,
  Paragraph
} from './SignUp';


function App() {
    const [signIn, setSignIn] = useState(true);
    
    return (
        <Container className="centred-container">
            <SignUpContainer signIn={signIn}>
                <Form>
                    <Title>Create Account</Title>
                    <Input type='text' placeholder='Name' />
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />
                    <Button>Sign Up</Button>
                </Form>
            </SignUpContainer>

            <SignInContainer signIn={signIn}>
                <Form>
                    <Title>Sign in</Title>
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />
                    <Anchor href='#'>Forgot your password?</Anchor>
                    <Button>Sign In</Button>
                </Form>
            </SignInContainer>

            <OverlayContainer signIn={signIn}>
                <Overlay signIn={signIn}>
                    <LeftOverlayPanel signIn={signIn}>
                        <Title>Welcome Back!</Title>
                        <Paragraph>
                            To keep connected with us please login with your personal info
                        </Paragraph>
                        <GhostButton onClick={() => setSignIn(true)}>
                            Sign In
                        </GhostButton>
                    </LeftOverlayPanel>

                    <RightOverlayPanel signIn={signIn}>
                        <Title>Hello, Buyer!</Title>
                        <Paragraph>
                            Enter Your personal details and start journey with us
                        </Paragraph>
                        <GhostButton onClick={() => setSignIn(false)}>
                            Sign Up
                        </GhostButton>
                    </RightOverlayPanel>
                </Overlay>
            </OverlayContainer>
        </Container>
    );
}

export default App;
