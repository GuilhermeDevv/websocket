import { users } from "../http";

class RemoveUserService {
  async execute(id: string) {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default new RemoveUserService();
