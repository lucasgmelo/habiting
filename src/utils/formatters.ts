function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getTrackerKey(date: Date) {
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const dateFormatter = (date: Date) => {
  return capitalize(
    new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "full",
      timeStyle: "short",
    })
      .format(date)
      .split("às")[0]
  );
};

export const getAppropriateSalutation = (date: Date) => {
  const hour = date.getHours();

  if (hour >= 6 && hour < 12) return "Bom dia!";
  if (hour >= 12 && hour < 18) return "Boa tarde!";
  return "Boa noite!";
};
