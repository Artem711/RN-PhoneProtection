// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //
import BlockItem from './BlockItem/BlockItem';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  blocksCount: number;

  selectedIndexes: Array<number>;
  setSelectedIndexes: (newSelectedIndexes: Array<number>) => void;
};
const BlocksSection: React.FC<PropsType> = (props) => {
  return (
    <>
      {[...Array(props.blocksCount)].map((k, index) => {
        const isSelected = props.selectedIndexes.includes(index);
        return (
          <BlockItem
            key={index}
            isSelected={isSelected}
            onPress={() =>
              !isSelected &&
              props.setSelectedIndexes([...props.selectedIndexes, index])
            }
          />
        );
      })}
    </>
  );
};

export default React.memo(BlocksSection);
