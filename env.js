const variables = {
  development: {
    googleApiKey: "AIzaSyD1KJBaw3qPjtXQU78cLl_OqdXboUTaKNY"
  },
  production: {
    googleApiKey: "AIzaSyD1KJBaw3qPjtXQU78cLl_OqdXboUTaKNY"
  }
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development;
  }
  return variables.production;
};

export default getEnvVariables;
