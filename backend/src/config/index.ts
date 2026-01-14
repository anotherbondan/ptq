import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const {
  PORT,
  DB_PORT,
  DB_HOST,
  DB_PASS,
  DB_USER,
  DB_NAME,
  DB_DIALECT,
  DB_CERT,
  NODE_ENV,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRATION,
  URL_TOKEN_SECRET,
  URL_TOKEN_EXPIRATION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_S3_BUCKET_NAME,
  AWS_S3_PATH,
  AWS_S3_SIGNED_URL_EXPIRATION,
  SMTP_HOST,
  SMTP_USER,
  SMTP_PASSWORD,
  FROM_MAIL,
  REACT_APP_BASE_URL,
  LOG_WEBHOOK,
} = process.env;

export const S3_BASE_URL = `https://${AWS_S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/`;