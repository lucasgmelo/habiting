function isDateDiffBiggerThan7Days(date1: Date, date2: Date): boolean {
  const dayInMs = 24 * 60 * 60 * 1000;
  const diff = Math.abs(date1.getTime() - date2.getTime());
  const diffInDays = Math.round(diff / dayInMs);

  return diffInDays > 7;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getTrackerKey(date: Date) {
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const dateFormatterText = (date: Date) => {
  return capitalize(
    new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "full",
      timeStyle: "short",
    })
      .format(date)
      .split("às")[0]
  );
};

export const dateFromIsoToApi = (date: string) => {
  return date.split("T")[0];
};

export const dateFormatterNumber = (date: string) => {
  const dateFormat = new Date(date);
  return new Intl.DateTimeFormat("pt-BR").format(dateFormat);
};

export const getAppropriateSalutation = (date: Date) => {
  const hour = date.getHours();

  if (hour >= 6 && hour < 12) return "Bom dia!";
  if (hour >= 12 && hour < 18) return "Boa tarde!";
  return "Boa noite!";
};

export const formatStringToDeadline = (date: string) => {
  const dateInParts = String(date).split("T")[0].split("-");

  // console.log(dateInParts);
  const day: number = parseInt(dateInParts[2], 10);
  const month: number = parseInt(dateInParts[1], 10) - 1;
  const year: number = parseInt(dateInParts[0], 10);

  return new Date(year, month, day).toLocaleDateString();
};

export const formatStringToDate = (date: string) => {
  const dateInParts = String(date).split("T")[0].split("-");

  const day: number = parseInt(dateInParts[2], 10);
  const month: number = parseInt(dateInParts[1], 10) - 1;
  const year: number = parseInt(dateInParts[0], 10);

  return new Date(year, month, day);
};
