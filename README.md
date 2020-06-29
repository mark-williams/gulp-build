# gulp-build
## Investigating gulp for website/app building. 
Initially this is a *very* (very!) simple angular application, however to experiment with injecting the file paths in the correct order I've split this into modules (along John Papa's excellent Angular style guidelines). This is to test the convention of ending module files with -module.js so that they can be injected in to the page before their associated code.

Will eventually look to creates separate build tasks to minify etc. and place in a dedicated build folder. 

### 16 January 2016
Now uses gulp-useref to combine multiple assets files into one file. This is driven by comment tags in the html and is used here to keep external libraries apart from the 'application' files.  
