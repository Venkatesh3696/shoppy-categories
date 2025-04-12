const allowedOrifins = [
  "http://localhost:5173",
  "https://revisit-technologies.com",
];

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrifins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
