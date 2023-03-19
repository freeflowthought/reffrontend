import { AsyncState } from "store/lib/common";
import { Form } from "store/lib/form";
import { UserService } from "store/service/user";

export class SignupController {
  userService = UserService.getInstance();
  form = new Form({
    email: {
      value: "",
    },
    password: {
      value: "",
    },
  });
  signup = new AsyncState(async () => {
    const { success, values } = this.form.validateFields()
    if (success) {
        await this.userService.signup(values);
    }
  });
}
