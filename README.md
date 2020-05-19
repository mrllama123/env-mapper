
![units-test](https://github.com/mrllama123/env-mapper/workflows/units-test/badge.svg?branch=master)

# env mapper github action

a simple github action that set env vars based of a key.
very similar to cfn mapping [parameter](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html). Useful for setting env vars that have different values based of what infra environment it is in like test  

## Usage 

there is two ways to use it: 

### mappings are in a file

github action:
```yaml
uses: mrllama123/env-mapper@v1
with:
  envMapperFile: ./path to file
  envMapperKey: key
```
file:
```yaml
key:
  SOME_ENV: value
...
```


### mappings are a string
```yaml
uses: mrllama123/env-mapper@v1
with:
  envMapperString: |
    key:
      SOME_ENV: value
  envMapperKey: key
```

## local dev setup

Install the dependencies  

```bash
npm install
```

Run the tests :heavy_check_mark:  
```bash
npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

package up action for release

```bash
npm package
```

## release 

1. make sure you have packaged up the code via the npm command

2. create a github release using for tag use sematic versioning e.g `1.0.0` using this [process](https://help.github.com/en/actions/building-actions/publishing-actions-in-github-marketplace#publishing-an-action)  




