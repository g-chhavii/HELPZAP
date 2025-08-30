import Service from "../models/Service.js";

export async function listServices(req, res) {
  const services = await Service.find({ active: true }).sort("title");
  res.json(services);
}

export async function createService(req, res) {
  const service = await Service.create(req.body);
  res.status(201).json(service);
}

export async function updateService(req, res) {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(service);
}

export async function removeService(req, res) {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
}
