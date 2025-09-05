# Portfolio Website

A modern, responsive portfolio website built with Encore.ts backend and React frontend, showcasing professional work and providing a contact form for potential clients.

## Features

- **Modern Design**: Clean, professional layout with responsive design
- **Portfolio Showcase**: Dedicated projects section to display your work
- **About Section**: Personal introduction and professional background
- **Contact Form**: Functional contact form with backend API integration
- **Fast & Secure**: Built with Encore.ts for reliable backend infrastructure

## Tech Stack

### Backend
- **Encore.ts**: TypeScript-first backend framework
- **SQL Database**: PostgreSQL for storing contact form submissions
- **REST API**: Type-safe API endpoints

### Frontend
- **React**: Modern UI library with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Fast build tool and development server
- **Lucide Icons**: Beautiful, customizable icons

## Project Structure

```
├── backend/
│   └── portfolio/
│       ├── encore.service.ts    # Service definition
│       └── contact.ts          # Contact form API endpoint
├── frontend/
│   ├── App.tsx                 # Main React application
│   ├── components/
│   │   ├── Navigation.tsx      # Site navigation
│   │   └── Footer.tsx         # Site footer
│   ├── pages/
│   │   ├── Home.tsx           # Landing page
│   │   ├── About.tsx          # About section
│   │   ├── Projects.tsx       # Portfolio projects
│   │   └── Contact.tsx        # Contact form
│   └── public/
│       └── professional-headshot.jpg  # Profile image
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- Access to Leap platform

### Step-by-Step Setup

1. **Create New Project in Leap**
   - Go to the Leap platform
   - Click "Create New Project"
   - Choose "Encore.ts" as the backend framework
   - Choose "React" as the frontend framework

2. **Backend Setup**
   - Create the portfolio service structure
   - Define the contact form API endpoint
   - Set up SQL database for storing contact submissions

3. **Frontend Development**
   - Build responsive React components
   - Implement navigation and routing
   - Create portfolio sections (Home, About, Projects, Contact)
   - Style with Tailwind CSS for modern appearance

4. **Database Configuration**
   - SQL migrations are automatically handled by Encore.ts
   - Contact form submissions are stored in PostgreSQL

5. **Deployment**
   - Push changes to your repository
   - Leap automatically deploys both frontend and backend
   - Your portfolio will be live and accessible

## Key Components

### Backend API
- **Contact Endpoint**: `/contact` - Handles form submissions
- **Type Safety**: Full TypeScript integration between frontend and backend
- **Database**: Automatic SQL database provisioning and migrations

### Frontend Pages
- **Home**: Welcome section with professional introduction
- **About**: Detailed background and skills
- **Projects**: Showcase of portfolio work
- **Contact**: Functional contact form with validation

## Customization

### Adding Your Content
1. **Profile Image**: Replace `frontend/public/professional-headshot.jpg` with your photo
2. **Personal Info**: Update the content in each page component
3. **Projects**: Modify `frontend/pages/Projects.tsx` to showcase your work
4. **Styling**: Customize colors and layout in the component files

### Adding New Features
- **Blog Section**: Create new page components and API endpoints
- **Portfolio Categories**: Extend the projects structure
- **Social Links**: Add social media integration to the footer
- **Analytics**: Integrate tracking for visitor insights

## Development

### Local Development
- Leap provides a development environment
- Changes are automatically synced and deployed
- Hot reload for both frontend and backend

### Database Access
- Contact form submissions are automatically stored
- Access database through Leap's infrastructure panel
- Built-in database management and monitoring

## Deployment

The application is automatically deployed through Leap:
- **Frontend**: Served as a static React application
- **Backend**: Encore.ts API deployed as serverless functions
- **Database**: Managed PostgreSQL instance
- **SSL**: Automatic HTTPS certificate management

## Support

For questions about Leap platform features or deployment:
- Check Leap documentation
- Use the platform's support channels
- Review Encore.ts documentation for backend specifics

## License

This portfolio template is open source and available for personal and commercial use.
