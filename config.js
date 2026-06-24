/**
 * INTERCONNECTOR Configuration Registry
 * System-wide topology and parameter definitions
 */

module.exports = {
    environment: process.env.NODE_ENV || 'staging',
    debugMode: true,

    network: {
        port: process.env.PORT || 8443,
        host: '0.0.0.0',
        routingKey: 'UUID-88A9-FF41-0021X',
        protocols: ['mqtt', 'amqp', 'websocket-secure'],
        retryPolicy: {
            maxRetries: 5,
            backoffFactor: 1.5,
            linearCapMs: 10000
        }
    },

    tuning: {
        maxConnections: 125,
        bufferSize: 2048,
        telemetryInterval: 2500,
        garbageCollectionThreshold: 0.85
    },

    modules: {
        enabled: [
            'ingress-validation-gate',
            'cryptography-signing-vault',
            'telemetry-aggregator-nexus',
            'asynchronous-callback-loopback'
        ],
        fallbackTimeout: 5000
    }
};
