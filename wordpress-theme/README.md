# Titan Trucking School WordPress Theme

A professional, conversion-focused WordPress theme designed specifically for CDL training schools and trucking education providers.

## Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **SEO Optimized**: Built-in SEO best practices and structured data
- **Conversion Focused**: Strategic CTAs and lead generation elements
- **Professional Design System**: Consistent colors, typography, and components
- **Custom Post Types**: Programs, Testimonials, and Instructors
- **Contact Forms**: Built-in contact form with spam protection
- **Performance Optimized**: Clean code and fast loading times

## Installation

1. Download the theme files
2. Upload the `titan-trucking` folder to `/wp-content/themes/`
3. Activate the theme in WordPress Admin > Appearance > Themes
4. Configure theme settings in Customizer

## Setup Instructions

### 1. Initial Configuration

After activating the theme:

1. Go to **Appearance > Customize**
2. Configure **Contact Information**:
   - Phone Number: `(612) 699-1403`
   - Address: Your school's address
   - Business Hours: Your operating hours

3. Set up **Menus**:
   - Go to **Appearance > Menus**
   - Create a Primary Menu with these pages:
     - Home
     - About
     - Programs
     - Success Stories
     - Blog
     - Contact

### 2. Required Pages

Create these pages for full functionality:

- **Home** (set as front page)
- **About**
- **Programs** 
- **Contact**
- **Blog** (set as posts page)
- **Privacy Policy**
- **Terms of Service**

### 3. Custom Post Types

The theme includes custom post types:

#### CDL Programs
- Title: Program name
- Content: Detailed description
- Featured Image: Program image
- Custom Fields:
  - Duration (e.g., "3-4 Weeks")
  - Price (e.g., "$4,995")
  - Starting Salary (e.g., "$65K+ starting")
  - Key Features (one per line)

#### Student Success Stories
- Title: Student name or story title
- Content: Full testimonial
- Featured Image: Student photo

#### Instructors
- Title: Instructor name
- Content: Biography and qualifications
- Featured Image: Professional headshot

### 4. Customization

#### Colors
The theme uses a professional color scheme:
- Primary Blue: #2563EB (Trust & Reliability)
- Secondary Orange: #EA580C (Action & Visibility) 
- Success Green: #059669 (Achievement)

#### Fonts
- Headings: System font stack optimized for readability
- Body: Clean, professional typography

#### Homepage Sections
The front page includes:
- Hero section with CTA
- Statistics showcase
- Programs overview
- Success stories
- Contact information

## File Structure

```
titan-trucking/
├── style.css (Theme header & main styles)
├── functions.php (Theme functionality)
├── index.php (Blog/archive template)
├── front-page.php (Homepage template)
├── header.php (Site header)
├── footer.php (Site footer)
├── single.php (Single post template)
├── page.php (Static page template)
├── assets/
│   └── js/
│       └── main.js (Custom JavaScript)
└── README.md (This file)
```

## Customization Options

### Theme Customizer
Available in **Appearance > Customize**:

- **Site Identity**: Logo, title, tagline
- **Contact Information**: Phone, address, hours
- **Colors**: Primary, secondary, accent colors
- **Typography**: Font selections and sizes

### Custom CSS
Add custom styles in **Appearance > Customize > Additional CSS**

### Child Theme
For extensive customizations, create a child theme to preserve changes during updates.

## SEO Features

- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions and keywords
- Schema.org structured data
- Optimized images with alt text
- Fast loading performance

## Contact Form

The built-in contact form includes:
- Name, email, phone validation
- Program interest selection
- Spam protection with nonces
- Email notifications to admin
- Success/error messaging
- Phone number auto-formatting

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- Mobile browsers

## Performance

- Optimized CSS and JavaScript
- Lazy loading images
- Minimal HTTP requests
- Compressed assets

## Support

For theme support and customization:
- Review WordPress documentation
- Check theme files for inline comments
- Test in staging environment before going live

## License

This theme is licensed under GPL v2 or later.

## Changelog

### Version 1.0.0
- Initial release
- Custom post types for programs, testimonials, instructors
- Responsive design system
- Contact form functionality
- SEO optimization
- Performance enhancements