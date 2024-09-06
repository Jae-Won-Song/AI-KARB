export const validateEmail = (email: string): boolean => {
  return false;
}; // export default 안 쓰려고 임시로 잠깐 넣음

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  if (/^\d{11}$/.test(phoneNumber)) {
    return false;
  }
  return true;
};
