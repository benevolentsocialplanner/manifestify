export default {
  loginEndpoint: `${process.env.API_URL}/auth/login`,
  registerEndpoint: `${process.env.API_URL}/auth/register`,
  logoutEndpoint: `${process.env.API_URL}/auth/logout`,
  createEventEndpoint: `${process.env.API_URL}/api/events/create`,
  getEventsEndpoint: `${process.env.API_URL}/api/events`,
  otpEndpoint: `${process.env.API_URL}/auth/otp`,
  verifyOtpEndpoint: `${process.env.API_URL}/auth/otp/verify`,
};
