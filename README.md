# AgriTrust - Agricultural Verification Center

A modern, responsive web application for managing agricultural verification workflows, built with React, TypeScript, and Tailwind CSS.

## Features

### 🎯 Core Functionality
- **Verification Dashboard**: Real-time overview of verification statistics
- **Farmer Management**: Track and manage farmer verification requests
- **Driver Management**: Handle driver verification workflows
- **Activity Monitoring**: Recent verification activities and audit trails
- **Responsive Design**: Works seamlessly across all device sizes

### 🎨 User Experience
- **Modern UI**: Clean, professional interface
- **Intuitive Navigation**: Easy-to-use sidebar navigation
- **Real-time Updates**: Live statistics and activity feeds
- **Accessibility**: ARIA labels and keyboard navigation support

## Technology Stack

- **Frontend**: React 19.1.1 + TypeScript
- **Styling**: Tailwind CSS 4.1.12
- **Build Tool**: Vite 7.1.3
- **Development**: ESLint, PostCSS, Autoprefixer

## Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl, 3xl)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd agritrust

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
```bash
# Start development server with hot reload
npm run dev

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── NavigationSideBarSection.tsx
│   ├── FarmerVerificationSection.tsx
│   ├── DriverVerificationSection.tsx
│   └── ...
├── assets/              # Images and static files
├── App.tsx             # Main application component
├── VerificationCenter.tsx # Core dashboard component
└── main.tsx            # Application entry point
```

## Responsive Features

### Mobile Navigation
- Hamburger menu for mobile devices
- Overlay sidebar with smooth animations
- Touch-friendly button sizes
- Optimized spacing for small screens

### Adaptive Layouts
- Flexible grid systems that adapt to screen size
- Responsive typography scaling
- Optimized spacing and padding
- Collapsible sections for mobile

### Performance
- Optimized for mobile performance
- Efficient re-rendering
- Smooth animations and transitions
- Touch-optimized interactions

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different screen sizes
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

Built with ❤️ for the agricultural community
