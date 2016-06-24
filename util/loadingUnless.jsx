import React from 'react';

export default function(condition, cb) {
    if (condition) return cb();

    return ( 'Loading!!!!!!11' );
}
