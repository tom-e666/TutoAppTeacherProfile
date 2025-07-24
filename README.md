# TutoApp Teacher Profile

A modern React Native (Expo) application showcasing a comprehensive teacher profile screen built with TypeScript.

## 📱 Features

### Core Features
- **Teacher Profile Display**: Complete teacher information with avatar, name, subjects, ratings, and institute
- **Interactive Rating System**: Star-based rating display with total reviews
- **Subject Tags**: Beautiful, color-coded subject tags
- **Statistics Dashboard**: Student count, experience, hourly rate, and availability
- **Mock Book Trial**: Interactive trial booking functionality with alerts

### Additional Features
- **Responsive Design**: Mobile-first approach optimized for various screen sizes
- **Loading States**: Smooth loading indicators during data fetching
- **Error Handling**: Graceful error handling with retry functionality
- **Mock API**: Simulated data fetching from JSON with network delays
- **TypeScript**: Full type safety throughout the application

## 🛠 Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Icons**: Expo Vector Icons (Material Icons)
- **Styling**: React Native StyleSheet (No external CSS frameworks)
- **Data**: Mock JSON API simulation

## 📂 Project Structure

```
TutoAppTeacherProfile/
├── App.tsx                     # Main application component
├── components/
│   ├── TeacherProfile.tsx      # Main teacher profile screen
│   ├── RatingDisplay.tsx       # Star rating component
│   ├── SubjectList.tsx         # Subject tags component
│   └── InfoItem.tsx           # Information item component
├── data/
│   └── teacherData.json       # Mock teacher data
├── services/
│   └── TeacherAPI.ts          # API service with mock data fetching
├── types/
│   └── Teacher.ts             # TypeScript interfaces
├── assets/                    # App icons and images
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for mobile testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TutoAppTeacherProfile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Expo Vector Icons (if not already installed)**
   ```bash
   npm install @expo/vector-icons
   ```

### Running the Application

1. **Start the development server**
   ```bash
   npm start
   ```

2. **Run on specific platforms**
   ```bash
   # Android
   npm run android
   
   # iOS
   npm run ios
   
   # Web
   npm run web
   ```

3. **Using Expo Go**
   - Install Expo Go on your mobile device
   - Scan the QR code from the terminal/browser
   - The app will load on your device

## 📱 App Screenshots

The app features:
- Clean, modern UI with card-based design
- Professional color scheme
- Intuitive navigation and interactions
- Responsive layout for different screen sizes

## 🎨 Design Principles

### Mobile-First Design
- Optimized for mobile devices
- Touch-friendly interface elements
- Appropriate spacing and sizing for mobile interaction

### User Experience
- Smooth loading states and transitions
- Clear visual hierarchy
- Intuitive information layout
- Accessible color contrasts

### Visual Design
- Material Design inspired icons
- Consistent color palette
- Professional typography
- Card-based layout for better content organization

## 📊 Teacher Profile Data

The app displays comprehensive teacher information:

- **Personal Information**: Name, avatar, institute affiliation
- **Academic Details**: Subjects taught, qualifications, experience
- **Performance Metrics**: Rating (1-5 stars), total reviews, student count
- **Practical Information**: Hourly rate, availability, languages
- **Biography**: Personal teaching philosophy and approach

## 🔧 Key Components

### TeacherProfile
Main component managing the entire profile screen with state management for loading, error handling, and data display.

### RatingDisplay
Reusable component for displaying star ratings with support for half-stars and review counts.

### SubjectList
Component for displaying subject tags with consistent styling and responsive layout.

### InfoItem
Flexible component for displaying labeled information with icons.

## 🌐 API Simulation

The app includes a mock API service that:
- Simulates network delays (1 second)
- Returns structured teacher data
- Handles error scenarios
- Provides TypeScript interfaces for data consistency

## 🔄 State Management

- Uses React hooks (useState, useEffect)
- Proper loading states
- Error boundary handling
- Clean component lifecycle management

## 📱 Responsive Features

- Flexible layouts using Flexbox
- Responsive text sizing
- Adaptive component spacing
- Mobile-optimized touch targets

## 🚀 Future Enhancements

Potential improvements for the application:
- Real API integration
- Teacher search and filtering
- Booking system integration
- Push notifications
- Offline data caching
- User authentication
- Multiple teacher profiles
- Advanced filtering options

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the 0BSD License - see the package.json for details.

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using React Native, Expo, and TypeScript**
