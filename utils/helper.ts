export const convertToMonthName = (dateInDigit: string) => {
  const monthNaneList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateSplit = dateInDigit.split("-");
  const year = dateSplit[0];
  const monthDigit = Number(dateSplit[1]);

  const monthName = monthNaneList[monthDigit - 1];

  return `${year} ${monthName}`;
};
