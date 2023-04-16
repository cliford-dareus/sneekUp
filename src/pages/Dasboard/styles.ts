import styled from "styled-components";
import { PageContainer } from "../styled-components";
import BgPurple from "../../assets/bg-purple.png";

export const DashboardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  font-size: 1.2rem;
`;

export const Icon = styled.span`
  font-size: 2rem;
`;

export const DashboardContainer = styled(PageContainer)`
  background-image: url(${BgPurple});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

