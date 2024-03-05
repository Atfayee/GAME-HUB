import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
