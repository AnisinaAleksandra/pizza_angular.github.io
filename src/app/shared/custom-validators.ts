import { AbstractControl, ValidationErrors } from '@angular/forms';
import { pizzasList } from '../main/pizzasList';

export class CustomValidators {
  static phoneNumberValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const result =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
        control.value
      );
    return result ? null : { phone: { value: control.value } };
  }

  static productTitleValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const nameOfPizzas = pizzasList.map((el) => el.name);
    let nameOfPizza = control.value?.trim();
    const res = nameOfPizzas.find((el) => el === nameOfPizza);
    return res ? null : { productTitle: { value: control.value } };
  }
}
