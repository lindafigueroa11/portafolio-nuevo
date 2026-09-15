export const EXPERIENCES = [
  {
    slug: 'ai-recipes-generator',
    title: 'AI Recipes Generator',
    tag: 'Product Design',
    image: '/assets/ai-recipes-generator.png',
    intro:
      'Full-stack web application that generates personalized recipes from user-provided ingredients using artificial intelligence. It integrates recipe generation with Amazon Bedrock, AI image generation with FLUX.1 Schnell through Hugging Face, and a responsive SaaS-style interface. The project includes robust input validation, error handling, visual fallbacks, serverless architecture, and secure server-side token management.',
    description: `Recipe AI is a full-stack web application that generates personalized recipes based on ingredients users already have at home. The project combines generative AI for recipe creation, AI-powered image generation, and a modern SaaS-style interface focused on usability, speed, and a premium visual experience.

The goal was to build a functional and polished product where users can enter ingredients, instantly receive a structured recipe, and visualize the final dish through an AI-generated image, while following good practices in security, error handling, and technical resilience.

Key Features
Generates personalized recipes from user-provided ingredients.
Displays structured recipe data, including title, cooking time, servings, difficulty, ingredients, preparation steps, and chef tips.
Generates recipe images using FLUX.1 Schnell through the Hugging Face Inference Router.
Includes a local visual fallback when image generation fails.
Implements robust input validation for ingredient count, text length, and allowed characters.
Provides clear UX states for loading, success, error, and generated responses.
Handles backend, network, and external API errors with user-friendly messages.
Includes an image diagnostic endpoint to identify issues such as missing tokens, timeouts, network errors, unsupported providers, unaccepted model terms, or invalid non-image responses.

Tech Stack

Frontend: React, TypeScript, Vite
UI/Styling: Custom CSS, responsive design, glassmorphism cards, visual design tokens
Backend: AWS Amplify Gen 2, GraphQL, serverless functions
Text AI Model: Amazon Bedrock
Image AI Model: Hugging Face Inference Router + black-forest-labs/FLUX.1-schnell
API/Serverless: Vercel Functions
Code Quality: ESLint, strong TypeScript typing, separation of concerns`,
  },
  {
    slug: 'text-notes',
    title: 'Text Notes',
    tag: 'UX Writing',
    image: '/assets/text-notes.png',
    intro:
      'Sistema de notas minimalista orientado a rapidez de captura, navegacion limpia y estructura de contenido editable.',
    description: `Text Notes is a full-stack note management platform designed to organize written content through a clear hierarchy of projects, folders, and files. The project focuses on document organization, rich-text editing, persistent storage, authentication, and a responsive workspace for managing notes in a structured way.

The goal was to build a practical productivity tool where users can create workspaces, write and edit content, save files, and navigate their information through an intuitive sidebar experience.

Key Features
Project-based workspace with nested folders and files.
Rich-text editor powered by Quill.js with formatting controls for lists, colors, alignment, headings, fonts, and text styles.
Persistent file saving with MongoDB and backend API routes for projects, folders, and files.
Authentication flow using JWT cookies and protected backend logic.
Context-based state management for selected project, folder, file, editor content, and sidebar visibility.
Editable sidebar experience with folder/file selection, contextual menus, and dynamic rendering.

Tech Stack

Frontend: React, JavaScript, React Router
Editor: Quill.js
Backend: Node.js, Express
Database: MongoDB, Mongoose
Auth: JWT/Jose
UI/Styling: Styled Components, Sass
API/Data: Axios

Role

Designed and developed the application structure, frontend components, backend routes, database models, editor integration, authentication flow, and improvements across the save, edit, and delete experience.`,
  },
  {
    slug: 'ecommerce-autos',
    title: 'Ecommerce Autos',
    tag: 'Commerce',
    image: '/assets/ecommerce-autos.png',
    intro:
      'Diseno de experiencia para catalogo automotriz, comparacion visual y flujo de compra para inventario especializado.',
    description: `Ecommerce Autos is a car ecommerce platform designed to present vehicle inventory through a clean, commercial, and user-friendly shopping experience. It simulates a modern automotive marketplace where users can browse cars, review vehicle details, compare options, and interact with a polished ecommerce interface.

The goal was to create a digital sales experience for high-value products, where clarity, trust, and product presentation help users evaluate vehicles with confidence.

Key Features
Vehicle catalog with product-style presentation for cars.
Detailed car information sections including model, price, condition, and visual highlights.
Search and filtering concept for helping users find vehicles faster.
Responsive interface designed for desktop and mobile buying journeys.
Reusable UI components for product cards, sections, buttons, and detail pages.
Ecommerce-oriented layout focused on clarity, trust, and conversion.

Tech Stack

Frontend: React, JavaScript/TypeScript
UI/Styling: HTML, CSS, responsive UI patterns
Architecture: Component-based frontend structure
UX Focus: Ecommerce flows, product detail pages, conversion-focused layouts

Role

Built the frontend experience, structured the vehicle catalog flow, designed reusable components, and shaped the interface to feel professional, commercial, and easy to navigate.`,
  },
  {
    slug: 'pdf-converter-app',
    title: 'PDF Converter App',
    tag: 'Productivity',
    image: '/assets/pdf-converter-app.png',
    intro:
      'App enfocada en conversion de archivos con estados claros, mensajes de progreso y experiencia de uso sin friccion.',
    description: `PDF Converter App is a document-processing application focused on extracting and converting PDF or HTML content into readable text for analysis and future AI interaction. The project explores document ingestion, text extraction, testing, and the foundation for building chat or analysis features around uploaded documents.

The goal was to create a reliable backend-oriented processing flow that transforms unstructured files into clean text that can later be searched, analyzed, or connected to AI-powered workflows.

Key Features
PDF-to-text extraction for document analysis workflows.
HTML-to-text parsing for web-based academic or informational sources.
Node/TypeScript-based processing pipeline.
Testing setup for validating extraction behavior and technical reliability.
Foundation for future chat-with-a-document functionality.
Experimentation with module systems, package configuration, and data-processing libraries.

Tech Stack

Backend: Node.js, TypeScript
Parsing: pdf-parse, Cheerio
Data/Requests: Axios
Testing: Jest, ts-jest
Tooling: ESM/CJS configuration

Role

Implemented and tested the extraction workflow, configured the TypeScript/Node environment, worked through package compatibility issues, and structured the app for future document intelligence features.`,
  },
  {
    slug: 'ecommerce-electronics',
    title: 'Ecommerce Electronics',
    tag: 'Commerce',
    image: '/assets/ecommerce-electronics.png',
    intro:
      'Interfaz para tienda de electronica con jerarquia visual de categorias, filtros y presentacion de producto modular.',
    description: `Ecommerce Electronics is a responsive ecommerce storefront for electronics products with a catalog-focused interface and reusable shopping components. The project presents consumer electronics through a modern online store experience focused on product organization, visual hierarchy, and commercial usability.

The goal was to design a scalable frontend foundation for a product-driven store, with clear product cards, category browsing, promotional sections, and responsive layouts.

Key Features
Product catalog for electronics categories and featured items.
Product card components with image, price, description, and call-to-action structure.
Responsive layout optimized for desktop and mobile browsing.
UI sections for promotions, categories, product highlights, and commercial messaging.
Reusable component architecture for scaling product pages and store sections.
Shopping experience foundation for cart, filters, and checkout extensions.

Tech Stack

Frontend: React, JavaScript/TypeScript
UI/Styling: HTML, CSS, responsive design
Architecture: Component-based UI development
UX Focus: Ecommerce catalog, product presentation, shopping flows

Role

Created the storefront structure, designed product sections, developed reusable UI components, and focused the experience on clean product presentation and commercial usability.`,
  },
  {
    slug: 'economic-analysis',
    title: 'Economic Analysis',
    tag: 'Data Experience',
    image: '/assets/economic-analysis.png',
    intro:
      'Proyecto de analisis economico con vistas de lectura rapida, bloques de datos y narrativa visual estructurada.',
    description: `Economic Analysis is a data-driven research project focused on interpreting economic indicators, policy decisions, and macroeconomic trends through structured analysis and visualization. It connects economic theory with practical data interpretation to explain topics such as inflation, interest rates, monetary policy, and real economic activity.

The goal was to transform complex economic information into clear visual and written summaries that support academic analysis, business context, and evidence-based conclusions.

Key Features
Analysis of economic indicators such as inflation, interest rates, monetary policy variables, and real economic activity.
Use of official data sources and structured tables for academic research.
Charts and summaries to explain trends across time periods.
Interpretation of how institutions, banks, and policy actors influence economic outcomes.
Research writing focused on clarity, argumentation, and evidence-based conclusions.
Connection between economic decisions, social impact, and business context.

Tech Stack

Analysis: Excel, data analysis, statistical interpretation
Research: Economic research, academic writing, macroeconomic indicators
Visualization: Chart creation, structured tables, visual summaries

Role

Collected and organized economic information, interpreted trends, created summaries and visual materials, and connected economic theory with real-world policy and business implications.`,
  },
  {
    slug: 'urban-green-website',
    title: 'Urban Green Website',
    tag: 'Marketing Website',
    image: '/assets/urban-green-website.png',
    intro:
      'Sitio web de marca para Urban Green con lenguaje visual limpio, secciones editoriales y enfoque en conversion.',
    description: `Urban Green Website is a professional landing website for Urban Green, a smart irrigation concept focused on sustainability, sensor technology, and efficient water usage. It presents the Smart Irrigation Sensors product through a polished, market-facing digital experience.

The goal was to communicate the value of automated irrigation, environmental efficiency, and technology-driven agriculture or gardening solutions through a clear product website.

Key Features
Landing page structure for presenting the smart irrigation product and its benefits.
Sections for value proposition, product explanation, sustainability impact, and possible use cases.
Professional visual direction designed to support brand credibility.
Responsive layout suitable for users, clients, partners, or investors.
Content focused on water efficiency, automation, and environmental responsibility.
Foundation for product marketing, lead generation, and business presentation.

Tech Stack

Frontend: React/frontend web technologies
UI/Styling: HTML, CSS, responsive design
UX Focus: Product storytelling, landing page UX, brand presentation

Role

Designed and structured the product website, wrote and organized the messaging, created the user-facing presentation, and aligned the visual experience with the product concept.`,
  },
  {
    slug: 'urban-green-desktop',
    title: 'Urban Green Desktop',
    tag: 'Desktop App',
    image: '/assets/urban-green-desktop.png',
    intro:
      'Propuesta de interfaz de escritorio para operaciones internas, paneles de control y tareas de administracion.',
    description: `Urban Green Desktop is a desktop-oriented management system concept connected to the Urban Green smart irrigation ecosystem. It is designed as an administrative or operational interface for managing device-related information, monitoring activity, organizing data, and supporting internal workflows behind the product.

The goal was to extend the Urban Green ecosystem beyond the public website and physical device by planning an internal tool that could support real operations, device management, and product data.

Key Features
Desktop-style interface concept for internal management and monitoring.
Potential modules for device information, sensor readings, clients, inventory, or operational records.
Structured navigation for business and technical administration.
Dashboard-oriented foundation for visualizing relevant product data.
Support for professionalizing the product ecosystem beyond the physical device.
Scalable concept for future integration with databases, APIs, and IoT data.

Tech Stack

Platform: Desktop app planning or web-based desktop approach
UI/UX: Dashboard design, frontend UI, data management concepts
Product Logic: IoT/backend integration planning

Role

Defined the system purpose, planned possible modules, structured the administrative workflow, and connected the desktop system idea with the broader Urban Green product strategy.`,
  },
  {
    slug: 'business-admin',
    title: 'Business Admin',
    tag: 'Admin Panel',
    image: '/assets/business-admin.png',
    intro:
      'Dashboard administrativo con componentes reutilizables, estados operativos y foco en productividad diaria.',
    description: `Business Admin is a business administration system concept focused on organizing operational data, internal processes, and professional management workflows. It is designed to centralize business information and improve organization across administrative tasks.

The goal was to turn scattered business processes into a structured digital system that can support records, operations, reports, inventory, clients, products, or internal control depending on business needs.

Key Features
Administrative dashboard concept for managing business information.
Modules that can support sales, products, inventory, clients, reports, or operational records.
Structured interface for improving organization and decision-making.
Reusable management patterns for different business contexts.
Foundation for database integration, authentication, and reporting features.
Professional approach to turning administrative needs into scalable software features.

Tech Stack

Frontend: React/frontend architecture
UI/UX: Dashboard UI, data organization, business process modeling
Backend Planning: Potential Node/MongoDB or SQL integration

Role

Planned the business workflow, structured possible modules, designed the system concept, and connected administrative goals with scalable software features.`,
  },
  {
    slug: 'urban-green-app',
    title: 'Urban Green App',
    tag: 'Mobile App',
    image: '/assets/urban-green-app.png',
    intro:
      'Aplicacion movil para experiencia de usuario final, con navegacion simple y componentes centrados en accion.',
    description: `Urban Green App is a mobile/web app concept for controlling, monitoring, and managing smart irrigation sensors from a user-friendly interface. It extends the smart irrigation product into a user-facing application experience.

The goal was to help users monitor device status, understand irrigation activity, and interact with the system in a simple and accessible way without technical complexity.

Key Features
App interface concept for smart irrigation monitoring and control.
Potential views for device status, humidity levels, irrigation history, and alerts.
User-friendly experience for managing the product without technical complexity.
Connection point between the physical sensor device and the final user.
Scalable foundation for IoT integrations, notifications, and real-time data.
Design direction focused on sustainability, usability, and product adoption.

Tech Stack

Frontend: React/React Native concept
UI/UX: Mobile-first app flows, dashboard/app design
Product Logic: IoT product design, API integration planning

Role

Defined the user-facing app experience, planned the main screens and features, connected app functionality with the sensor product, and shaped the concept for future technical development.`,
  },
  {
    slug: 'despacho-abogados',
    title: 'Despacho de Abogados',
    tag: 'Professional Website',
    image: '/assets/law-firm-website.png',
    intro:
      'Sitio web profesional para firma legal con presentacion institucional, areas de practica y flujo de contacto enfocado en confianza.',
    description: `Despacho de Abogados is a professional website concept for a legal services firm. The experience is designed to communicate credibility, confidentiality, and clarity while helping potential clients understand practice areas and request a consultation without friction.

The goal was to create a refined digital presence that feels serious, modern, and easy to navigate for users seeking legal guidance.

Key Features
Institutional homepage with clear value proposition and consultation call-to-action.
Practice area sections for civil, corporate, labor, family, or advisory services.
Attorney profile and firm credibility blocks.
Contact flow designed for fast appointment requests.
Responsive layout for desktop and mobile users.
Professional visual system with restrained color, typography, and spacing.

Tech Stack

Frontend: React/frontend web technologies
UI/Styling: HTML, CSS, responsive design
UX Focus: Service website, trust building, lead generation

Role

Structured the homepage, planned the content hierarchy, designed the visual direction, and shaped the experience around clarity, professionalism, and conversion.`,
  },
  {
    slug: 'hotel',
    title: 'Hotel',
    tag: 'Hospitality Website',
    image: '/assets/hotel-website.png',
    intro:
      'Homepage para hotel boutique con reserva visible, galeria de habitaciones y una experiencia visual elegante para inspirar confianza.',
    description: `Hotel is a hospitality website concept focused on presenting rooms, amenities, location, and booking actions through a polished guest experience. The design balances atmosphere with practical information so visitors can evaluate the stay and move naturally toward a reservation.

The goal was to build a refined hotel homepage that feels welcoming, premium, and simple to use.

Key Features
Hero section with booking-oriented call-to-action.
Room and suite preview cards with visual hierarchy.
Amenities, location, and guest experience sections.
Trust-building layout for hospitality decisions.
Responsive interface for travel planning on mobile and desktop.
Elegant photographic direction aligned with boutique hotel branding.

Tech Stack

Frontend: React/frontend web technologies
UI/Styling: HTML, CSS, responsive layout
UX Focus: Hospitality, booking flow, visual storytelling

Role

Defined the homepage structure, organized the booking journey, created the visual language, and planned reusable sections for rooms, services, and guest information.`,
  },
  {
    slug: 'gimnasio',
    title: 'Gimnasio',
    tag: 'Fitness Website',
    image: '/assets/gym-website.png',
    intro:
      'Sitio web para gimnasio con membresias, clases, entrenadores y llamados a la accion claros para captar nuevos clientes.',
    description: `Gimnasio is a fitness center website concept created to promote memberships, classes, trainers, and facility benefits through an energetic but professional interface. The experience helps users quickly understand the offer and take action.

The goal was to create a strong commercial homepage for a fitness business without losing clarity or usability.

Key Features
Membership-focused hero with direct call-to-action.
Class schedule and training program preview.
Trainer and facility highlight sections.
Plan comparison blocks for conversion.
Mobile-first structure for users browsing on the go.
Visual direction with strong contrast and disciplined spacing.

Tech Stack

Frontend: React/frontend web technologies
UI/Styling: HTML, CSS, responsive design
UX Focus: Fitness marketing, memberships, conversion

Role

Designed the page structure, planned the membership flow, organized service content, and shaped the interface to feel energetic, premium, and easy to scan.`,
  },
  {
    slug: 'restaurante-cafeteria',
    title: 'Restaurante Cafeteria',
    tag: 'Food Website',
    image: '/assets/restaurant-cafe-website.png',
    intro:
      'Website para restaurante cafeteria con menu destacado, ambiente visual calido y flujo para reservas o pedidos.',
    description: `Restaurante Cafeteria is a food and beverage website concept for presenting menu highlights, location, atmosphere, and reservation or ordering actions. The design combines warmth with a clean structure so the business feels inviting and professional.

The goal was to create a homepage that communicates flavor, atmosphere, and ease of contact from the first screen.

Key Features
Hero section centered on food, coffee, and reservation intent.
Menu highlight cards for signature dishes and drinks.
Ambience and location sections for brand personality.
Call-to-action areas for reservations, contact, or ordering.
Responsive layout for local discovery on mobile.
Visual system balancing warmth, contrast, and readability.

Tech Stack

Frontend: React/frontend web technologies
UI/Styling: HTML, CSS, responsive design
UX Focus: Restaurant website, menu presentation, local conversion

Role

Structured the homepage, planned the menu presentation, designed the visual hierarchy, and connected the browsing experience with practical business actions.`,
  },
  {
    slug: 'spa-estetica',
    title: 'Spa Estetica',
    tag: 'Wellness Website',
    image: '/assets/spa-estetica-website.png',
    intro:
      'Sitio web para spa y estetica con servicios, agenda de citas y una presentacion limpia enfocada en bienestar.',
    description: `Spa Estetica is a wellness and beauty website concept designed to present treatments, packages, booking actions, and service benefits in a calm and premium digital experience.

The goal was to make the brand feel clean, trustworthy, and relaxing while keeping appointment booking visible and simple.

Key Features
Serene homepage with appointment-focused call-to-action.
Service cards for treatments, skincare, massage, or beauty packages.
Visual hierarchy for benefits, experience, and trust indicators.
Responsive layout for clients browsing from mobile.
Clean content structure that avoids overwhelming the user.
Soft but professional visual direction for wellness branding.

Tech Stack

Frontend: React/frontend web technologies
UI/Styling: HTML, CSS, responsive design
UX Focus: Wellness services, appointment flow, premium presentation

Role

Designed the homepage concept, organized service categories, shaped the booking path, and created a visual tone focused on calm, clarity, and professionalism.`,
  },
  {
    slug: 'taller-mecanico',
    title: 'Taller Mecanico',
    tag: 'Service Website',
    image: '/assets/mechanic-workshop-website.png',
    intro:
      'Pagina para taller mecanico con servicios, solicitud de cita y comunicacion clara para transmitir confianza tecnica.',
    description: `Taller Mecanico is a service business website concept for an automotive repair shop. The interface presents services, appointment booking, trust signals, and workshop information through a clean professional layout.

The goal was to turn a practical local business into a credible digital experience that helps customers request service quickly.

Key Features
Service-oriented homepage with appointment call-to-action.
Repair category sections for diagnostics, maintenance, brakes, engine, or electrical work.
Trust indicators for experience, warranty, and customer service.
Contact and location blocks for local conversion.
Responsive layout for urgent mobile visits.
Industrial visual direction with polished spacing and contrast.

Tech Stack

Frontend: React/frontend web technologies
UI/Styling: HTML, CSS, responsive design
UX Focus: Local services, appointments, credibility

Role

Planned the service flow, organized the content hierarchy, designed reusable sections, and shaped the page around speed, trust, and clear communication.`,
  },
  {
    slug: 'clinica-dental',
    title: 'Clinica Dental',
    tag: 'Healthcare Website',
    image: '/assets/dental-clinic-website.png',
    intro:
      'Sitio web para clinica dental con tratamientos, agenda de citas y una experiencia limpia, confiable y accesible.',
    description: `Clinica Dental is a healthcare website concept built to present treatments, patient care, appointment booking, and clinic credibility with a clean and reassuring interface.

The goal was to create a professional dental homepage that feels modern, accessible, and easy to trust.

Key Features
Appointment-focused homepage with clear treatment categories.
Sections for preventive care, cosmetic dentistry, orthodontics, or emergency attention.
Patient trust blocks for team, technology, and care quality.
Responsive structure for mobile appointment requests.
Readable content hierarchy for healthcare decision-making.
Clean visual system with bright clinical presentation.

Tech Stack

Frontend: React/frontend web technologies
UI/Styling: HTML, CSS, responsive design
UX Focus: Healthcare services, appointments, patient trust

Role

Designed the homepage flow, organized treatment information, planned conversion points, and shaped the visual experience to feel clear, professional, and reassuring.`,
  },
  {
    slug: 'muebleria',
    title: 'Muebleria',
    tag: 'Retail Website',
    image: '/assets/furniture-store-website.png',
    intro:
      'Homepage para muebleria con colecciones, categorias y productos destacados en una experiencia de compra elegante.',
    description: `Muebleria is a retail website concept for a furniture store, focused on presenting collections, product categories, showroom value, and ecommerce-oriented browsing through a refined interface.

The goal was to design a homepage that makes furniture feel desirable while keeping the shopping journey organized and practical.

Key Features
Interior-focused hero section with showroom call-to-action.
Product category blocks for salas, comedores, recamaras, or decoracion.
Featured furniture cards with clean ecommerce hierarchy.
Collection and style sections for inspiration-driven browsing.
Responsive layout for mobile product discovery.
Elegant retail visual system with strong imagery and clear spacing.

Tech Stack

Frontend: React/frontend web technologies
UI/Styling: HTML, CSS, responsive design
UX Focus: Retail ecommerce, catalog presentation, product discovery

Role

Structured the homepage, planned the product browsing flow, designed the visual hierarchy, and connected brand presentation with a practical shopping experience.`,
  },
];

export const EXPERIENCE_BY_SLUG = Object.fromEntries(
  EXPERIENCES.map((experience) => [experience.slug, experience]),
);
