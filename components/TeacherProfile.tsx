import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Alert,
    SafeAreaView,
    StatusBar,
    Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Teacher } from '../types/Teacher';
import { TeacherAPI } from '../services/TeacherAPI';
import { RatingDisplay } from './RatingDisplay';
import { SubjectList } from './SubjectList';
import { InfoItem } from './InfoItem';

export const TeacherProfile: React.FC = () => {
    const [teacher, setTeacher] = useState<Teacher | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadTeacherProfile();
    }, []);

    const loadTeacherProfile = async () => {
        try {
            setLoading(true);
            setError(null);
            const teacherData = await TeacherAPI.getTeacherProfile(1);
            setTeacher(teacherData);
        } catch (err) {
            setError('Failed to load teacher profile');
            console.error('Error loading teacher profile:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleBookTrial = () => {
        Alert.alert(
            'Book Trial Class',
            `Would you like to book a trial class with ${teacher?.name}?`,
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Book Now',
                    onPress: () => Alert.alert('Success', 'Trial class booked successfully!')
                },
            ]
        );
    };

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#2196F3" />
                <Text style={styles.loadingText}>Loading teacher profile...</Text>
            </View>
        );
    }

    if (error || !teacher) {
        return (
            <View style={styles.centerContainer}>
                <MaterialIcons name="error-outline" size={48} color="#F44336" />
                <Text style={styles.errorText}>{error || 'Teacher not found'}</Text>
                <TouchableOpacity style={styles.retryButton} onPress={loadTeacherProfile}>
                    <Text style={styles.retryButtonText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Image source={{ uri: teacher.avatar }} style={styles.avatar} />
                    <View style={styles.headerInfo}>
                        <Text style={styles.name}>{teacher.name}</Text>
                        <Text style={styles.institute}>{teacher.institute}</Text>
                        <RatingDisplay rating={teacher.rating} totalReviews={teacher.totalReviews} />
                    </View>
                </View>

                {/* Subjects Section */}
                <View style={styles.section}>
                    <SubjectList subjects={teacher.subjects} />
                </View>

                {/* Stats Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Teacher Statistics</Text>
                    <InfoItem
                        icon="people"
                        label="Students Taught"
                        value={teacher.numberOfStudents}
                    />
                    <InfoItem
                        icon="work"
                        label="Experience"
                        value={teacher.experience}
                    />
                    <InfoItem
                        icon="attach-money"
                        label="Hourly Rate"
                        value={teacher.hourlyRate}
                    />
                    <InfoItem
                        icon="schedule"
                        label="Availability"
                        value={teacher.availability}
                    />
                </View>

                {/* Bio Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>
                    <Text style={styles.bio}>{teacher.bio}</Text>
                </View>

                {/* Qualifications Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Qualifications</Text>
                    {teacher.qualifications.map((qualification, index) => (
                        <View key={index} style={styles.qualificationItem}>
                            <MaterialIcons name="school" size={16} color="#4CAF50" />
                            <Text style={styles.qualificationText}>{qualification}</Text>
                        </View>
                    ))}
                </View>

                {/* Languages Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Languages</Text>
                    <View style={styles.languagesContainer}>
                        {teacher.languages.map((language, index) => (
                            <View key={index} style={styles.languageTag}>
                                <Text style={styles.languageText}>{language}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Book Trial Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.bookButton} onPress={handleBookTrial}>
                        <MaterialIcons name="calendar-today" size={20} color="#fff" />
                        <Text style={styles.bookButtonText}>Book Trial Class</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        flex: 1,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loadingText: {
        marginTop: 16,
        fontSize: 16,
        color: '#666',
    },
    errorText: {
        marginTop: 16,
        fontSize: 16,
        color: '#F44336',
        textAlign: 'center',
    },
    retryButton: {
        marginTop: 16,
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#2196F3',
        borderRadius: 8,
    },
    retryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    header: {

        // paddingTop: Platform.OS === 'ios' ? 40 : 30,
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    headerInfo: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    institute: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    section: {
        backgroundColor: '#fff',
        marginTop: 12,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
    },
    bio: {
        fontSize: 16,
        lineHeight: 24,
        color: '#444',
    },
    qualificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 8,
    },
    qualificationText: {
        fontSize: 16,
        color: '#333',
    },
    languagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    languageTag: {
        backgroundColor: '#FFF3E0',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#FF9800',
    },
    languageText: {
        color: '#F57C00',
        fontSize: 14,
        fontWeight: '500',
    },
    buttonContainer: {
        padding: 20,
        paddingBottom: 30,
    },
    bookButton: {
        backgroundColor: '#4CAF50',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 12,
        gap: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
