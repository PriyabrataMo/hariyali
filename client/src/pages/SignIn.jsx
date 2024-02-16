import React, { useState } from "react";
import { Alert } from "flowbite-react";
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
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [signIn, setSignIn] = useState(true);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.signupUsername || !formData.signupEmail || !formData.signupPassword) {
            return setErrorMessage('Please fill all the fields!');
        }
        try {
            const res = await fetch 
        } catch (error) {
            
        }
    }
    return (
        <Container className="centred-container">
            <SignUpContainer signIn={signIn}>
                <Form onSubmit={handleSubmit}>
                    <Title>Create Account</Title>
                    <Input type='text' placeholder='Name' id='signupUsername' onChange={handleChange}/>
                    <Input type='email' placeholder='Email' id='signupEmail' onChange={handleChange}/>
                    <Input type='password' placeholder='Password' id='signupPassword' onChange={handleChange}/>
                    <Button>Sign Up</Button>
                </Form>
                {
                errorMessage && (
                    <Alert className='mt-5' color='failure'>
                        {errorMessage}
                    </Alert>
                )
                }
            </SignUpContainer>
            

            <SignInContainer signIn={signIn}>
                <Form>
                    <Title>Sign In</Title>
                    <Input type='email' placeholder='Email' id='signin.email' onChange={handleChange} />
                    <Input type='password' placeholder='Password' id='signin.password' onChange={handleChange}/>
                    <Anchor href='#'>Forgot your Password?</Anchor>
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
