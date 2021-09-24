export const convertToSentenceCase = (str: string) =>
  str.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase()
  })

export const convertToCamelCase = (str: string) =>
  str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase()
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase()
    })
