import React, { useState } from "react";
import {
  DestinationCard,
  DestinationCardContainer,
  DestinationContainer,
  DestinationFilter,
  DestinationFilterButtonContainer,
  DestinationFilterTop,
  FilterButton,
} from "./styles";
import { Button, SectionTitle } from "../../pages/styled-components";
import { BsFilter } from "react-icons/bs";
import { Icon } from "../../pages/Dasboard/styles";
import Destination from "../../assets/bahamas.jpg";
import Destination1 from "../../assets/ibiza.jpg";

const index = () => {
    const [ isOpen, setIsOPen ] = useState<boolean>(false);
    
  return (
    <DestinationContainer>
      <SectionTitle>
        Destination <br /> You May Like
      </SectionTitle>

      <DestinationFilter isOpen={isOpen}>
        <DestinationFilterTop>
          <DestinationFilterButtonContainer>
            <FilterButton>All</FilterButton>
            <FilterButton>Topical</FilterButton>
            <FilterButton>Bahamas</FilterButton>
          </DestinationFilterButtonContainer>

          <Icon onClick={() => setIsOPen(!isOpen)}>
            <BsFilter />
          </Icon>
        </DestinationFilterTop>

        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, vitae.
        </div>
      </DestinationFilter>

      <DestinationCardContainer>
        <DestinationCard>
          <img src={Destination} alt="" />
          <div>
            <h3>Bahamas</h3>
            <p>$500</p>
          </div>
        </DestinationCard>

        <DestinationCard>
          <img src={Destination1} alt="" />
          <div>
            <h3>Ibiza</h3>
            <p>$200</p>
          </div>
        </DestinationCard>

        <DestinationCard>
          <img src={Destination1} alt="" />
          <div>
            <h3>Ibiza</h3>
            <p>$200</p>
          </div>
        </DestinationCard>
      </DestinationCardContainer>
    </DestinationContainer>
  );
};

export default index;
