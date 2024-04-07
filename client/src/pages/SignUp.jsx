import styled from 'styled-components';
export const Container = styled.div`
background: #fff; 
border-radius: 30px;
box-shadow: 0 17px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: absolute;
overflow: hidden;
width: 678px;
max-width: 100%;
min-height: 400px;
display: flex;
justify-content: center;
align-items: center;
top: 20%;
left: 0;
right: 0;
bottom: 20%;
margin: auto;
backdrop-filter: blur(10px);
transition: box-shadow 0.3s ease-in-out;
&:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 15px rgba(0, 0, 0, 0.25);
}
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0px;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` 
  : null}
 `;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0px;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (props.signIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Input = styled.input`
background-color: #f5f5f5; /* Lighter background color */
border: 1px;
border-radius: 20px; /* Rounded corners */
padding: 14px 20px; /* Increase padding for better spacing */
margin: 10px 0; /* Increase margin for better spacing */
width: 100%;
box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
transition: box-shadow 0.3s ease-in-out; /* Add transition for the shadow */

/* Hover effect */
&:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
}

/* Focus effect */
&:focus {
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow when focused */
}
`;

export const Button = styled.button`
border-radius: 20px;
border: none;
background: linear-gradient(to right, #007bff, #28a745);
color: #ffffff;
font-size: 14px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);

&:hover {
  transform: scale(1.05); /* Scale button slightly on hover */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.12);
}
&:active {
  transform: scale(0.95);
}
&:focus {
  outline: none;
}
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props =>
    props.signIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
border-radius: 20px;
border: 1px solid transparent; /* Remove border for better gradient effect */
background: linear-gradient(to right, #004d99, #15F5BA); /* Gradient from dark blue to dark green */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -102%;
  height: 110%;
  width: 203%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => props.signIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;