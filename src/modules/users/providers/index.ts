import { container } from 'tsyringe';
import IHashProvider from './HashProvider/models/IHashProvider';
import BCrypttHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCrypttHashProvider);
