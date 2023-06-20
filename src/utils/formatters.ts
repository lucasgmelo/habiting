function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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
