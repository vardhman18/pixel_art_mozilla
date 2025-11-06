# PixelArt — Transformers Challenge (Mozilla Club)

A complete frontend application for Mozilla Club's Pixel Art event with Transformers, Cars & Creative themes. Built with React + Vite + Tailwind CSS. Features a modern, responsive UI with Transformers-inspired design and team-based submissions.

## ✨ Features

### 🎨 Event Experience
- **Hero Section**: Animated 3D-inspired design with theme badges (Transformers, Cars, Creative Art, Teams)
- **Pixilart Integration**: Direct link to Pixilart platform with clear team collaboration instructions
- **Step-by-Step Guide**: Complete participation workflow from team formation to submission

### 👥 Team-Based Submissions
- **Team Details**: Team name, captain mobile (with validation), 2-3 member enrollment numbers
- **Smart Validation**: Mobile number format checking, required field validation
- **Drag & Drop Upload**: Modern file upload with drag-and-drop support and live preview
- **Multi-format Support**: PNG, JPG, JPEG and other image formats

### 📊 Optional Google Sheets Integration
- **Auto-Record Submissions**: Connect to Google Apps Script to save team data + artwork to Google Sheets
- **Drive Storage**: Automatically saves uploaded images to Google Drive in organized folders
- **Real-time Status**: Success/error feedback for submissions

## 🚀 Quick Start (Windows PowerShell)

1. **Install dependencies**
   ```powershell
   cd d:\PIXEL
   npm install
   ```

2. **Run development server**
   ```powershell
   npm run dev
   ```
   Opens on `http://localhost:5173` (or next available port)

3. **Build for production**
   ```powershell
   npm run build
   npm run preview
   ```

## 🎯 How Teams Participate

1. **Form Team**: 2-3 members, choose team name & captain
2. **Open Pixilart**: Visit [pixilart.com](https://www.pixilart.com/), create collaborative room
3. **Create Art**: Draw pixel art with Transformers/Cars/Creative themes
4. **Download**: Export finished artwork as PNG/JPG from Pixilart
5. **Submit**: Fill form on this website with team details + upload artwork

## 📊 Google Sheets Integration (Optional)

To automatically record team submissions:

1. **Create Google Sheet**: Make a new sheet, copy its ID from the URL
2. **Deploy Apps Script**: 
   - Open Extensions → Apps Script
   - Paste code from `scripts/google-apps-script.txt`
   - Replace `SHEET_ID` with your sheet ID
   - Deploy as Web App (Execute as: Me, Access: Anyone, even anonymous)
3. **Connect Frontend**: Paste the Web App URL into the form's "Google Apps Script URL" field
4. **Test**: Submit a sample entry to verify data appears in your sheet

### What Gets Recorded
- Timestamp, Team Name, Captain Mobile
- All enrollment numbers (1, 2, 3)
- Artwork title, category, filename
- Base64 image data saved to Google Drive

## 🎨 Customization

### Theme Colors
Edit `src/styles.css` CSS variables:
```css
:root {
  --accent1: #5a3cff; /* purple */
  --accent2: #00d1ff; /* cyan */
  --accent3: #ffb86b; /* orange */
}
```

### Event Details
Update event dates, prizes, and contact info in `src/App.jsx`:
- Search for "Nov 15, 2025" to update deadline
- Modify prize amounts in the sidebar
- Change contact details in footer

## 📁 Project Structure
```
D:\PIXEL/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Hero.jsx           # Animated hero section with badges
│   │   │   └── Footer.jsx         # Footer with team info
│   │   └── sections/
│   │       ├── HowToParticipate.jsx  # Step-by-step guide
│   │       ├── SubmissionForm.jsx    # Team submission form
│   │       └── Sidebar.jsx           # Rules & Prizes
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── styles.css       # Tailwind + animations + custom CSS
├── scripts/
│   └── google-apps-script.txt  # Backend integration code
├── public/
│   └── robots.txt       # SEO
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.cjs  # Tailwind CSS config
└── README.md           # This file
```

## ✨ New Features & Enhancements

### 🎨 Modern Classical Design
- **Professional Icons**: Clean SVG icons replacing emojis throughout
- **Mozilla Branding**: Official Mozilla logo integrated in hero and footer
- **Elegant Color Scheme**: Purple-based gradient palette (primary, secondary, accent)
- **Refined Typography**: Pixel fonts for titles, modern sans-serif for body text
- **Glassmorphism**: Subtle backdrop blur and transparency effects on cards

### 🎯 Component Architecture
- **Hero**: Mozilla branding, animated gradient title, professional badge cards with icons
- **HowToParticipate**: 6-step guide with geometric icon boxes and numbered steps
- **SubmissionForm**: Team form with icon-labeled sections, drag & drop with upload icon
- **Sidebar**: Rules and prizes with star icons and modern card layouts
- **Footer**: Team credits, contact info, quick links with professional icon headers

### 🌟 Visual Elements
- **No Emojis**: Professional SVG icons for all UI elements
- **Gradient Text**: Smooth color transitions for headings
- **Icon Boxes**: Geometric containers with shimmer effects
- **Hover Effects**: Scale transforms, border color changes, shadow enhancements
- **Custom Scrollbar**: Themed with gradient colors

## 🔧 Technical Notes
- **Frontend Only**: This is a client-side React app. Apps Script provides optional backend.
- **File Limits**: Base64 encoding has size limits; keep pixel art files small (< 1MB recommended).
- **Mobile Validation**: Indian mobile number format (10 digits, starts with 6-9).
- **Image Rendering**: Uses `image-rendering: pixelated` CSS for crisp pixel art display.

## 📞 Support
- **Technical Issues**: Check browser console for errors
- **Form Problems**: Ensure all required fields are filled correctly
- **Upload Issues**: Try PNG format, ensure file size < 1MB

---
**License**: MIT • Made with 💜 for Mozilla Club Events
