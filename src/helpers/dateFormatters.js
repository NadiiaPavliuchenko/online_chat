const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const dateFormat1 = (date) => {
  const dateValue = new Date(date);
  const year = dateValue.getFullYear();
  const month = dateValue.getMonth();
  const day = dateValue.getDate();
  return `${months[month]} ${day}, ${year}`;
};

export const dateFormat2 = (date) => {
  const dateValue = new Date(date);
  return dateValue.toLocaleString("en-US", { timeZone: "UTC" });
};
