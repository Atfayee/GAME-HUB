import GameCard from "./GameCard";
import useGames from "./hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";

function GameGrid() {
  const { data, error, isLoading } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing="10">
        {data.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
