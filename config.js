exports.DATABASE_URL = process.env.DATABASE_URL ||
                      global.DATABASE_URL ||
                      'test'
exports.PORT = process.env.PORT || 3001;