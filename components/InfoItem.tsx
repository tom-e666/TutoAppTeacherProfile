import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface InfoItemProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  value: string | number;
}

export const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={20} color="#666" />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 12,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
