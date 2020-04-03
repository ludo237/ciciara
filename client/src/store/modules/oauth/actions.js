import * as mutations from "./mutation-types";

export const login = async ({ commit, state }, payload) => {
  // This is stupid right now because we don't have an API call here but
  // it will have sense in the future
  return new Promise(resolve => {
    commit(mutations.LOGIN, { username: payload.username });

    resolve({ data: { user: state.user } });
  });
};
