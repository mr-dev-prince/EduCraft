export const asyncHandler = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => console.log("Something went Wrong", err));
  };
};
