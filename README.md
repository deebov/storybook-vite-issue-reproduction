# Storybook + TailwindCSS + Vite issue reproduction

Currently, when there's a file that has `#` in its name in `public` folder, the build process crashes with such output:

```
[vite] Internal server error: ENOENT: no such file or directory, open '/project-dir/public/c'
  Plugin: vite:css-analysis
  File: /project-dir/styles/globals.css
```

This issues started happening since `tailwindcss@4.0.8`. You can downgrade to `tailwindcss@4.0.7` to see that this issues dot no happen.

```
bun add tailwindcss@4.0.7 @tailwindcss/vite@4.0.0 @tailwindcss/postcss@4.0.7
```
