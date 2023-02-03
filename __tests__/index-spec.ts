import * as index from '../src/index';

test('Should have Keycloak available', () => {
  expect(index.Keycloak).toBeTruthy();
});
