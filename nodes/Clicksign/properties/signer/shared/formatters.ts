export function formatDocumentation(doc: string): string {
  const digits = doc.replace(/\D/g, '');

  if (digits.length === 11) {
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  return doc;
}

export function formatBirthday(birthday: string): string {
  let date = new Date(birthday);

  if (isNaN(date.getTime())) {
    const digits = birthday.split('/');

    if (digits.length === 3) {
      const day = parseInt(digits[0]);
      const month = parseInt(digits[1]) - 1;
      const year = parseInt(digits[2]);

      date = new Date(year, month, day);

      if (isNaN(date.getTime())) {
        return birthday;
      }
    } else {
      return birthday;
    }
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
