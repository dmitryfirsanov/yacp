.PHONY: dev-frontend dev-backend

dev-backend: 
	@cd backend && npm run start:dev

dev-frontend:
	@cd frontend && npm run dev