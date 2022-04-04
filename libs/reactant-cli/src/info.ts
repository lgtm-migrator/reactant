import envInfo from 'envinfo';
import { Command } from 'commander';
import chalk from 'chalk';
import { PackageJson } from '.';

export const createInfoCommand = (
  command: Command,
  packageJson: PackageJson
) => {
  command
    .command('info')
    .description('collect debugging information')
    .action(() => {
      console.log(chalk.bold('\nEnvironment Information:\n'));
      console.log(
        `  Current version of ${packageJson.name}: ${packageJson.version}`
      );
      console.log(`  Execution path: ${__dirname}`);
      return envInfo
        .run(
          {
            System: ['OS', 'CPU'],
            Binaries: ['Node', 'npm', 'Yarn'],
            Browsers: [
              'Chrome',
              'Edge',
              'Internet Explorer',
              'Firefox',
              'Safari',
            ],
            npmPackages: [
              'react',
              'react-dom',
              'reactant',
              'reactant-web',
              'reactant-native',
              'reactant-cli',
            ],
            npmGlobalPackages: ['reactant-cli'],
          },
          {
            duplicates: true,
            showNotFound: true,
          }
        )
        .then(console.log);
    });
};
