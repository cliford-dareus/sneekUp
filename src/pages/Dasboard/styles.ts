import styled from "styled-components";
import { PageContainer } from "../styled-components";
import BgPurple from "../../assets/bg-purple.png";

export const Icon = styled.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashboardContainer = styled(PageContainer)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #333;
  background-blend-mode: multiply;
`;
