import { container } from 'tsyringe';

import uploadConfig from '@config/upload';
import DiskStorageProvider from './implementations/DiskStorageProvider';
import IStorageprovider from './models/IStorageProvider';
import S3StorageProvider from './implementations/S3StorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageprovider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);
