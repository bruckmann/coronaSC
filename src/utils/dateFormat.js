const dateFormat = (date) => {
  const dateArray = date.split('-');
  const year = dateArray[0];
  const month = dateArray[1];
  const dayAndTime = dateArray[3];
  const newDateArray = dayAndTime.split('T');
  const day = newDateArray[0];
  const dateFinal = `${day}/${month}/${year}`;
  return dateFinal;
};

export default dateFormat;
