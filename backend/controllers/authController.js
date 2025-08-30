import jwt from "jsonwebtoken";
import User from "../models/User.js";

function signToken(user) {
  return jwt.sign(
    { id: user._id, role: user.role, name: user.name },
    process.env.SECRET,
    { expiresIn: "7d" }
  );
}

export async function register(req, res) {
  try {
    // NEW EDIT: added services to destructure
    const { name, email, password, role, services, phone } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already registered" });

    const isApproved = role === "helper" ? false : true;

    // NEW EDIT: include services if helper
    const user = await User.create({
      name,
      email,
      password,
      role,
      phone,
      isApproved,
      services: role === "helper" ? services : [],
    });

    const token = signToken(user);

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        isApproved: user.isApproved,
        services: user.services, // NEW EDIT: return services
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    // NEW EDIT: populate services
    const user = await User.findOne({ email }).populate("services");
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const ok = await user.comparePassword(password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    if (user.role === "helper" && !user.isApproved)
      return res.status(403).json({ message: "Helper not approved yet" });

    if (user.isBlocked)
      return res.status(403).json({ message: "Account blocked" });

    const token = signToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        services: user.services, // NEW EDIT: include services on login
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function me(req, res) {
  try {
    // NEW EDIT: populate services so frontend can show them
    const user = await User.findById(req.user.id)
      .select("-password")
      .populate("services");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
