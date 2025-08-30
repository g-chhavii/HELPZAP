import User from "../models/User.js";

export async function listHelpers(req, res) {
  const helpers = await User.find({ role: "helper" }).select("-password");
  res.json(helpers);
}

export async function approveHelper(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, { isApproved: true }, { new: true }).select("-password");
  res.json(user);
}

export async function blockHelper(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, { isBlocked: true }, { new: true }).select("-password");
  res.json(user);
}

export async function unblockHelper(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, { isBlocked: false }, { new: true }).select("-password");
  res.json(user);
}

// GET all unapproved helpers
export const getPendingHelpers = async (req, res) => {
  try {
    const helpers = await User.find({ role: "helper", isApproved: false });
    res.json(helpers);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const approveHelper = async (req, res) => {
  try {
    const { id } = req.params;
    const helper = await User.findById(id);

    if (!helper || helper.role !== "helper") {
      return res.status(404).json({ message: "Helper not found" });
    }

    helper.isApproved = true;
    await helper.save();

    res.json({ message: "Helper approved successfully", helper });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

