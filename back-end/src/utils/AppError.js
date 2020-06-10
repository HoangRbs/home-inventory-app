class AppError extends Error {
  constructor(err_message, err_code){
    super();

    this.err_message = err_message;
    this.err_code = err_code;
    this.err_status = Math.floor(err_code / 100) === 4? 'failed': 'error';
  }
}

module.exports = AppError;