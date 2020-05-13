const fs = require('fs');
const yaml = require('yaml');
const core = require('@actions/core');
/**
 * sets the env variables based of the key paramter 
 * @param {Object} mappingRaw 
 * @param {string} key 
 * @param {boolean} isFile 
 */
async function setEnv(mappingRaw, key, isFile=true) {
  try {
    let mapping = undefined
    if (isFile) {
      const file = fs.readFileSync(mappingRaw, 'utf-8');
      mapping = yaml.parse(file);
    } else {
      mapping = yaml.parse(mappingRaw);
    }

    if (key in mapping) {
      core.info('key found');
      for(const key of Object.keys(mapping)) {
        core.info('setting ' + key);
        const envVar = mapping[key];
        core.exportVariable(key, envVar);
      }
    } else {
      throw new Error('key not in mapping object')
    }
  } catch(error) {
    throw new Error(error.message)
  }
  
}

module.exports = {
  setEnv
}
