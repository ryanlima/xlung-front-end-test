import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import { modalSelector, closeModal } from '../store/slices/modal'

import { Modal, Box, Content, Title } from "rbx";

const ModalGroup = () => {
  const dispatch = useDispatch()
  const { show, grupo } = useSelector(modalSelector)

  return (
    <Modal active={show}>
      <Modal.Background onClick={() => dispatch(closeModal())} />
      <Modal.Content>
        <Box>
          <Content align="center">
            <Title> {grupo.descricao}</Title>
            <p>Categoria Inicial: {grupo.cat_inicio}</p>
            <p>Categoria Final: {grupo.cat_fim}</p>
          </Content>
        </Box>
      </Modal.Content>
      <Modal.Close onClick={() => dispatch(closeModal())} />
    </Modal>
  );
};

export default ModalGroup;
