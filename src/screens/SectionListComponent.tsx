import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import SectionItemCard from './SectionItemCard';
import SectionItemCardHeader from './SectionItemCardHeader';
import sectionItem from '../../data/DataSection';

const SectionLIstComponent = () => {
  console.log('====================================');
  console.log(sectionItem);
  console.log('====================================');
  return (
    <SectionList
      sections={sectionItem}
      keyExtractor={(item: any) => item.id}
      renderItem={({ item }) => <SectionItemCard item={item} />}
      renderSectionHeader={({ section }) => (
        <SectionItemCardHeader item={section} />
      )}
    />
  );
};
export default SectionLIstComponent;

const styles = StyleSheet.create({});
