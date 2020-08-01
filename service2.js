import { expose } from "threads/worker";
import {exec} from 'child_process'
import path from 'path'


expose(function sum() {
  let sum = 0

  while(sum < 5000){
    sum += 1
    exec(`echo ${sum} > ${path.resolve('thread2.txt')} `)
  }

  return `[Sub Thread 2]: ${sum}`
});

