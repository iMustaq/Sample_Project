var env = process.env.NODE_ENV;
if (env == null || env == undefined) {
  env = "dev";
}

let result;
if (env == "dev") {
  result = require('dotenv').config({ path: './environments/.env.dev' });
}
if (result.error) {
  console.log('Error while getting .env file')
  throw result.error;
}
const { parsed: envs } = result;

// S3 bucket configurations 

const s3BucketProperties = {
  "awsRegion": {
    "doc": envs.S3BUCKET_AWSREGION_DOC,
    "default": envs.S3BUCKET_AWSREGION,
    "env": envs.S3BUCKET_AWSREGION_ENV,
    "arg": envs.S3BUCKET_AWSREGION_ARG
  },
  "awsAccessKeyId": {
    "doc": envs.S3BUCKET_AWSACCESSKEYID_DOC,
    "default": envs.S3BUCKET_AWSACCESSKEYID,
    "env": envs.S3BUCKET_AWSACCESSKEYID_ENV,
    "arg": envs.S3BUCKET_AWSACCESSKEYID_ARG
  },
  "awsSecretAccessKey": {
    "doc": envs.S3BUCKET_AWSSECRETACCESSKEY_DOC,
    "default": envs.S3BUCKET_AWSSECRETACCESSKEY,
    "env": envs.S3BUCKET_AWSSECRETACCESSKEY_ENV,
    "arg": envs.S3BUCKET_AWSSECRETACCESSKEY_ARG
  },
  "awsS3Bucket": {
    "doc": envs.S3BUCKET_AWSS3BUCKET_DOC,
    "default": envs.S3BUCKET_AWSS3BUCKET,
    "env": envs.S3BUCKET_AWSS3BUCKET_ENV,
    "arg": envs.S3BUCKET_AWSS3BUCKET_ARG
  },
  "awsS3URL": {
    "doc": envs.S3BUCKET_AWSS3URL_DOC,
    "default": envs.S3BUCKET_AWSS3URL,
    "env": envs.S3BUCKET_AWSS3URL_ENV,
    "arg": envs.S3BUCKET_AWSS3URL_ARG
  },
  "awsS3Expirytime": {
    "doc": envs.S3BUCKET_AWSS3EXPIRYTIME_DOC,
    "default": envs.S3BUCKET_AWSS3EXPIRYTIME,
    "env": envs.S3BUCKET_AWSS3EXPIRYTIME_ENV,
    "arg": envs.S3BUCKET_AWSS3EXPIRYTIME_ARG
  }
}

// localDir path 
const localPath = envs.LOCAL_DIR_PATH

module.exports = {
  s3BucketProperties,
  localPath
}