const throwMissingEnvError = (envVar: unknown) => {
  throw new Error(
    `❌❌❌ Missing env: ${envVar}, check your ${process.env.NODE_ENV} environment \n`
  )
}

class Env {
  private readonly env: Record<string, string>

  constructor() {
    if (process.env.NODE_ENV === 'production') {
      this.env = {
        TIMMY_API_BASE_URL:
          process.env.NEXT_PUBLIC_TIMMY_API_BASE_URL ||
          throwMissingEnvError('NEXT_PUBLIC_TIMMY_API_BASE_URL'),
      }
    } else if (process.env.NODE_ENV === 'development') {
      this.env = {
        TIMMY_API_BASE_URL:
          process.env.NEXT_PUBLIC_TIMMY_API_BASE_URL ||
          throwMissingEnvError('NEXT_PUBLIC_TIMMY_API_BASE_URL'),
      }
    } else {
      throw new Error('Invalid NODE_ENV')
    }
  }

  static getEnv() {
    return new Env().env
  }
}

const ENV = Env.getEnv()

export default ENV
