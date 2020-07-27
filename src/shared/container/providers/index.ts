import { container } from 'tsyringe';
import IStorageprovider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageprovider>(
  'StorageProvider',
  DiskStorageProvider,
);
