import type { UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';
import { loadEnv } from 'vite';
import { wrapperEnv } from './build/utils';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default ({ command, mode }:ConfigEnv):UserConfig=>{
  const root = process.cwd();

  const env = loadEnv(mode, root);

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  const isBuild = command === 'build';
  return {
    
  }
}