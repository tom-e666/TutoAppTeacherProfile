import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface RatingDisplayProps {
  rating: number;
  totalReviews: number;
  size?: number;
}

export const RatingDisplay: React.FC<RatingDisplayProps> = ({ 
  rating, 
  totalReviews, 
  size = 20 
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <MaterialIcons 
          key={i} 
          name="star" 
          size={size} 
          color="#FFD700" 
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <MaterialIcons 
          key="half" 
          name="star-half" 
          size={size} 
          color="#FFD700" 
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <MaterialIcons 
          key={`empty-${i}`} 
          name="star-border" 
          size={size} 
          color="#E0E0E0" 
        />
      );
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.starsContainer}>
        {renderStars()}
      </View>
      <Text style={styles.ratingText}>
        {rating} ({totalReviews} reviews)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});
