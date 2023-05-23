const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$")

export const isValidMongoId = (id: string) => checkMongoIDRegExp.test(id)
