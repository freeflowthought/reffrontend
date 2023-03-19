import { AsyncState } from "store/lib/common";
import { Form } from "store/lib/form";
import { UserService } from "store/service/user";

export class SigninController {
  userService = UserService.getInstance();
  form = new Form({
    email: {
      value: "",
    },
    password: {
      value: "",
    },
  });
  signin = new AsyncState(async () => {
    const { success, values } = this.form.validateFields()
    if (success) {
        await this.userService.signin(values);
    }
  });
}
