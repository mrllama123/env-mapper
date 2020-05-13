const core = require('@actions/core');
const {setEnv} = require('./set-env');

/**
 * main runner function for github action
 */
async function run() {
  try { 
    const mappingFile = core.getInput('envMapperFile');
    const mappingString = core.getInput('envMapperString');
    const mapperKey = core.getInput('envMapperKey');
    core.info(mappingString)
    if (mappingFile === '' && mappingString === '') {
      throw new Error('need to specify either a mapping file or string');
    } else if (mappingString !== '') {
      core.info('setting env vars now for string')
      await setEnv(mappingString, mapperKey, false);
    } else {
      core.info('setting env vars now for file')
      await setEnv(mappingFile, mapperKey);
    }
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
