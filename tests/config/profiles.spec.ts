
import environment from '../../src/config/environment';
import Profiles from '../../src/config/profiles/profiles';
import { ProfilesValues } from '../../src/config/profiles/profiles-values';

describe('Profiles', () => {

    // Seta o perfil como "test" após cada teste
    afterEach(() => environment.profile = ProfilesValues.TEST);

    test('isProfileTest', () => expect(Profiles.isProfileTest()).toBeTruthy());

    test('isProfileProduction', () => {
        environment.profile = ProfilesValues.PRODUCTION;
        expect(Profiles.isProfileProduction()).toBeTruthy();
    });

    test('isProfileDevelopment', () => {
        environment.profile = ProfilesValues.DEVELOPMENT;
        expect(Profiles.isProfileDevelopment()).toBeTruthy();
    });
});
