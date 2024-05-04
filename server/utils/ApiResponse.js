export class ApiResponse {
  constructor(success, statusCode, message, data, error) {
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.error = error;
  }

  static error(statusCode, message, error) {
    return new ApiResponse(false, statusCode, message, null, error);
  }

  static success(statusCode, message, data) {
    return new ApiResponse(true, statusCode, message, data, null);
  }
}
