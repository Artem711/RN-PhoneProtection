// PLUGINS IMPORTS //
import React, {useRef} from 'react';
import {View} from 'react-native';
// @ts-ignore
import DrawView from 'react-native-draw-view';

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
  let drawer = useRef(null);

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
      {/* <View style={{flex: 1}}>
        <DrawView
          style={{flex: 1, backgroundColor: '#fff'}}
          onRef={(el) => (drawer = el)}
          color="#F6CE0E"
          strokeWidth={60}
          onSaved={(res) => console.log('Save', res.nativeEvent)}
          onError={(error) => console.log('Error', error.nativeEvent)}
        />
      </View> */}
    </>
  );
};

export default React.memo(BlocksSection);
