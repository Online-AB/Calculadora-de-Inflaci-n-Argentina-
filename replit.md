# Calculadora de Inflación

## Overview

This is a multi-country inflation calculator website that provides financial tools for calculating the impact of inflation across different Latin American countries and the United States. The site offers dedicated calculators for Argentina, Chile, Colombia, Mexico, Paraguay, Peru, Uruguay, and the US, each with localized currency support and Spanish/English language interfaces. The project includes informational pages (blog, about, contact, privacy policy) to provide comprehensive financial education resources.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript
- **Design Pattern**: Static site architecture with client-side interactivity
- **UI Framework**: Custom CSS with modern styling using gradients, flexbox, and responsive design
- **Navigation**: Multi-page structure with dropdown country selector for seamless switching between calculators

### Page Structure
- **Main Calculator Pages**: Separate HTML files for each country's inflation calculator
- **Content Pages**: Blog, about us, contact, and privacy policy pages
- **Shared Components**: Common header navigation, consistent styling, and reusable calculator interface

### Calculator Functionality
- **Input Validation**: Client-side validation for numerical inputs with error handling
- **Calculation Engine**: JavaScript-based inflation calculation using compound interest formula
- **Results Display**: Dynamic result generation with formatted currency display and detailed explanations
- **Localization**: Currency-specific formatting and country-appropriate labeling

### SEO Optimization
- **Meta Tags**: Comprehensive SEO meta tags with country-specific keywords
- **Structured Navigation**: Consistent URL structure with descriptive file names
- **Content Strategy**: Spanish-language content for Latin American markets, English for US market
- **Canonical URLs**: Prepared canonical tag structure (currently empty as specified)

### Responsive Design
- **Mobile-First Approach**: Viewport meta tags and responsive CSS
- **Cross-Device Compatibility**: Flexible layouts that adapt to different screen sizes
- **Touch-Friendly Interface**: Appropriately sized interactive elements

### Code Organization
- **Separation of Concerns**: HTML structure, CSS styling, and JavaScript functionality in separate files
- **Reusable Components**: Shared CSS classes and JavaScript functions across pages
- **Maintainable Structure**: Clear file naming convention and organized directory structure

## External Dependencies

### Third-Party Services
- **Fonts**: Segoe UI font family (system fonts, no external dependencies)
- **Analytics**: None currently implemented (ready for integration)

### Browser APIs
- **LocalStorage**: Available for potential data persistence
- **Form API**: Native browser form handling for contact forms
- **Number Formatting**: JavaScript Intl API for currency formatting

### Future Integration Points
- **CMS Integration**: Structure ready for content management system
- **Analytics Platforms**: Google Analytics or similar can be easily integrated
- **Payment Processing**: Architecture supports future premium feature integration
- **API Services**: Ready for real-time inflation data integration from financial APIs

### Development Dependencies
- **No Build Process**: Direct file serving without compilation
- **No Package Manager**: Self-contained with no external JavaScript libraries
- **Web Server**: Any static file server (Apache, Nginx, or CDN)