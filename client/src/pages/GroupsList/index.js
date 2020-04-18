import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";

import { FaEye } from "react-icons/fa";

import { Box, Table, Title, Field, Control, Input, Button, Loader } from "rbx";

import {
  fetchGroups,
  groupsSelector,
  getGroupsFiltered,
} from "../../store/slices/groups";
import { showModal } from "../../store/slices/modal";

import ModalGroup from "../../components/Modal";

const GroupsList = () => {
  const dispatch = useDispatch();
  const { filteredGroups, loading, hasErrors } = useSelector(groupsSelector);

  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);

  const renderGroups = () => {
    if (hasErrors)
      return (
        <Table.Row>
          <Table.Cell>Não foi possível exibir grupos...</Table.Cell>
        </Table.Row>
      );
    return filteredGroups.map((group) => (
      <Table.Row key={group.id} className="vertical-align">
        <Table.Cell>{group.descricao}</Table.Cell>
        <Table.Cell className="has-text-centered">
          {group.cat_inicio}
        </Table.Cell>
        <Table.Cell className="has-text-centered">{group.cat_fim}</Table.Cell>
        <Table.Cell className="has-text-centered">
          <Button
            size="normal"
            color="info"
            onClick={() => dispatch(showModal(group))}
          >
            <FaEye size={16} />
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
  };

  return (
    <main className="container">
      <Box backgroundColor="white" size="medium">
        <div className="content-search">
          <Title textColor="grey-dark">Grupo de Doenças</Title>
          <Field>
            <Control>
              <Input
                placeholder="Busque um Grupo"
                onChange={(e) => dispatch(getGroupsFiltered(e.target.value))}
              />
            </Control>
          </Field>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="table-container">
            <Table fullwidth bordered hoverable>
              <Table.Head backgroundColor="danger">
                <Table.Row>
                  <Table.Heading textColor="white">Descrição</Table.Heading>
                  <Table.Heading
                    textColor="white"
                    className="has-text-centered"
                  >
                    Cat. Inicio
                  </Table.Heading>
                  <Table.Heading
                    textColor="white"
                    className="has-text-centered"
                  >
                    Cat. Fim
                  </Table.Heading>
                  <Table.Heading
                    textColor="white"
                    className="has-text-centered"
                  >
                    Ações
                  </Table.Heading>
                </Table.Row>
              </Table.Head>
              <Table.Body>{renderGroups()}</Table.Body>
            </Table>
          </div>
        )}
      </Box>
      <ModalGroup closeOnBlur={true} />
    </main>
  );
};

export default GroupsList;
