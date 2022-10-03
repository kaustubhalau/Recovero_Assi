import rateLimit from 'express-rate-limit';

export const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 60000, // 1 min in milliseconds
  max: 19,
  message: 'You have exceeded the 19 requests in 24 hrs limit!', 
  standardHeaders: true,
  legacyHeaders: false,
});

export default rateLimiterUsingThirdParty;