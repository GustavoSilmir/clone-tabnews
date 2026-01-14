function status(request, response) {
  response
    .status(200)
    .json({ chave: "acho que agora irei aprender http de uma vez por todas" });
}

export default status;
