// Minimal AJV output to CTRF converter
// Reads validation-output.txt and writes a dummy CTRF report

const fs = require('fs');
const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  console.error('Usage: node ajv-to-ctrf.js <input> <output>');
  process.exit(1);
}

const output = {
  version: '1.0',
  results: []
};

try {
  const lines = fs.readFileSync(inputPath, 'utf-8').split('\n');
  for (const line of lines) {
    if (line.trim()) {
      output.results.push({
        testName: line.substring(0, 50),
        status: line.includes('error') ? 'fail' : 'pass',
        message: line
      });
    }
  }
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log('CTRF report generated:', outputPath);
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
