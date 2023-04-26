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
import { DestinationType, destinations } from "../../utils/data/Destination";

const filters = [
  "tropical",
  "Dry",
  "Temperate",
  "Continental",
  "Polar",
  "luxury",
  "family",
  "amusment-park",
];

const index = () => {
  const [isOpen, setIsOPen] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [filteredDestination, setFilterDestination] = useState<any>([]);

  const filterDestination = () => {
    const addFilters = destinations.filter((destination) => {
      const d = destination.tags.filter((tag) => filtered.includes(tag));
      return d.length !== 0;
    });

    setFilterDestination(addFilters);
  };

  useEffect(() => {
    if (filtered.length === 0) {
      setFilterDestination(destinations);
      return;
    }

    filterDestination();
  }, [filtered]);

  return (
    <DestinationContainer>
      <SectionTitle>
        Destination <br /> You May Like
      </SectionTitle>

      <DestinationFilter isOpen={isOpen}>
        <DestinationFilterTop>
          <DestinationFilterButtonContainer>
            <FilterButton onClick={() => setFiltered([])}>All</FilterButton>
            {filtered.map((filter) => (
              <FilterButton
                key={filter}
                onClick={() => {
                  const newFilter = filtered.filter((tab) => tab !== filter);
                  setFiltered(newFilter);
                }}
              >
                {filter}
                {/* Add a red x/cross */}
              </FilterButton>
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
                key={filter}
                onClick={() => {
                  if (filtered.includes(filter)) return;
                  setFiltered((prev) => [...prev, filter]);
                }}
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
