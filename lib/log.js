/**
 * Initializes winston logging with the given configuration parameters.
 * @author Alexander Vu
 */
const winston = require('winston');
const { format } = require('logform');

const log = winston.createLogger({
  // Adjust the log format to your needs.
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SSS' }),
    format.printf((nfo) => `${nfo.timestamp} [${nfo.level.toUpperCase()}] ${nfo.message}`),
  ),
  transports: [
    new winston.transports.File({
      level: process.env.LOG_FILE_LEVEL,
      filename: process.env.LOG_FILE,
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 10,
      colorize: false,
    }),
    new winston.transports.Console({
      level: process.env.LOG_CONSOLE_LEVEL,
      handleExceptions: true,
    }),
  ],
  exitOnError: false,
});

log.emitErrs = true;

const logStream = {
  write(message) {
    log.verbose(message.slice(0, -1));
  },
};

module.exports = { log, logStream };
