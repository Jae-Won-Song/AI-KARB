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

// 인증번호
export const validateCertNo = (certNo: string): boolean => {
  if (/^\d{6}$/.test(certNo)) {
    return false;
  }
  return true;
};

// 아이디
export const validateId = (id: string): boolean => {
  if (/^[a-zA-Z0-9]{4,12}$/.test(id)) {
    return false;
  }
  return true;
};

// 비밀번호
export const validatePassword = (password: string): boolean => {
  // 패턴 정의
  const lengthRegex = /^.{8,16}$/;
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /\d/;
  const specialCharacterREgex = /[!"#$%&'()*+,\-./:;<=>?@[₩\]^_`{|}~]/;

  // 8자~16자 가능
  const isValidLength = lengthRegex.test(password);

  // 최소 2가지 이상 조합 필요
  const isValidCombination =
    [lowercaseRegex, uppercaseRegex, numberRegex, specialCharacterREgex].filter((regex) => regex.test(password))
      .length >= 2;

  if (isValidLength && isValidCombination) {
    return false;
  }
  return true;
};

// 사원번호
export const validateEmpNo = (empNo: string): boolean => {
  if (/^\d{8}$/.test(empNo)) {
    return false;
  }
  return true;
};
