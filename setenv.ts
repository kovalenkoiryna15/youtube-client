const { writeFile } = require('fs');
const { argv } = require('yargs');
require('dotenv').config();

// read the command line arguments passed with yargs
const { environment } = argv;

const isProduction = environment === 'prod';

const targetPath = isProduction ? `./src/environments/environment.prod.ts` : `./src/environments/environment.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  API_KEY: "${process.env.API_KEY}",
  YOUTUBE_API_URL: "https://www.googleapis.com/youtube/v3",
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
