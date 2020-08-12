export default {
  port: process.env.UPDATES_PORT || process.env.PORT || 3000,
  host: process.env.UPDATES_HOST || '0.0.0.0',
  github: {
    token: process.env.GITHUB_TOKEN || '',
    api: {
      debug: true,
      protocol: "https",
      version: '3.0.0',
      headers: {
        'user-agent': 'org_name/squirrel-updates-server'
      },
      host: process.env.GITHUB_HOST || 'api.github.com',
      pathPrefix: process.env.GITHUB_PATH_PREFIX || ''
    }
  },
  sentry: {
    dsn: process.env.SENTRY_DSN
  },
  user: process.env.REPO_OWNER || 'org_name',
  repo: process.env.REPO_NAME || 'repo',
  privateRepo: process.env.UPDATES_PRIVATE_REPO || false,
  patterns: {
    darwin: {
      dmg: /-mac\.dmg/,
      zip: /-mac\.zip/
    },
    win32: {
      installer: /-setup\.exe/,
      zip: /-windows\.zip/
    },
    linux: {
      deb: {
        i386: /-linux-i386\.deb/,
        amd64: /-linux-amd64\.deb/
      },
      rpm: {
        i386: /-linux-i386\.rpm/,
        x86_64: /-linux-x86_64\.rpm/
      }
    }
  },
  mirrors: process.env.MIRROR_NAMES,
  channels: ['dev', 'beta', 'stable'],
  defaultChannel: 'stable',
  downloadsCountOffset: parseInt(process.env.DOWNLOADS_COUNT_OFFSET || '0') || 0,
  excludeDrafts: JSON.parse(process.env.EXCLUDE_DRAFTS || 'true'),
  excludePrereleases: JSON.parse(process.env.EXCLUDE_PRERELEASES || 'false'),
  cacheTTL: '2 minutes',
  cacheIgnoreRedirects: true,
  releaseLocationExternal: false,
  externalURLPrefixForAssetNames: ''
};
