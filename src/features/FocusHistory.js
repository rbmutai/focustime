import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet</Text>;
  const renderItem = ({ item }) => <Text style={styles.text}>-> {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.md,
    fontWeight: 'bold',
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.md,
  },
});
