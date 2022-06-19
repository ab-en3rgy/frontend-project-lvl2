#!/usr/bin/env node

import { program } from 'commander';
import makeDiff from "../src/index.js"; 

program
  .usage('[options] <filepath1> <filepath2>')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>','output format')
  .description('Compares two configuration files and shows a difference.')
  .action((filepath1, filepath2) => {
    console.log(makeDiff(filepath1, filepath2));
  });

program.parse();

const options = program.opts();