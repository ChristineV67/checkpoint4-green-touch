export const authActions = (req, res) => {
  console.log(req.body.email);

  res.json({
    message: "coucou depuis le register",
  });
};
