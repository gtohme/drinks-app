import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';
import DropDownMenu from './DropDownMenu';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <DropDownMenu open={open} />
    </>
  );
};

const BurgerMenu = styled.div`
  color: #3f37c9;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  &:hover {
    transform: scale(1.04);
  }

  div {
    /* color: #3f37c9; */
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      /* transform: ${({ open }) =>
        open ? 'translateX(100%)' : 'translateX(0)'}; */
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default Burger;
