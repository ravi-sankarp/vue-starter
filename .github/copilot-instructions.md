# Copilot Instructions for this repo

## Architecture Overview
This is a Vue 3 SPA built with Vite. It features a public user homepage and an authenticated admin dashboard. Key boundaries: user-facing components in `src/components/User/`, admin in `src/views/Admin/`, shared commons in `src/components/common/`. Data flows through a centralized API layer (`src/api/`) with automatic token refresh for admin routes.

## Developer Workflows
- **Development**: `npm run dev` (runs Vite with --host for network access)
- **Build**: `npm run build` (Vite production build)
- **Deploy**: `npm run deploy` (build + Firebase deploy)
- **Code Quality**: `npm run lint` (ESLint auto-fix), `npm run format` (Prettier)
- **Debugging**: Use Vue DevTools; API errors logged in console; toast notifications for user feedback

## Project Conventions
- **Vue Style**: Options API (data, methods, lifecycle hooks); avoid Composition API unless refactoring
- **Styling**: SCSS with CSS custom properties using nested styles(e.g., `var(--brand-color)` for blue #007bff)
- **Components**: No component libraries used;Icons as Vue components (e.g., `<CloseIcon />` from `src/components/common/icons/`);
- **API Integration**: Wrap responses in `{ data }`; use `src/api/http.js` for requests; admin routes auto-include Bearer token; 401 triggers refresh or redirect to `/admin/login`
- **Routing**: Lazy-load admin views; set page titles via route meta; auth guards commented out but structure in place
- **State Management**: Minimal; use localStorage for tokens (`Config.localstorageKeys.ADMIN_TOKEN`); global loader via `this.$loader.show()`

## Key Files
- `src/router/index.js`: Route definitions and title setting
- `src/api/http.js`: Fetch wrapper with auth and refresh logic
- `src/assets/scss/*`: Resusable scss code with vars for global colors


