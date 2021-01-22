import { Station } from './stations.types';

const getStation = ({
  name,
  line,
  position,
}: {
  name: string | null;
  line: string | null;
  position: number;
}): Station => {
  return {
    id: `${name}${line}`,
    name: name ?? '',
    line: line ?? '',
    position,
  };
};

export { getStation };
