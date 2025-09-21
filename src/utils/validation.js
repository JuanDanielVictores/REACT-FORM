
export function validateEmail(email) {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) return "El correo es obligatorio.";
  if (!re.test(email)) return "El correo no tiene un formato válido.";
  return "";
}

export function validatePassword(password) {
  if (!password) return "La contraseña es obligatoria.";
  if (password.length < 8) return "La contraseña debe tener al menos 8 caracteres.";
  return "";
}
