import { environment } from "..";
import { ProfilesValues } from "./profiles-values";

export default class Profiles {

    public static isProfileDevelopment(): boolean {
        return environment.profile == ProfilesValues.DEVELOPMENT;
    }

    public static isProfileProduction(): boolean {
        return environment.profile == ProfilesValues.PRODUCTION;
    }

    public static isProfileTest(): boolean {
        return environment.profile == ProfilesValues.TEST;
    }
}
