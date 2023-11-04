import '@testing-library/jest-dom'
jest.mock('next/config', () => () => ({
  serverRuntimeConfig: {
    YOUR_PUBLIC_VARIABLE: 'value-of-env'  // Change this line and copy your env
  },
  publicRuntimeConfig:{
    NEXT_PUBLIC_AppDomain: 'https://localhost/11111'
  }
}))