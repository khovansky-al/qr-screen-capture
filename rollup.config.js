import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'build/esm/index.js',
  output: {
    file: './build/index.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps(),
    terser(),
    copy({
      targets: [
        { src: ['src/index.html', 'src/test-code.png'], dest: 'build/' }
      ],
    }),
  ]
}
