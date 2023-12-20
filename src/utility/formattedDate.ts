const formattedDate = (date: Date): string => {
  const parsedDate = new Date(date);

  // Format options - adjust as needed
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
  };

  const formattedDate = parsedDate.toLocaleString("en-US", options);
  return formattedDate;
};

export default formattedDate;