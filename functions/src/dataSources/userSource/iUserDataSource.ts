import { ActionSource } from "../../typings/types";
import { UserInfo } from "../../auth/userInfo";

export interface IUserDataSource {
  getUser(inputCred: ActionSource): Promise<UserInfo>;
}
