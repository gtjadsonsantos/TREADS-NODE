import { spawn, Thread, Worker } from "threads";

async function workingThread(filename) {
  const thread = await spawn(new Worker(`${filename}`));

  await thread()
  .then(value => console.log(value))
   
  await Thread.terminate(thread)
}

workingThread('./service1.js');
workingThread('./service2.js');