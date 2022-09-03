import React from 'react';
import styled from 'styled-components';

const User = ({ children, mapKey }) => {
  return (
    <UserStyles key={mapKey}>
      <img
        src='https://pixsector.com/cache/50fcb576/av0cc3f7b41cb8510e35c.png'
        alt=''
      />

      <h5>{children}</h5>
    </UserStyles>
  );
};

const UserStyles = styled.div`
  width: 10rem;
  height: 15rem;
  cursor: pointer;
  /* background-blend-mode: multiply; */
  box-shadow: 0.3rem 0.3rem 15px #131313;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  position: relative;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  &:nth-child(odd) {
    background: linear-gradient(
      90deg,
      rgba(66, 66, 66, 0.38) 3.07%,
      rgba(18, 83, 139, 0.3) 88.06%
    );
  }
  &:nth-child(even) {
    background: linear-gradient(
      90deg,
      rgba(66, 66, 66, 0.38) 3.07%,
      rgba(18, 83, 139, 0.4) 78.06%
    );
  }
  &:hover {
    transform: scale(1.1);
    background: linear-gradient(
      90deg,
      rgba(78, 78, 78, 0.48) 3.07%,
      rgba(21, 92, 155, 0.5) 78.06%
    );
  }

  img {
    width: 5rem;
    height: 5rem;
  }
`;

export default User;