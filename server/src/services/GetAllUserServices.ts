import { users } from "../http";

class GetAllUserServices {
  async execute() {
    return users;
  }
}

export default new GetAllUserServices();
