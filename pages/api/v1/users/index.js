import { createRouter } from "next-connect";
import controller from "infra/controller.js";
import user from "models/user.js";
import activation from "models/activation";

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  const userInputValues = request.body;
  const newUser = await user.create(userInputValues);
  //1. Criar o Token de Ativação

  //2. Enviar esse token por EMAIL
  await activation.sendEmailToUser(newUser);
  return response.status(201).json(newUser);
}
