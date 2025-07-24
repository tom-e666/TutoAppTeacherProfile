import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SubjectTagProps {
  subject: string;
}

export const SubjectTag: React.FC<SubjectTagProps> = ({ subject }) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{subject}</Text>
    </View>
  );
};

interface SubjectListProps {
  subjects: string[];
}

export const SubjectList: React.FC<SubjectListProps> = ({ subjects }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Subjects:</Text>
      <View style={styles.tagsContainer}>
        {subjects.map((subject, index) => (
          <SubjectTag key={index} subject={subject} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  tagText: {
    color: '#1976D2',
    fontSize: 14,
    fontWeight: '500',
  },
});
