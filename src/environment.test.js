import environment from './environments';
import lget from 'lodash/get';

test('Testing enviroments', () => {
    expect(environment).not.toBeUndefined();
    const apiBaseURL = lget(environment, 'api.baseURL');
    expect(apiBaseURL).toEqual('https://dev.pokeapi.co/api/v2/');
});
