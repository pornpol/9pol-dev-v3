import React from "react";
import { DiFirebase, DiReact, DiMootoolsBadge, DiAptana } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the development world. From
      Hardwares, Back-end To Front-end.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            HTML5, CSS3, JS, <br />
            React, Redux, <br />
            Tailwind css <br />
            Material UI <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Python <br />
            Ruby on Rails <br />
            TypeORM, Prisma <br />
            MySQL and PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMootoolsBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            RestAPI, GraphQL, <br />
            GRPC and Kafka <br />
            Git, Docker, Redis etc. <br />
            TDD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAptana size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Hardwares</ListTitle>
          <ListParagraph>
            Experience with <br />
            C, C++ <br />
            ESP32, AVR, STM32 <br />
            Embedded Linux. <br />
            MQTT, LoRa, NB-IoT
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
