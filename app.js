When to sell: 2020-03-24
sell price: 4.3166
---
Gain: 57%
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js
Analizing year 2020...
[
  {
    maxDiff: 0.6114000000000002,
    whenToBuy: {
      no: '105/C/NBP/2021',
      effectiveDate: '2021-06-02',
      bid: 3.6115,
      ask: 3.6845
    },
    whenToSell: {
      no: '227/C/NBP/2021',
      effectiveDate: '2021-11-24',
      bid: 4.1393,
      ask: 4.2229
    }
  },
  {
    maxDiff: 0.5795000000000003,
    whenToBuy: {
      no: '048/C/NBP/2020',
      effectiveDate: '2020-03-10',
      bid: 3.7371,
      ask: 3.8125
    },
    whenToSell: {
      no: '058/C/NBP/2020',
      effectiveDate: '2020-03-24',
      bid: 4.2312,
      ask: 4.3166
    }
  },
  {
    maxDiff: 0.3906999999999998,
    whenToBuy: {
      no: '023/C/NBP/2019',
      effectiveDate: '2019-02-01',
      bid: 3.6738,
      ask: 3.748
    },
    whenToSell: {
      no: '191/C/NBP/2019',
      effectiveDate: '2019-10-02',
      bid: 3.9841,
      ask: 4.0645
    }
  },
  {
    maxDiff: 0.5820000000000003,
    whenToBuy: {
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Add 5 years withouth forb"            
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   app.js

no changes added to commit (use "git add" and/or "git commit -a")
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git add .                                            
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Add 5 years withouth forb"
[master 00d7168] Add 5 years withouth forb
 1 file changed, 20 insertions(+), 4 deletions(-)
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin master                

Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 6 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 521 bytes | 521.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/cesardanielhg/js_challenge_gold.git
   1fc3701..00d7168  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin main  

error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/cesardanielhg/js_challenge_gold.git'
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin main

error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/cesardanielhg/js_challenge_gold.git'
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git branch
* master
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % $ git checkout -b main        

zsh: command not found: $
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git checkout -b main 

Switched to a new branch 'main'
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git add .
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Add 5 years withouth forb"
On branch main
nothing to commit, working tree clean
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin main                  

To https://github.com/cesardanielhg/js_challenge_gold.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/cesardanielhg/js_challenge_gold.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % 
 *  History restored 

%                                                                                                                               
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git add .                                
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Adding september condition for actual year"
[main a1830ca] Adding september condition for actual year
 1 file changed, 1 insertion(+)
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js                                               
Analizing year 2020...
[
  {
    maxDiff: 0.6114000000000002,
    whenToBuy: {
      no: '105/C/NBP/2021',
      effectiveDate: '2021-06-02',
      bid: 3.6115,
      ask: 3.6845
    },
    whenToSell: {
      no: '227/C/NBP/2021',
      effectiveDate: '2021-11-24',
      bid: 4.1393,
      ask: 4.2229
    }
  },
  {
    maxDiff: 0.5795000000000003,
    whenToBuy: {
      no: '048/C/NBP/2020',
      effectiveDate: '2020-03-10',
      bid: 3.7371,
      ask: 3.8125
    },
    whenToSell: {
      no: '058/C/NBP/2020',
      effectiveDate: '2020-03-24',
      bid: 4.2312,
      ask: 4.3166
    }
  },
  {
    maxDiff: 0.3906999999999998,
    whenToBuy: {
      no: '023/C/NBP/2019',
      effectiveDate: '2019-02-01',
      bid: 3.6738,
      ask: 3.748
    },
    whenToSell: {
      no: '191/C/NBP/2019',
      effectiveDate: '2019-10-02',
      bid: 3.9841,
      ask: 4.0645
    }
  },
  {
    maxDiff: 0.5820000000000003,
    whenToBuy: {
      no: '019/C/NBP/2018',
      effectiveDate: '2018-01-26',
      bid: 3.2876,
      ask: 3.354
    },
    whenToSell: {
      no: '213/C/NBP/2018',
      effectiveDate: '2018-11-02',
      bid: 3.793,
      ask: 3.8696
    }
  }
]
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js
Analizing year 2020...
(node:1312) UnhandledPromiseRejectionWarning: SyntaxError: Unexpected token B in JSON at position 4
    at JSON.parse (<anonymous>)
    at callAPI (/Users/cesardanielhg/Documents/Dev/codexitos/training/js_challenge_gold/app.js:26:15)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async main (/Users/cesardanielhg/Documents/Dev/codexitos/training/js_challenge_gold/app.js:57:18)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:1312) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:1312) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git add .                                                 
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Adding september condition for actual year"
[main aa9c585] Adding september condition for actual year
 1 file changed, 3 insertions(+), 2 deletions(-)
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js                                               
Analizing year 2020...
(node:1382) UnhandledPromiseRejectionWarning: SyntaxError: Unexpected token  in JSON at position 0
    at JSON.parse (<anonymous>)
    at callAPI (/Users/cesardanielhg/Documents/Dev/codexitos/training/js_challenge_gold/app.js:27:15)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async main (/Users/cesardanielhg/Documents/Dev/codexitos/training/js_challenge_gold/app.js:58:18)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:1382) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:1382) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js
Analizing year 2020...
(node:1456) UnhandledPromiseRejectionWarning: SyntaxError: Unexpected token  in JSON at position 0
    at JSON.parse (<anonymous>)
    at callAPI (/Users/cesardanielhg/Documents/Dev/codexitos/training/js_challenge_gold/app.js:30:15)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async main (/Users/cesardanielhg/Documents/Dev/codexitos/training/js_challenge_gold/app.js:61:18)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:1456) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:1456) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js
Analizing year 2020...
(node:1479) UnhandledPromiseRejectionWarning: SyntaxError: Unexpected token  in JSON at position 0
    at JSON.parse (<anonymous>)
    at callAPI (/Users/cesardanielhg/Documents/Dev/codexitos/training/js_challenge_gold/app.js:30:15)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async main (/Users/cesardanielhg/Documents/Dev/codexitos/training/js_challenge_gold/app.js:61:18)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:1479) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:1479) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % 
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js
Analizing year 2020...
[
  {
    maxDiff: 0.6114000000000002,
    whenToBuy: {
      no: '105/C/NBP/2021',
      effectiveDate: '2021-06-02',
      bid: 3.6115,
      ask: 3.6845
    },
    whenToSell: {
      no: '227/C/NBP/2021',
      effectiveDate: '2021-11-24',
      bid: 4.1393,
      ask: 4.2229
    }
  },
  {
    maxDiff: 0.6114000000000002,
    whenToBuy: {
      no: '105/C/NBP/2021',
      effectiveDate: '2021-06-02',
      bid: 3.6115,
      ask: 3.6845
    },
    whenToSell: {
      no: '227/C/NBP/2021',
      effectiveDate: '2021-11-24',
      bid: 4.1393,
      ask: 4.2229
    }
  },
  {
    maxDiff: 0.5795000000000003,
    whenToBuy: {
      no: '048/C/NBP/2020',
      effectiveDate: '2020-03-10',
      bid: 3.7371,
      ask: 3.8125
    },
    whenToSell: {
      no: '058/C/NBP/2020',
      effectiveDate: '2020-03-24',
      bid: 4.2312,
      ask: 4.3166
    }
  },
  {
    maxDiff: 0.3906999999999998,
    whenToBuy: {
      no: '023/C/NBP/2019',
      effectiveDate: '2019-02-01',
      bid: 3.6738,
      ask: 3.748
    },
    whenToSell: {
      no: '191/C/NBP/2019',
      effectiveDate: '2019-10-02',
      bid: 3.9841,
      ask: 4.0645
    }
  },
  {
    maxDiff: 0.5820000000000003,
    whenToBuy: {
      no: '019/C/NBP/2018',
      effectiveDate: '2018-01-26',
      bid: 3.2876,
      ask: 3.354
    },
    whenToSell: {
      no: '213/C/NBP/2018',
      effectiveDate: '2018-11-02',
      bid: 3.793,
      ask: 3.8696
    }
  }
]
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git add .                                                 
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Adding more years"                         
[main c9f5c37] Adding more years
 1 file changed, 8 insertions(+), 3 deletions(-)
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin master                                 

Branch 'master' set up to track remote branch 'master' from 'origin'.
Everything up-to-date
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin main  

To https://github.com/cesardanielhg/js_challenge_gold.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/cesardanielhg/js_challenge_gold.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin master

Branch 'master' set up to track remote branch 'master' from 'origin'.
Everything up-to-date
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git checkout -b master                                  

fatal: A branch named 'master' already exists.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git add .                        
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Adding more years"
On branch main
nothing to commit, working tree clean
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin master        

Branch 'master' set up to track remote branch 'master' from 'origin'.
Everything up-to-date
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js                      
Analizing year 2020...
[
  {
    maxDiff: 0.6114000000000002,
    whenToBuy: {
      no: '105/C/NBP/2021',
      effectiveDate: '2021-06-02',
      bid: 3.6115,
      ask: 3.6845
    },
    whenToSell: {
      no: '227/C/NBP/2021',
      effectiveDate: '2021-11-24',
      bid: 4.1393,
      ask: 4.2229
    }
  },
  {
    maxDiff: 0.6114000000000002,
    whenToBuy: {
      no: '105/C/NBP/2021',
      effectiveDate: '2021-06-02',
      bid: 3.6115,
      ask: 3.6845
    },
    whenToSell: {
      no: '227/C/NBP/2021',
      effectiveDate: '2021-11-24',
      bid: 4.1393,
      ask: 4.2229
    }
  },
  {
    maxDiff: 0.5795000000000003,
    whenToBuy: {
      no: '048/C/NBP/2020',
      effectiveDate: '2020-03-10',
      bid: 3.7371,
      ask: 3.8125
    },
    whenToSell: {
      no: '058/C/NBP/2020',
      effectiveDate: '2020-03-24',
      bid: 4.2312,
      ask: 4.3166
    }
  },
  {
    maxDiff: 0.3906999999999998,
    whenToBuy: {
      no: '023/C/NBP/2019',
      effectiveDate: '2019-02-01',
      bid: 3.6738,
      ask: 3.748
    },
    whenToSell: {
      no: '191/C/NBP/2019',
      effectiveDate: '2019-10-02',
      bid: 3.9841,
      ask: 4.0645
    }
  },
  {
    maxDiff: 0.5820000000000003,
    whenToBuy: {
      no: '019/C/NBP/2018',
      effectiveDate: '2018-01-26',
      bid: 3.2876,
      ask: 3.354
    },
    whenToSell: {
      no: '213/C/NBP/2018',
      effectiveDate: '2018-11-02',
      bid: 3.793,
      ask: 3.8696
    }
  }
]
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % ls
app.js
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git checkout -b master           

fatal: A branch named 'master' already exists.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git checkout master   

error: Your local changes to the following files would be overwritten by checkout:
        app.js
Please commit your changes or stash them before you switch branches.
Aborting
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git add .                        
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Adding more years"
[main 6019906] Adding more years
 1 file changed, 1 insertion(+), 1 deletion(-)
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin master        

Branch 'master' set up to track remote branch 'master' from 'origin'.
Everything up-to-date
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin master

Branch 'master' set up to track remote branch 'master' from 'origin'.
Everything up-to-date
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git add .                        
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Adding more years"
[main 29803b7] Adding more years
 1 file changed, 33 insertions(+), 1 deletion(-)
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin master        

Branch 'master' set up to track remote branch 'master' from 'origin'.
Everything up-to-date
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js                      
/Users/cesardanielhg/Documents/Dev/codexitos/training/js_challenge_gold/app.js:118
}
^

SyntaxError: Unexpected token '}'
    at wrapSafe (internal/modules/cjs/loader.js:1001:16)
    at Module._compile (internal/modules/cjs/loader.js:1049:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % node app.js
Analizing year 2020...
finial result [
  {
    maxDiff: 0.6114000000000002,
    whenToBuy: {
      no: '105/C/NBP/2021',
      effectiveDate: '2021-06-02',
      bid: 3.6115,
      ask: 3.6845
    },
    whenToSell: {
      no: '227/C/NBP/2021',
      effectiveDate: '2021-11-24',
      bid: 4.1393,
      ask: 4.2229
    }
  },
  {
    maxDiff: 0.6114000000000002,
    whenToBuy: {
      no: '105/C/NBP/2021',
      effectiveDate: '2021-06-02',
      bid: 3.6115,
      ask: 3.6845
    },
    whenToSell: {
      no: '227/C/NBP/2021',
      effectiveDate: '2021-11-24',
      bid: 4.1393,
      ask: 4.2229
    }
  },
  {
    maxDiff: 0.5795000000000003,
    whenToBuy: {
      no: '048/C/NBP/2020',
      effectiveDate: '2020-03-10',
      bid: 3.7371,
      ask: 3.8125
    },
    whenToSell: {
      no: '058/C/NBP/2020',
      effectiveDate: '2020-03-24',
      bid: 4.2312,
      ask: 4.3166
    }
  },
  {
    maxDiff: 0.3906999999999998,
    whenToBuy: {
      no: '023/C/NBP/2019',
      effectiveDate: '2019-02-01',
      bid: 3.6738,
      ask: 3.748
    },
    whenToSell: {
      no: '191/C/NBP/2019',
      effectiveDate: '2019-10-02',
      bid: 3.9841,
      ask: 4.0645
    }
  },
  {
    maxDiff: 0.5820000000000003,
    whenToBuy: {
      no: '019/C/NBP/2018',
      effectiveDate: '2018-01-26',
      bid: 3.2876,
      ask: 3.354
    },
    whenToSell: {
      no: '213/C/NBP/2018',
      effectiveDate: '2018-11-02',
      bid: 3.793,
      ask: 3.8696
    }
  }
]
0: 3.6115
1: 3.6115
2: 3.7371
3: 3.6738
4: 3.2876
Best moment to buy 2018-11-02 the amount of: 38763.69650609882
Best moment to sell 2020-03-24 the amount of: 35450.93590470788
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git add .                        
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git commit -m "Compares values"  
[main abf48ca] Compares values
 1 file changed, 3 insertions(+), 2 deletions(-)
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin master        

Branch 'master' set up to track remote branch 'master' from 'origin'.
Everything up-to-date
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin main  

To https://github.com/cesardanielhg/js_challenge_gold.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/cesardanielhg/js_challenge_gold.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git push -u origin master

Branch 'master' set up to track remote branch 'master' from 'origin'.
Everything up-to-date
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git branch
* main
  master
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git checkout master              

Switched to branch 'master'
Your branch is up to date with 'origin/master'.
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % git checkout main        
Switched to branch 'main'
cesardanielhg@MacBook-Pro-de-Cesar js_challenge_gold % 