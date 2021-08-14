# GITHUB ACTONS - CONTINOUS INTEGRATION

## DOCUMENTATION
1. GITHUB ACTIONS [video] https://www.twitch.tv/videos/1112211463
2. GITHUB ACTIONS [repo]  https://github.com/midudev/pokedex-for-ci/blob/main/.github/workflows/pipeline.yml


## GITHUB WORKFLOW CONFIGURATION
This configuration is defined in a YML file. It's stored in the path `./.github/workflows/{file}` and it is used by Github to run pipeline actions.
### Dependencies installation
In order to speed up installation process, it can be used the continous integration action defined by npm (`ci`).

This command improves dependencies installation using lock file.
```yaml
- name: Install dependencies
  run: npm ci
``` 

## SERVER CONFIGURATION
Server can be configured to send information about deployment status.
### Health check
Returns sending 'OK' if app has been deployed 
```javascript
app.get('/health', (req.res) => {
  res.send('ok)
})
```
This endpoint response has to be tracked by Heroku, so Github Actions has to be updated accordingly.
```yaml
deploy:
    needs: [test, e2e]
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - name: Deploy to Heroku
        if: ${{ github.event_name == 'push' }}
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: ${{secrets.HEROKU_APP}}
          heroku_email: ${{secrets.HEROKU_API_EMAIL}}
          healthcheck: "https://${{secrets.HEROKU_APP}}.herokuapp.com/health"
          rollbackonhealthcheckfailed: true
``` 


### Version check
Returns s
```javascript
const {version} = require('./package.json')
app.get('/health', (req.res) => {
  res.send('ok)
})
```

## SCRIPT CONFIGURATION
### Heroku
Heroku only installs prod dependencies. For this reason it is necessary to define (by default) `dev` script for development and `start` script for prod in `package.json`.
```javascript
"start:dev:server": "webpack-dev-server --open --mode development"
```
```javascript
"start": "node app.js"
```
