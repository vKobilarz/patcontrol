const formatDateToString = (dateString) => {
  if (!dateString) {
    return '-';
  }

  const date = new Date(dateString);

  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export default formatDateToString;
