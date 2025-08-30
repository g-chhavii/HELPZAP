# Service App (MERN + Tailwind)

A ready-to-run MERN application for booking home services with role-based auth (customer, helper, admin), auto-assign helper, and an admin panel.

## Quick Start

### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev   # or npm start
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

### Demo Logins (seeded)
- **Admin:** admin@demo.com / 123456
- **Customer:** customer@demo.com / 123456
- **Helper:** helper@demo.com / 123456

## Environment (.env in backend)
```
PORT=5000
ATLASDB_URL=mongodb+srv://gchhavii08_db_user:0vGZ7pgtLRgP50qE@cluster01.rbcujc4.mongodb.net/
SECRET=0vGZ7pgtLRgP50qE
MIN_HOURS_BEFORE_BOOKING=2
CLIENT_URL=http://localhost:5173
```

## Notes
- Frontend expects API at http://localhost:5000
- Bookings must be 2 hours in advance (configurable).
- Helpers must be approved by admin to log in.
- COD only, no online payments.
