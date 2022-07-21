type Tool = string | {
  name: string
  pros?: string[]
  cons?: string[]
}

type Feature = Tool & {
  analog?: Feature[]
  todo?: string[]
  problem?: string[]
  solved?: string[]
}

interface IFrontend {
  infra: {
    packageManager: Feature
    bundler: Feature
  }
  quality: {
    linter: Feature
    unitTest: Feature
    e2eTest: Feature
    typing: Feature
  }
  knowledge: {
    documentation: Feature
    playground: Feature
    apiContracts: Feature
    architecture: Feature
  }
  code: {
    uiLibrary: Feature
    uiKit: Feature
    stateManager: Feature
    router: Feature
  },
  domains: Feature[]
}

const sampleApplication: IFrontend = {
  infra: {
    packageManager: 'npm',
    bundler: 'webpack'
  },
  quality: {
    linter: 'eslint:standard',
    unitTest: 'jest',
    e2eTest: 'puppeteer',
    typing: 'typescript'
  },
  knowledge: {
    documentation: 'markdown:docusaurus',
    playground: 'storybook',
    apiContracts: 'typescript:interfaces',
    architecture: 'uml'
  },
  code: {
    uiLibrary: 'react',
    uiKit: 'AntD',
    stateManager: 'ReduxToolkit',
    router: 'react-router'
  },
  domains: [
    'users',
    {
      name: 'goods',
      todo: [
        'improve cart'
      ]
    }
  ]
}
