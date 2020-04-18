import React from "react";

import { Box, Section, Title } from "rbx";

const Home = () => {
  return (
    <main className="container">
      <Box backgroundColor="danger">
        <Section backgroundColor="danger" size="medium">
          <Title textColor="light">Xlung</Title>
          <Title textColor="light" as="h2" subtitle>
            Excelência no ensino de ventilação mecânica
          </Title>
        </Section>
      </Box>
    </main>
  );
};

export default Home;
