/*
  Copyright 2019 the JSDoc Authors.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
/**
 * @alias @jsdoc/util.fs
 */
import path from 'node:path';

import klawSync from 'klaw-sync';
import _ from 'lodash';

export function lsSync(dir, opts = {}) {
  const depth = _.has(opts, 'depth') ? opts.depth : -1;

  const files = klawSync(dir, {
    depthLimit: depth,
    filter: (f) => !path.basename(f.path).startsWith('.'),
    nodir: true,
  });

  return files.map((f) => f.path);
}
