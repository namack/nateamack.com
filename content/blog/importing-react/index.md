---
title: Importing React
date: "2019-02-19"
---

When I first started writing React, I noticed the requirement of importing React in my JSX files:

```js
import React from ‘react’;
```

This wasn’t too much of a leap for me, since I had already been importing Ember for years before:

```js
import Ember from ‘ember’;
```

But then, I noticed that people were importing all of React’s exports as a namespace:

```js
import * as React from ‘react’;
```

I initially thought this was a fancy new way of importing React that would allow Webpack to perform advanced operations like tree shaking. Unfortunately, this is not the case. The reality is that these are just two different ways to import `React` into your file.

## Why do we need to import React anyway?

You may have noticed that even though you need to import `React`, you don’t actually use it anywhere in your file. Usually, it is bad practice to leave unused variables sitting around in a file and your linter should complain. This is not the case for `React`, however, since JSX requires it to be in scope. Eventually though, you won’t have to import `React` at all for your JSX to know what is going on. You’ll only have to import the parts of React that you actually need, like hooks, context, and types (😏). In fact, Ember has already dropped the requirement for importing `Ember` as of [Ember 2.16]([https://www.emberjs.com/blog/2017/10/11/ember-2-16-released.html](https://www.emberjs.com/blog/2017/10/11/ember-2-16-released.html)).

## Which one should you use?

At this point in time, it doesn’t matter. `React` just needs to be in scope for JSX to render correctly. How you get it there is up to you: it is a stylistic choice. That being said, consistency is more important than style, so just be consistent throughout a project.

If you do end up importing all of React’s exports into the `React` namespace using `import * as React from ‘react’`, you won’t be able to use any more named imports in the file. This is because everything has already been exported - just into the `React` namespace. This is also technically the case when you import `React` as the default import using `import React from ‘react’`. You are able to use anything in the namespace, like `React.useState`. Personally, I prefer to use named imports to reduce the need for prepending everything with `React.`. Then, when we don’t need to import `React` at all, it will be easy to update using a simple find and replace.

The ability to import `React` as the default export is really just an illusion by Babel to make things look nice. Without it, we would **have** to write `import * as React from ‘react’` everywhere and we wouldn’t have a choice. So make a choice and stick with it - at least on a per project basis.