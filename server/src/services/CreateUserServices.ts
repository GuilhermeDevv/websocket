import { users } from "../http";
interface CreateUserDTO {
  id: string;
  name: string;
}
class CreateUserServices {
  async execute({ id, name }: CreateUserDTO) {
    users.push({
      id,
      name,
    });
  }
}

export default new CreateUserServices();
