import React, { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../../pages/styled-components";
import {
  GameCard,
  GameCardBackgroundImage,
  GameCardContainer,
  GameCardContent,
  GameCardGenre,
  GameCardInner,
  GameCardStatus,
  GameFavoritedCard,
  GameFavoritedCardContainer,
  GameFavoritedContainer,
  GameSectionContainer,
} from "./styles";
import { games } from "../../utils/data/Games";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const cardVariants = {
  hover: { background: "red" },
  notHover: { y: 0 },
};

const index = () => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    setWidth(
      carouselRef.current?.scrollWidth! - carouselRef.current?.offsetWidth!
    );
  }, []);

  return (
    <GameSectionContainer>
      <SectionTitle>
        Upcoming <br /> Games To Watch
      </SectionTitle>

      <GameCardContainer ref={carouselRef}>
        <GameCardInner drag="x" dragConstraints={{ right: 0, left: -width }}>
          {games.map((game) => (
            <GameCard
              key={game.id}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              whileHover={{ y: -10 }}
            >
              <GameCardBackgroundImage
                isHovered={hovered}
                style={{ backgroundImage: `url(${game.image})` }}
              />

              <GameCardContent>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <GameCardGenre>
                  {game.genre.slice(0, 2).map((g) => (
                    <span key={g}>{g}</span>
                  ))}
                </GameCardGenre>
              </GameCardContent>

              <GameCardStatus
                // onClick={}
                whileHover={{ scale: 1.5 }}
              >
                {game.favorited ? <BsSuitHeartFill /> : <BsSuitHeart />}
              </GameCardStatus>
            </GameCard>
          ))}
        </GameCardInner>
      </GameCardContainer>

      <GameFavoritedContainer>
        <h3>Favorited Games</h3>
        <GameFavoritedCardContainer>
          {games
            .filter((game) => game.favorited === true)
            .map((g, index) => (
              <GameFavoritedCard
                // style={{ backgroundImage: `url(${g.image})` }}
                key={index}
              >
                <h3>{g.title}</h3>
              </GameFavoritedCard>
            ))}
        </GameFavoritedCardContainer>
      </GameFavoritedContainer>
    </GameSectionContainer>
  );
};

export default index;
