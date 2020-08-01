import { expose } from "threads/worker";
import {exec} from 'child_process'
import path from 'path'


expose(function sum() {
  let sum = 0

  while(sum < 3000){
    sum += 1
    exec(`echo ${sum} > ${path.resolve('thread1.txt')} `)
  }

  return `[Sub Thread 1]: ${sum}`
});

