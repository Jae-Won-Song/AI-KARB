export const validateName = (name: string): boolean => {
  if (/^[가-힣]{2,4}$/.test(name)) {
    return false;
  }
  return true;
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  if (/^\d{11}$/.test(phoneNumber)) {
    return false;
  }
  return true;
};
