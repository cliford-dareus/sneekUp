import React, { useEffect, useState } from "react";
import {
  DestinationCard,
  DestinationCardContainer,
  DestinationContainer,
  DestinationFilter,
  DestinationFilterButtonContainer,
  DestinationFilterTop,
  FilterButton,
  FilterButtonIndicator,
} from "./styles";
import { Button, SectionTitle } from "../../pages/styled-components";
import { BsFilter } from "react-icons/bs";
import { Icon } from "../../pages/Dasboard/styles";
import { DestinationType, destinations } from "../../utils/data/Destination";
import { RiCloseLine } from "react-icons/ri";

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

const variants = {
  open: {
    height: "150px",
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 1,
    },
  },
  closed: {
    height: "40px",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

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

      <DestinationFilter
        // isOpen={isOpen}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <DestinationFilterTop>
          <DestinationFilterButtonContainer>
            <FilterButton onClick={() => setFiltered([])}>All</FilterButton>
            {filtered.map((filter, index) => (
              <FilterButton
                key={index}
                onClick={() => {
                  const newFilter = filtered.filter((tab) => tab !== filter);
                  setFiltered(newFilter);
                }}
              >
                {filter}
                {/* Add a red x/cross */}
                <FilterButtonIndicator>
                  <RiCloseLine />
                </FilterButtonIndicator>
              </FilterButton>
            ))}
          </DestinationFilterButtonContainer>

          <Icon
            onClick={() => setIsOPen(!isOpen)}
            style={{ cursor: "pointer" }}
          >
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

      <DestinationCardContainer
        variants={{
          open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
          },
          closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
        }}
      >
        {filteredDestination.length !== 0 ? (
          filteredDestination.map((destination: any) => (
            <DestinationCard
              key={destination.id}
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: { stiffness: 1000, velocity: -100 },
                  },
                },
                closed: {
                  y: 50,
                  opacity: 0,
                  transition: {
                    y: { stiffness: 1000 },
                  },
                },
              }}
            >
              <img src={destination.image} alt="" />
              <div>
                <h3>{destination.name}</h3>
                <p>{destination.country}</p>
                <p>${destination.price}</p>
              </div>
            </DestinationCard>
          ))
        ) : (
          <h1>No Destination Available</h1>
        )}
      </DestinationCardContainer>
    </DestinationContainer>
  );
};

export default index;
