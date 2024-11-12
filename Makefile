.PHONY: dev-frontend dev-backend

dev-backend: 
	@cd backend && bun dev

dev-frontend:
	@cd frontend && npm run dev