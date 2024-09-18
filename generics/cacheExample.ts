type BadgeValue = {
    badge_name: string,
    badge_subject: string,
}

type S3Url = {
    large_name: string;
    large_url: string;
    small_name: string;
    small_url: string;
};

async function setBadgeCache(
    key: string,
    value: BadgeValue,
    ttl = 3600,
){
    try {
        await this.cacheManager.set(key, value, { ttl: Number(ttl) });
        console.log(`${value} wow ${key} info cached successfully`,);
    } catch (error) {
        console.log(`${error.message}`);
        throw new Error(error);
    }
}


async function setImageUrlCache(
    key: string,
    value: S3Url[],
    ttl = 3600,
){
    try {
        await this.cacheManager.set(key, value, { ttl: Number(ttl) });
        console.log(`${value} wow ${key} info cached successfully`,);
    } catch (error) {
        console.log(`${error.message}`);
        throw new Error(error);
    }
}









async function setCache<T>(
    key: string,
    value: T,
    ttl = this.configService.get('localCache.tenMin'),
){
    try {
        await this.cacheManager.set(key, value, { ttl: Number(ttl) });
        console.log(`${value} wow ${key} info cached successfully`,);
    } catch (error) {
        console.log(`${error.message}`);
        throw new Error(error);
    }
}

// async function getCache<T>(
//     key: string,
// ): Promise<T | undefined> {
//     try {
//       const input: string = await this.cacheManager.get(key);
//       let res;
//       if (input) {
//         console.log(`get wow ${key} successfully, result = ${res}`);
//         res = input;
//       }
//       return res;
//     } catch (error) {
//       console.log(`${error.message}`);
//       throw new Error(error);
//     }
// }
