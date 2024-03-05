import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "";
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
