import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcryptjs from "bcryptjs";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw ApiResponse.error(500, "Error while generating tokens", error);
  }
};

export const register = asyncHandler(async (req, res) => {
  // get details
  // check if user already exists
  // hash password
  // create user
  const { fullname, email, username, password } = req.body;

  if (!(fullname || email || username || password)) {
    return res
      .status(500)
      .json(ApiResponse.error(500, "All fields are required"));
  }

  const userExists = await User.findOne({ $or: [{ email }, { username }] });

  if (userExists) {
    return res
      .status(409)
      .json(ApiResponse.error(409, "User already exists", userExists));
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const user = await User.create({
    fullname,
    email,
    username,
    password: hashedPassword,
  });

  res
    .status(201)
    .json(ApiResponse.success(200, "User Created Successfully", user));
});

export const login = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!email && !username) {
    throw ApiResponse.error(400, "Email or username is required");
  }

  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  console.log(user);

  if (!user) {
    throw ApiResponse.error(404, "User not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw ApiResponse.error(401, "Wrong Password", {});
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  // const accessToken = user.generateAccessToken();
  // const refreshToken = user.generateRefreshToken();

  // console.log("access token: ", accessToken);
  // console.log("refresh token: ", refreshToken);

  // user.refreshToken = refreshToken;
  // await user.save({ validateBeforeSave: false });

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  1;
  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      ApiResponse.success(200, "User logged in successfully", {
        loggedInUser,
        accessToken,
        refreshToken,
      })
    );
});

export const logout = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(ApiResponse.success(200, "User Logged Out Successfully", {}));
});

export const getCurrentUser = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(ApiResponse.success(200, "User Fetched Successfully", req.user));
});

export const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);

  const passwordMatch = await user.isPasswordCorrect(oldPassword);

  if (!passwordMatch) {
    throw ApiResponse.error(400, "Wrong Password", {});
  }

  user.password = await bcryptjs.hash(newPassword, 10);

  await user.save({ validateBeforeSave: false });

  res.status(200).json(ApiResponse.success(200, "Password has changed", {}));
});

export const updateAccountDetails = asyncHandler(async (req, res) => {
  const { fullname, email } = req.body;

  if (!fullname || !email) {
    throw ApiResponse.error(400, "All fields are required", {});
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullname,
        email,
      },
    },
    { new: true }
  ).select("-password");

  res
    .status(200)
    .json(ApiResponse.success(200, "Details updated successfully!", user));
});
