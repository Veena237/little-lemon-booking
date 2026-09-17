export const fetchAPI = (date) => {
  const result = [];

  for (let hour = 17; hour <= 23; hour++) {
    result.push(`${hour}:00`);
    result.push(`${hour}:30`);
  }

  return result;
};

export const submitAPI = (formData) => {
  return true;
};