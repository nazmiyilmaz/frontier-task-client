export default ({ store }, inject) => {
  // ABSOLUTE DATE FORMAT
  function absoluteFormat(date, select, short) {
    if (!short) {
      return new Date(date).toLocaleString('en-US', {
        // selected defaults
        day: select?.day === false ? undefined : '2-digit',
        month: select?.month === false ? undefined : 'long',
        hour: select?.hour === false ? undefined : '2-digit',
        minute: select?.min === false ? undefined : '2-digit',
        year: select?.year === false ? undefined : 'numeric',
        // optional fields
        weekday: select?.weekday === true ? 'long' : undefined,
      })
    } else {
      return new Date(date).toLocaleString('en-US', {
        // selected defaults
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: select?.hour === false ? undefined : '2-digit',
        minute: select?.min === false ? undefined : '2-digit',
      })
    }
  }

  // DATE FUNCTION
  function date(date, opts = {}) {
    const { select = {}, short = false } = opts
    return absoluteFormat(date, select, short)
  }

  inject('date', date)
}
