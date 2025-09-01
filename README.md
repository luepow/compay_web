# ComPay Website

<div align="center">
  <img src="public/logo-full.svg" alt="ComPay Logo" width="300"/>
  
  **Wealth Without Walls**
  
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
</div>

## 🚀 About ComPay

ComPay is a licensed Money Services Business providing secure, compliant global payment solutions for individuals and businesses worldwide. Our platform offers comprehensive financial services with a focus on security, compliance, and user experience.

## ✨ Features

- **🌙 Dark/Light Mode**: Seamless theme switching with persistent preferences
- **📱 Responsive Design**: Optimized for all devices and screen sizes
- **🎨 Modern UI**: Clean, professional design with smooth animations
- **🔒 Security Focus**: Highlighting compliance and security features
- **📞 Contact Integration**: Direct contact forms and support channels
- **🌍 Global Reach**: Worldwide payment solutions
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: Netlify (with redirects support)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/compay-website.git
   cd compay-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with theme toggle
│   ├── Hero.tsx        # Landing section
│   ├── Products.tsx    # Products showcase
│   ├── Compliance.tsx  # Security & compliance info
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Footer.tsx      # Site footer
│   └── ...            # Other components
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports

public/
├── logo-full.svg      # ComPay full logo
├── logo.svg          # ComPay icon logo
└── logo-full@3x.png  # High-resolution logo

dist/                  # Built files (generated)
```

## 🎨 Theme System

The website features a comprehensive dark/light mode system:

- **Automatic Detection**: Remembers user preference in localStorage
- **Smooth Transitions**: 300ms transitions between themes
- **Component Support**: All components support both themes
- **Accessibility**: Proper contrast ratios and focus states

### Theme Toggle

The theme toggle is available in the header navigation and works across all pages.

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy** - Netlify will automatically deploy on git push

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific settings:

```env
VITE_APP_TITLE=ComPay
VITE_APP_DESCRIPTION=Wealth Without Walls
VITE_CONTACT_EMAIL=support@compay.net
VITE_SECURE_PORTAL_URL=https://secure.compay.net
```

### Tailwind Configuration

The project uses Tailwind CSS with custom configuration in `tailwind.config.js`:

- Dark mode enabled with class strategy
- Custom color palette matching ComPay branding
- Responsive breakpoints
- Custom animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 Key Sections

- **Hero**: Main landing section with call-to-action
- **Products**: Showcase of ComPay services
- **How It Works**: Step-by-step process explanation
- **Worldwide Payments**: Global reach information
- **Compliance**: Security and regulatory information
- **For Businesses**: Business-focused features
- **Testimonials**: Customer feedback
- **FAQ**: Common questions and answers
- **Licenses**: Regulatory compliance information

## 🔒 Security Features

- HTTPS enforcement
- Secure contact forms
- Privacy-focused design
- Compliance with financial regulations
- Secure portal integration

## 📞 Contact & Support

- **Email**: support@compay.net
- **Secure Portal**: https://secure.compay.net
- **Business Hours**: Monday - Friday, 9 AM - 6 PM EST

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern fintech companies
- Icons provided by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

---

<div align="center">
  <p>Built with ❤️ by the ComPay Team</p>
  <p>© 2024 ComPay. All rights reserved.</p>
</div>