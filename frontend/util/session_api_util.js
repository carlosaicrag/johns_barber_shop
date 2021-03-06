export const signup = (barber) => {
  return $.ajax({
    url: '/api/barbers',
    method: 'POST',
    data: { barber }
  });
};

export const login = (barber) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { barber }
  });
};

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

export const forgotPassword = (email) => {
  return $.ajax({
    url: '/api/passwords/forgot',
    method: 'POST',
    data: { email }
  });
};

export const clientSignup = (client) => {
  return $.ajax({
    url: "/api/clients",
    method: "POST",
    data: {client}
  })
}

export const clientLogout = (client) => {
  return $.ajax({
    url: "/api/client_session",
    method: "DELETE",
    data: {client}
  })
}

export const clientLogin = (client) => {
  return $.ajax({
    url: "/api/client_session",
    method: "POST",
    data: {client}
  })
}