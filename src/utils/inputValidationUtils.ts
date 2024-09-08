// 유효성 검사
// 이름
export const validateName = (name: string): boolean => {
  if (/^[가-힣]{2,4}$/.test(name)) {
    return false;
  }
  return true;
};

// 연락처
export const validatePhoneNumber = (phoneNumber: string): boolean => {
  if (/^\d{11}$/.test(phoneNumber)) {
    return false;
  }
  return true;
};
