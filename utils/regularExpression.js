const emailER = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
const claveER = /^[a-z0-9_-]{5,16}$/
const horaER = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/

export { emailER, claveER, horaER }
