import { container } from 'tsyringe';
import IStorageprovider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';
import IMailProvider from './MailProvider/models/IMailProvider';

container.registerSingleton<IStorageprovider>(
  'StorageProvider',
  DiskStorageProvider,
);

// container.registerSingleton<IMailProvider>(
//   'MailProvider',
//   DiskStorageProvider,
// );
