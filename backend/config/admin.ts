interface EnvHelper {
  (key: string, defaultValue?: any): any;
  int: (key: string, defaultValue?: number) => number;
  bool: (key: string, defaultValue?: boolean) => boolean;
  array: (key: string, defaultValue?: any[]) => any[];
}

export default ({ env }: { env: EnvHelper }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
