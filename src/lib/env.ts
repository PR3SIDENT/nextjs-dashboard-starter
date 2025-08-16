import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  // Add more environment variables here as needed
  // NEXT_PUBLIC_API_URL: z.string().url().optional(),
  // DATABASE_URL: z.string().min(1).optional(),
})

function validateEnv() {
  try {
    return envSchema.parse(process.env)
  } catch (error) {
    console.error('❌ Invalid environment variables:', error)
    throw new Error('Invalid environment variables')
  }
}

export const env = validateEnv()

// Export the type for use elsewhere
export type Env = z.infer<typeof envSchema>
