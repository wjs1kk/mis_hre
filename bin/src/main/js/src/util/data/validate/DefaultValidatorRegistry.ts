import { ValidatorRegistry } from "./ValidatorRegistry";
import {
    DateFormatValidator,
    DateRangeValidator,
    MaxValueValidator,
    MinValueValidator,
    NumberBetweenValidator,
    NumberRangeValidator,
    RegExpPatternValidator,
    RequiredValueValidator,
    StringLengthBetweenValidator,
    StringMaxLengthValidator,
    StringMinLengthValidator
} from "./common-validators";

export class DefaultValidatorRegistry extends ValidatorRegistry {

    constructor() {
        super();

        this.register("required", RequiredValueValidator);
        this.register("min", MinValueValidator);
        this.register("max", MaxValueValidator);
        this.register("between", NumberBetweenValidator);
        this.register("range", NumberRangeValidator);
        this.register("regExp", RegExpPatternValidator);
        this.register("dateFormat", DateFormatValidator);
        this.register("dateRange", DateRangeValidator);
        this.register("minLength", StringMinLengthValidator);
        this.register("maxLength", StringMaxLengthValidator);
        this.register("lengthBetween", StringLengthBetweenValidator);
    }
}
