const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
};

const calculateShortestMoves = (arr: string[], index: number): number => {
  const forwardMoves = arr.length - index; //number of moves forward to reposition item to index 0
  const backwardMoves = index;

  const moves = Math.min(forwardMoves, backwardMoves);

  return forwardMoves !== moves ? -1 * moves : moves; //negative to rotate anti-clockwise, positive to rotate clockwise
};

const reorderArray = (arr: string[], index: number) => {
  const selectedElement = arr[index];
  const restOfArray = [...arr].slice(index + 1).concat([...arr].slice(0, index));

  return [selectedElement, ...restOfArray];
};

export { chunkArray, calculateShortestMoves, reorderArray };
