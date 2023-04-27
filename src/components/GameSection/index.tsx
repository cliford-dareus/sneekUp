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

const index = () => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;

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
            <GameCard>
              <GameCardBackgroundImage
                style={{ backgroundImage: `url(${game.image})` }}
              />

              <GameCardContent>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <GameCardGenre>
                  {game.genre.slice(0, 2).map((g) => (
                    <span>{g}</span>
                  ))}
                </GameCardGenre>
              </GameCardContent>

              <GameCardStatus 
                // onClick={}
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
            .map((g) => (
              <GameFavoritedCard 
                // style={{ backgroundImage: `url(${g.image})` }}
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
