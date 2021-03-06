import subCategories from "../../data/subCategories.json";

export default (req, res) => {
  if (!subCategories[req.query.name]) {
    return res.status(400).json({
      message: `incorrect category name, received '${req.query.name}'`,
    });
  }

  res.send(subCategories[req.query.name]);
};
