# Trang Phục & Ngoài Hình - Tuồng Traditional Theater Website

A pixel-perfect, responsive website showcasing Vietnamese Tuồng traditional theatre costumes and appearance systems.

## Project Structure

```
Trang-phuc/
├── index.html          # Main HTML file with semantic markup
├── css/
│   └── style.css       # Complete styling with responsive design
├── js/
│   └── script.js       # Interactive features and animations
├── img/                # Image assets folder
└── README.md           # This file
```

## Features

### Visual Design
- **Premium Editorial Appearance**: Elegant serif headings and clean sans-serif body text
- **Luxury Color Palette**: Navy backgrounds, maroon accents, and gold decorative elements
- **Responsive Layout**: Desktop-first design with mobile and tablet optimizations

### Interactive Elements
- Smooth scrolling behavior
- Fade-in animations on scroll
- Hover effects on cards and icons
- Scroll-to-top button for easy navigation
- Parallax effects on hero images (desktop only)
- Counter animations for statistics

### Sections Included
1. **Header** - Navigation with title
2. **Hero Section** - Overlapping images with title and introduction
3. **Introduction** - Red accent panel describing Tuồng visual language
4. **System Grid** - 6 cards describing costume elements
5. **Features** - Key characteristics of Tuồng appearance system
6. **Characters** - Comparison of protagonist and antagonist appearance
7. **Quote** - Inspirational quote about Tuồng tradition
8. **Footer** - Contact information and links

## Required Images

Place the following images in the `img/` folder:

| Image | Usage | Dimensions |
|-------|-------|-----------|
| `1.png` | Hero section artwork | Recommend 300x400px |
| `2.png` | Hero section artwork | Recommend 300x400px |
| `3.png` | Hero section artwork | Recommend 300x400px |
| `4.png` | Màu sắc trang phục card | Supporting artwork |
| `5.png` | Hệ thống râu card | Supporting artwork |
| `6.png` | Nghệ thuật vẽ mặt card | Supporting artwork |
| `7.png` | Trang phục chiến tướng card | Supporting artwork |
| `8.png` | Phụ kiện và đạo cụ card | Supporting artwork |
| `9.png` | Ước lệ thị giác section | Supporting artwork |
| `10.png` | Nhân vật Chính diện card | Supporting artwork |

**Note**: Images should maintain their original aspect ratio. PNGs with transparency are preferred.

## Color Palette

```css
--maroon: #A01818;
--maroon-dark: #7A0F10;
--navy: #16213E;
--navy-deep: #0F1830;
--gold: #D4A94A;
--gold-light: #E8C777;
--cream: #F4EDE0;
--header-bg: #141225;
```

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Usage

1. Clone or download the project
2. Add image files to the `img/` folder
3. Open `index.html` in a web browser
4. No build process or dependencies required

## Responsive Breakpoints

- **Desktop**: Full featured layout (1200px+)
- **Tablet**: Adjusted grid layout (768px - 1199px)
- **Mobile**: Single column layout (<768px)

## Animations

- Fade-in on scroll (0.6s ease)
- Card hover elevation (translateY -8px)
- Image parallax (desktop only)
- Counter animations on scroll
- Smooth transitions on all interactive elements

## Accessibility

- Semantic HTML5 markup
- Keyboard navigation support
- Skip to main content link
- Proper heading hierarchy
- Alt text for all images
- High contrast color scheme

## Performance

- Optimized CSS with minimal specificity
- Lazy loading for images
- Hardware-accelerated animations
- Efficient JavaScript with debouncing
- Mobile-optimized viewport settings

## Customization

To customize colors, edit the CSS variables in `css/style.css`:

```css
:root {
    --maroon: #A01818;
    --navy: #16213E;
    /* ... other variables ... */
}
```

To modify typography, adjust font-family properties:

```css
--font-serif: 'Georgia', 'Times New Roman', serif;
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

## Credits

Built with vanilla HTML5, CSS3, and JavaScript - no frameworks or external dependencies.

Based on Vietnamese Tuồng traditional theatre culture and aesthetics.

## License

© 2026 Tân Tuồng Diễn Phố. All rights reserved.
