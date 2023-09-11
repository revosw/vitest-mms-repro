This repo demonstrates the problem with running [vitest](https://github.com/vitest-dev/vitest) in `--no-threads` mode, using [mongoose](https://github.com/Automattic/mongoose) and [mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server).

The problem arises when there are two tests importing the same model.
```
 FAIL  error.test.ts [ error.test.ts ]
OverwriteModelError: Cannot overwrite `user` model once compiled.
 ❯ Mongoose.model node_modules/.pnpm/mongoose@7.5.1/node_modules/mongoose/lib/index.js:563:13
 ❯ model.ts:22:31
     20| 
     21| // Create the User model using the schema
     22| export const model = mongoose.model('user', schema);
       |                               ^
     23| 
 ❯ error.test.ts:1:31

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed | 1 passed (2)
      Tests  1 passed (1)
   Start at  23:50:08
   Duration  2.13s (transform 30ms, setup 450ms, collect 20ms, tests 1.36s, environment 0ms, prepare 124ms)
```
Running the same tests without `--no-threads` works fine.