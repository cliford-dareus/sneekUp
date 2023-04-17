import React, { useEffect, useState } from "react";
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
import { DestinationType, destinations } from "../../utils/data/Destination";

const filters = ["Tropical", "Dry", "Temperate", "Continental", "Polar"];

const index = () => {
  const [isOpen, setIsOPen] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [filteredDestination, setFilterDestination] = useState<any>([]);

  const filterDestination = (id: string) => {
    
  };

  console.log(filteredDestination)

  return (
    <DestinationContainer>
      <SectionTitle>
        Destination <br /> You May Like
      </SectionTitle>

      <DestinationFilter isOpen={isOpen}>
        <DestinationFilterTop>
          <DestinationFilterButtonContainer>
            <FilterButton>All</FilterButton>
            {filtered.map((filter) => (
              <FilterButton>{filter}</FilterButton>
            ))}
          </DestinationFilterButtonContainer>

          <Icon onClick={() => setIsOPen(!isOpen)}>
            <BsFilter />
          </Icon>
        </DestinationFilterTop>

        <DestinationFilterButtonContainer>
          {filters.map((filter) => {
            return (
              <FilterButton
                onClick={() => setFiltered((prev) => [...prev, filter])}
              >
                {filter}
              </FilterButton>
            );
          })}
        </DestinationFilterButtonContainer>
      </DestinationFilter>

      <DestinationCardContainer>
        {filteredDestination.map((destination: any) => (
          <DestinationCard key={destination.id}>
            <img src={destination.image} alt="" />
            <div>
              <h3>{destination.name}</h3>
              <p>{destination.country}</p>
              <p>${destination.price}</p>
            </div>
          </DestinationCard>
        ))}
      </DestinationCardContainer>
    </DestinationContainer>
  );
};

export default index;
