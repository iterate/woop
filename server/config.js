export default {
  client_id: process.env.GOOGLE_CLIENT_ID || "test",
  client_secret: process.env.GOOGLE_CLIENT_SECRET || "test",
  database_url: "sqlite://database.sqlite" // process.env.DATABASE_URL
};
