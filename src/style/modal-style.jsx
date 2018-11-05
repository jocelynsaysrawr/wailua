import styled from "styled-components";

// The gray background
export const Backdrop = styled.div`
  position: fixed;
  top: 27vw;
  bottom: 27vw;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 15vw;
  z-index: 50;
  text-align: center;
  color: black;
`;

export const Button = styled.button`
  margin-top: 20px;
  align-self: center;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  background-color: #b5ce65;
  color: white;
  padding: 10px 30px;
  border-radius: 4px;
  font-family: 'Arial', Helvetica, sans-serif;
  font-weight: semi-bold;
  text-align: center;

  &:hover {
      background-color: #819446;
      transform: translate(-3px, -3px);
      box-shadow: 4px 4px rgba(0, 0, 0, 0.3)
  }

  &:active {
      transform: translateY(4px);
  }
`;

export const StyledModal = styled.div`
  background-color: #fff;
  position: fixed;
  top: 30vw;
  bottom: 30vw;
  left: 20%;
  right: 20%;
  overflow: scroll;
  border-radius: 5px;
  max-width: 80vw;
  min-height: 30vh;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  background-image: url('https://images.unsplash.com/photo-1491160382478-8b95e5972c96?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a558e8069c7509b1fcfc7e682d8ecf3a&auto=format&fit=crop&w=2468&q=80 ');
  opacity: 0.85;
  z-index: 50;

  button {
      width: auto;
  }

  @media (max-width: 600px) {
      right: 10%;
      left: 10%;
      top: 150px;
      bottom: 170px;
  }

  @media (min-width: 900px) {
      position: absolute;
      width: 700px;
      height: 400px;
      top: 20%;
  }
`
