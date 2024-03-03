export type OTPResponse = {
  success: boolean;
  message: string;
  data: {
    otp?: string;
    error?: string;
  };
};

export type OTPVerifyResponse = {
  success: boolean;
  message: string;
  data: {
    user: string;
  };
};