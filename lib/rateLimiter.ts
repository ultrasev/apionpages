import { LRUCache } from "lru-cache";

export class RateLimiter {
  private tokenCache: LRUCache<string, number>;

  constructor(options: { uniqueTokenPerInterval: number; interval: number }) {
    this.tokenCache = new LRUCache<string, number>({
      max: options.uniqueTokenPerInterval || 500,
      ttl: options.interval || 60000,
    });
  }

  public async limit(token: string): Promise<boolean> {
    const tokenCount = this.tokenCache.get(token) || 0;

    if (tokenCount >= 100) {
      return false;
    }

    this.tokenCache.set(token, tokenCount + 1);
    return true;
  }
}

export const rateLimiter = new RateLimiter({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 500, // Max number of users per interval
});
