import { container } from 'tsyringe';
import DiskStorageProvider from './implementations/DiskStorageProvider';
import IStorageprovider from './models/IStorageProvider';

const providers = {
  disk: DiskStorageProvider,
};

container.registerSingleton<IStorageprovider>(
  'StorageProvider',
  providers.disk,
);
