#!/usr/bin/env node

import { program } from 'commander';

program
  .usage('[options] <filepath1> <filepath2>')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>','output format')
  .description('Compares two configuration files and shows a difference.');

program.parse();

const options = program.opts();
console.log('all right');