var _ = require('lodash')

var sum = _(process.argv) 
            .map(Number)
            .filter(_.isFinite)
            .sum()

console.log(sum);

