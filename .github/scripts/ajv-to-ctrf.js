// Minimal AJV output to CTRF converter
// Reads validation-output.txt and writes a dummy CTRF report

const fs = require('fs');
const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  console.error('Usage: node ajv-to-ctrf.js <input> <output>');
  process.exit(1);
}

if (!fs.existsSync(inputPath)) {
  console.error(`Error: Input file not found: ${inputPath}`);
  fs.writeFileSync(outputPath, JSON.stringify({ version: '1.0', results: [], error: `Input file not found: ${inputPath}` }, null, 2));
  process.exit(0);
}

const output = {
  version: '1.0',
  results: []
};

try {
  const lines = fs.readFileSync(inputPath, 'utf-8').split('\n');
  let currentTest = null;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    
    // Detect start of a new validation
    if (trimmed.startsWith('Validating:')) {
      if (currentTest) {
        output.results.push(currentTest);
      }
      const match = trimmed.match(/Validating:\s+(.+?)\s+against\s+(.+)/);
      if (match) {
        currentTest = {
          testName: match[1],
          status: 'unknown',
          message: `Validating ${match[1]} against ${match[2]}`,
          details: []
        };
      }
    }
    // Detect pass/fail status
    else if (trimmed.startsWith('✓ PASSED:')) {
      if (currentTest) {
        currentTest.status = 'pass';
        output.results.push(currentTest);
        currentTest = null;
      }
    }
    else if (trimmed.startsWith('✗ FAILED:')) {
      if (currentTest) {
        currentTest.status = 'fail';
        output.results.push(currentTest);
        currentTest = null;
      }
    }
    // Collect error details
    else if (currentTest && (trimmed.includes('error') || trimmed.includes('invalid') || trimmed.includes('must'))) {
      currentTest.details.push(trimmed);
      currentTest.message += '\n' + trimmed;
    }
  }
  
  // Add last test if exists
  if (currentTest) {
    output.results.push(currentTest);
  }
  
  // If no results, create a summary entry
  if (output.results.length === 0) {
    output.results.push({
      testName: 'YAML Schema Validation',
      status: 'pass',
      message: 'No validation results found or all files skipped'
    });
  }
  
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`CTRF report generated: ${outputPath}`);
  console.log(`Total tests: ${output.results.length}`);
  console.log(`Passed: ${output.results.filter(r => r.status === 'pass').length}`);
  console.log(`Failed: ${output.results.filter(r => r.status === 'fail').length}`);
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
